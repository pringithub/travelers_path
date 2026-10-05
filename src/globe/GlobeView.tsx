import { useEffect, useRef } from "react";
import Globe, { type GlobeInstance } from "globe.gl";
import * as THREE from "three";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import landTopology from "world-atlas/land-110m.json";
import countryTopology from "world-atlas/countries-110m.json";
import { useAppStore } from "../state/store";
import { findExplorer } from "../data/explorers";
import { GLOBE_COLORS } from "./theme";
import { journeyCentroid } from "./geo";

const landFeatures = (
  feature(
    landTopology as unknown as Topology,
    (landTopology as unknown as Topology).objects.land as GeometryCollection,
  ) as unknown as { features: GeoJSON.Feature[] }
).features;

const countryFeatures = (
  feature(
    countryTopology as unknown as Topology,
    (countryTopology as unknown as Topology).objects
      .countries as GeometryCollection,
  ) as unknown as { features: GeoJSON.Feature[] }
).features;

const TEXTURE_BASE_URL = `${import.meta.env.BASE_URL}textures/`;

type TileUrlFn = (x: number, y: number, level: number) => string;

// blankTile=false makes missing high-zoom tiles 404 (falling back to coarser imagery) instead of a placeholder.
const esriImageryTileUrl: TileUrlFn = (x, y, level) =>
  `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${level}/${y}/${x}?blankTile=false`;

// three-globe accepts null to disable the tile engine, but its typings don't.
const NO_TILES = null as unknown as TileUrlFn;

// Hysteresis band (in globe radii) so tiles don't flicker on/off near the threshold.
const TILES_ON_ALTITUDE = 0.7;
const TILES_OFF_ALTITUDE = 0.9;
// Web Mercator tiles are stretched past ~85°, so near-polar views keep the base texture.
const TILES_MAX_ABS_LAT = 70;

// Key light direction in camera space: upper-left, slightly in front of the viewer.
const SUN_CAMERA_DIRECTION = new THREE.Vector3(-1, 1, 1.5);

const HIDDEN_GLOBE_MATERIAL = new THREE.MeshBasicMaterial({ visible: false });

// Route lift (globe radii): high when far to avoid depth-fighting, low when close to avoid parallax.
const MAX_ROUTE_ALTITUDE = 0.009;
const ROUTE_ALTITUDE_PER_CAMERA_ALTITUDE = 0.004;
const MAX_ROUTE_ALTITUDE_HALVINGS = 5;
// Land polygons sit between the ocean and the route.
const LAND_TO_ROUTE_ALTITUDE = 0.6;

// Quantized to halvings so layers only rebuild a few times per zoom gesture.
function routeAltitudeFor(cameraAltitude: number) {
  const ideal = Math.max(cameraAltitude, 1e-6) * ROUTE_ALTITUDE_PER_CAMERA_ALTITUDE;
  const halvings = Math.round(Math.log2(MAX_ROUTE_ALTITUDE / ideal));
  return (
    MAX_ROUTE_ALTITUDE /
    2 ** Math.min(Math.max(halvings, 0), MAX_ROUTE_ALTITUDE_HALVINGS)
  );
}

function wantsTiles(pov: { lat: number; altitude: number }, tilesOn: boolean) {
  if (Math.abs(pov.lat) > TILES_MAX_ABS_LAT) return false;
  return pov.altitude < (tilesOn ? TILES_OFF_ALTITUDE : TILES_ON_ALTITUDE);
}

function createSatelliteSphere(radius: number, maxAnisotropy: number) {
  const loader = new THREE.TextureLoader();
  const load = (file: string) => {
    const texture = loader.load(`${TEXTURE_BASE_URL}${file}`);
    texture.anisotropy = maxAnisotropy;
    return texture;
  };
  const map = load("earth-blue-marble.jpg");
  map.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshPhongMaterial({
    map,
    bumpMap: load("earth-topology.png"),
    bumpScale: 4,
    specularMap: load("earth-water.png"),
    specular: new THREE.Color(0x4a5a6a),
    shininess: 18,
  });
  // Sits just under the tile layer so it shows through wherever tiles are still loading.
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 0.999, 180, 90),
    material,
  );
  // Match three-globe's orientation (prime meridian along +Z).
  sphere.rotation.y = -Math.PI / 2;
  sphere.visible = false;
  return sphere;
}

function disposeSatelliteSphere(sphere: THREE.Mesh) {
  const material = sphere.material as THREE.MeshPhongMaterial;
  material.map?.dispose();
  material.bumpMap?.dispose();
  material.specularMap?.dispose();
  material.dispose();
  sphere.geometry.dispose();
}

type WaypointRole = "start" | "stop" | "end";

interface WaypointTag {
  kind: "waypoint";
  role: WaypointRole;
  index: number;
  lat: number;
  lng: number;
  name: string;
  date?: string;
  color: string;
}

type HtmlTag = WaypointTag;

const SVG_NS = "http://www.w3.org/2000/svg";
const FLAG_CLOTH_PATH =
  "M3.8 3.5C8 2 12 5 16 3.5S20 3 21.5 3.5V13.5C20 13 18 12.8 16 13.5S8 12 3.8 13.5Z";
const FLAG_WAVE_SECONDS = 2.4;

function svgEl(tag: string, attrs: Record<string, string | number>) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, String(value));
  }
  return el;
}

function renderMarker(d: HtmlTag): SVGSVGElement {
  if (d.role === "stop") {
    const svg = svgEl("svg", { class: "wp-marker", viewBox: "0 0 24 28", "aria-hidden": "true" }) as SVGSVGElement;
    const pole = { x1: 3, y1: 27.5, x2: 3, y2: 2.5, "stroke-linecap": "round" };
    const cloth = svgEl("path", {
      class: "wp-flag-cloth",
      d: FLAG_CLOTH_PATH,
      fill: d.color,
      stroke: "#ffffff",
      "stroke-width": 1,
    }) as SVGPathElement;
    // Offset each flag's phase so they don't wave in lockstep.
    cloth.style.animationDelay = `-${((d.index * 0.37) % FLAG_WAVE_SECONDS).toFixed(2)}s`;
    svg.append(
      svgEl("line", { ...pole, stroke: "rgba(255,255,255,0.85)", "stroke-width": 3.4 }),
      svgEl("line", { ...pole, stroke: "#2b2013", "stroke-width": 1.8 }),
      svgEl("circle", { cx: 3, cy: 2.2, r: 1.6, fill: "#e0b84a" }),
      cloth,
    );
    return svg;
  }

  const svg = svgEl("svg", { class: "wp-marker", viewBox: "0 0 18 18", "aria-hidden": "true" }) as SVGSVGElement;
  const shapes =
    d.role === "start"
      ? [{ tag: "circle", attrs: { cx: 9, cy: 9, r: 5.5, fill: "none" } }]
      : [
          { tag: "line", attrs: { x1: 4, y1: 4, x2: 14, y2: 14 } },
          { tag: "line", attrs: { x1: 14, y1: 4, x2: 4, y2: 14 } },
        ];
  // White underlay first so the coloured stroke reads on any imagery.
  for (const [stroke, width] of [["#ffffff", 5.5], [d.color, 3]] as const) {
    for (const { tag, attrs } of shapes) {
      svg.append(svgEl(tag, { ...attrs, stroke, "stroke-width": width, "stroke-linecap": "round" }));
    }
  }
  return svg;
}

function renderTag(d: HtmlTag): HTMLElement {
  // CSS2DRenderer centres the element on the point, so a zero-size anchor pins the marker there.
  const anchor = document.createElement("div");
  anchor.className = "wp-anchor";
  const pin = document.createElement("div");
  pin.className = `wp-pin wp-pin--${d.role}`;

  const tag = document.createElement("span");
  tag.className = "wp-tag";
  tag.textContent = d.date ? `${d.name} \u2014 ${d.date}` : d.name;
  pin.append(renderMarker(d), tag);
  anchor.append(pin);
  return anchor;
}

export function GlobeView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeInstance | null>(null);
  const waypointTagsRef = useRef<WaypointTag[]>([]);
  const satelliteSphereRef = useRef<THREE.Mesh | null>(null);
  const tilesOnRef = useRef(false);
  const syncViewRef = useRef<(() => void) | null>(null);
  const routeAltitudeRef = useRef(MAX_ROUTE_ALTITUDE);
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const selectedJourneyId = useAppStore((s) => s.selectedJourneyId);
  const mapStyle = useAppStore((s) => s.mapStyle);
  const showLabels = useAppStore((s) => s.showLabels);
  const mapStyleRef = useRef(mapStyle);

  // One-time globe setup.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const globe = new Globe(el)
      .backgroundColor("#000000")
      .backgroundImageUrl(`${TEXTURE_BASE_URL}night-sky.png`)
      .showAtmosphere(true)
      .atmosphereColor(GLOBE_COLORS.atmosphere)
      .atmosphereAltitude(0.12)
      .globeTileEngineMaxLevel(17)
      // Fine segments keep chords from sagging into the surface at low route altitudes.
      .pathResolution(1)
      .polygonCapCurvatureResolution(2)
      .polygonsTransitionDuration(0)
      .htmlLat((d) => (d as HtmlTag).lat)
      .htmlLng((d) => (d as HtmlTag).lng)
      .htmlElement((d) => renderTag(d as HtmlTag))
      .htmlTransitionDuration(0)
      .pointOfView({ lat: 20, lng: 0, altitude: 2.4 });

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
    globe.controls().enableDamping = true;

    // Camera-relative key light: always lights the visible side, with a shaded limb.
    const sun = new THREE.DirectionalLight(0xffffff, 0.85 * Math.PI);
    globe.lights([new THREE.AmbientLight(0xffffff, 0.3 * Math.PI), sun]);

    const satelliteSphere = createSatelliteSphere(
      globe.getGlobeRadius(),
      globe.renderer().capabilities.getMaxAnisotropy(),
    );
    globe.scene().add(satelliteSphere);
    satelliteSphereRef.current = satelliteSphere;

    const syncView = () => {
      sun.position
        .copy(SUN_CAMERA_DIRECTION)
        .applyQuaternion(globe.camera().quaternion);

      const pov = globe.pointOfView();
      const tilesOn =
        mapStyleRef.current === "satellite" &&
        wantsTiles(pov, tilesOnRef.current);
      if (tilesOn !== tilesOnRef.current) {
        tilesOnRef.current = tilesOn;
        globe.globeTileEngineUrl(tilesOn ? esriImageryTileUrl : NO_TILES);
      }

      const routeAltitude = routeAltitudeFor(pov.altitude);
      if (routeAltitude !== routeAltitudeRef.current) {
        routeAltitudeRef.current = routeAltitude;
        globe
          .pathPointAlt(routeAltitude)
          .polygonAltitude(routeAltitude * LAND_TO_ROUTE_ALTITUDE);
      }
    };
    globe.onZoom(syncView);
    syncView();
    syncViewRef.current = syncView;

    const resize = () => {
      globe.width(el.clientWidth);
      globe.height(el.clientHeight);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(el);

    globeRef.current = globe;
    return () => {
      observer.disconnect();
      globe.scene().remove(satelliteSphere);
      disposeSatelliteSphere(satelliteSphere);
      satelliteSphereRef.current = null;
      syncViewRef.current = null;
      tilesOnRef.current = false;
      globeRef.current = null;
      el.innerHTML = "";
    };
  }, []);

  // Apply the selected globe surface style (basic land silhouette, political
  // country boundaries, or satellite imagery).
  useEffect(() => {
    const globe = globeRef.current;
    const satelliteSphere = satelliteSphereRef.current;
    if (!globe || !satelliteSphere) return;

    mapStyleRef.current = mapStyle;
    satelliteSphere.visible = mapStyle === "satellite";
    syncViewRef.current?.();

    if (mapStyle === "satellite") {
      // The imagery already depicts land/ocean, so the flat polygon layer is hidden.
      globe.globeMaterial(HIDDEN_GLOBE_MATERIAL).polygonsData([]);
    } else {
      const features =
        mapStyle === "political" ? countryFeatures : landFeatures;
      const strokeColor =
        mapStyle === "political"
          ? GLOBE_COLORS.politicalStroke
          : GLOBE_COLORS.landStroke;
      globe
        .globeMaterial(
          new THREE.MeshPhongMaterial({ color: GLOBE_COLORS.ocean }),
        )
        .polygonsData(features)
        .polygonCapColor(() => GLOBE_COLORS.land)
        .polygonSideColor(() => "rgba(58, 44, 26, 0.15)")
        .polygonStrokeColor(() => strokeColor)
        .polygonAltitude(routeAltitudeRef.current * LAND_TO_ROUTE_ALTITUDE);
    }
  }, [mapStyle]);

  // Toggle visibility of waypoint name/date labels without disturbing the markers.
  useEffect(() => {
    containerRef.current?.classList.toggle("hide-labels", !showLabels);
  }, [showLabels]);

  // Update route + waypoint layers and camera on selection change.
  useEffect(() => {
    const globe = globeRef.current;
    const explorer = findExplorer(selectedExplorerId);
    const journey = explorer?.journeys.find((j) => j.id === selectedJourneyId);
    if (!globe || !explorer || !journey) return;

    globe.controls().autoRotate = false;

    globe
      .pathsData([journey])
      .pathPoints((j) => (j as typeof journey).waypoints)
      .pathPointLat((wp) => (wp as { lat: number }).lat)
      .pathPointLng((wp) => (wp as { lng: number }).lng)
      .pathPointAlt(routeAltitudeRef.current)
      .pathColor(() => journey.color ?? GLOBE_COLORS.routeInactive)
      .pathStroke(3.5)
      .pathDashLength(0.6)
      .pathDashGap(0.03)
      .pathDashAnimateTime(6000)
      .pathTransitionDuration(600);

    const lastIndex = journey.waypoints.length - 1;
    waypointTagsRef.current = journey.waypoints.map((wp, index) => ({
      kind: "waypoint",
      role: index === 0 ? "start" : index === lastIndex ? "end" : "stop",
      index,
      lat: wp.lat,
      lng: wp.lng,
      name: wp.name,
      date: wp.date,
      color: journey.color ?? GLOBE_COLORS.routeInactive,
    }));
    globe.htmlElementsData([...waypointTagsRef.current]);

    const centroid = journeyCentroid(journey.waypoints);
    globe.pointOfView(
      { lat: centroid.lat, lng: centroid.lng, altitude: 1.8 },
      1200,
    );
  }, [selectedExplorerId, selectedJourneyId]);

  return (
    <>
      <div ref={containerRef} className="globe-view" />
      {mapStyle === "satellite" && (
        <div className="imagery-attribution">
          Powered by Esri &middot; Source: Esri, Maxar, Earthstar Geographics,
          and the GIS User Community &middot; NASA Blue Marble
        </div>
      )}
    </>
  );
}
