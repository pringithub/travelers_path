import { useEffect, useRef } from 'react';
import Globe, { type GlobeInstance } from 'globe.gl';
import * as THREE from 'three';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import landTopology from 'world-atlas/land-110m.json';
import countryTopology from 'world-atlas/countries-110m.json';
import { useAppStore } from '../state/store';
import { findExplorer } from '../data/explorers';
import { GLOBE_COLORS } from './theme';
import { journeyCentroid } from './geo';

const landFeatures = (
  feature(
    landTopology as unknown as Topology,
    (landTopology as unknown as Topology).objects.land as GeometryCollection,
  ) as unknown as { features: GeoJSON.Feature[] }
).features;

const countryFeatures = (
  feature(
    countryTopology as unknown as Topology,
    (countryTopology as unknown as Topology).objects.countries as GeometryCollection,
  ) as unknown as { features: GeoJSON.Feature[] }
).features;

const SATELLITE_TEXTURE_URL = `${import.meta.env.BASE_URL}textures/earth-blue-marble.jpg`;


interface WaypointTag {
  kind: 'waypoint';
  lat: number;
  lng: number;
  name: string;
  date?: string;
  color: string;
}

type HtmlTag = WaypointTag;

function renderTag(d: HtmlTag): HTMLElement {
  const div = document.createElement('div');
  div.className = 'wp-pin';
  const stem = document.createElement('span');
  stem.className = 'wp-pin-stem';
  const dot = document.createElement('span');
  dot.className = 'wp-pin-dot';
  dot.style.background = d.color;
  const tag = document.createElement('span');
  tag.className = 'wp-tag';
  tag.textContent = d.date ? `${d.name} \u2014 ${d.date}` : d.name;
  div.append(stem, dot, tag);
  return div;
}

export function GlobeView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeInstance | null>(null);
  const waypointTagsRef = useRef<WaypointTag[]>([]);
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const selectedJourneyId = useAppStore((s) => s.selectedJourneyId);
  const mapStyle = useAppStore((s) => s.mapStyle);
  const showLabels = useAppStore((s) => s.showLabels);

  // One-time globe setup.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const globe = new Globe(el)
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor(GLOBE_COLORS.atmosphere)
      .atmosphereAltitude(0.18)
      .htmlLat((d) => (d as HtmlTag).lat)
      .htmlLng((d) => (d as HtmlTag).lng)
      .htmlAltitude(0.009)
      .htmlElement((d) => renderTag(d as HtmlTag))
      .htmlTransitionDuration(0)
      .pointOfView({ lat: 20, lng: 0, altitude: 2.4 });

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
    globe.controls().enableDamping = true;

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
      globeRef.current = null;
      el.innerHTML = '';
    };
  }, []);

  // Apply the selected globe surface style (basic land silhouette, political
  // country boundaries, or satellite imagery).
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    if (mapStyle === 'satellite') {
      // The imagery already depicts land/ocean, so the flat polygon layer is hidden.
      globe.globeImageUrl(SATELLITE_TEXTURE_URL).polygonsData([]);
    } else {
      const features = mapStyle === 'political' ? countryFeatures : landFeatures;
      const strokeColor = mapStyle === 'political' ? GLOBE_COLORS.politicalStroke : GLOBE_COLORS.landStroke;
      // globeImageUrl('') alone doesn't clear a previously-loaded texture map,
      // so assign a fresh material to fully reset the surface from satellite mode.
      globe
        .globeImageUrl('')
        .globeMaterial(new THREE.MeshPhongMaterial({ color: GLOBE_COLORS.ocean }))
        .polygonsData(features)
        .polygonCapColor(() => GLOBE_COLORS.land)
        .polygonSideColor(() => 'rgba(58, 44, 26, 0.15)')
        .polygonStrokeColor(() => strokeColor)
        .polygonAltitude(0.006);
    }
  }, [mapStyle]);

  // Toggle visibility of waypoint name/date labels without disturbing the markers.
  useEffect(() => {
    containerRef.current?.classList.toggle('hide-labels', !showLabels);
  }, [showLabels]);

  // Update route + waypoint layers and camera on selection change.
  useEffect(() => {
    const globe = globeRef.current;
    const explorer = findExplorer(selectedExplorerId);
    const journey = explorer?.journeys.find((j) => j.id === selectedJourneyId);
    if (!globe || !explorer || !journey) return;

    globe.controls().autoRotate = false;

    // Altitudes must stay above the land layer (0.006) or routes render underneath it.
    globe
      .pathsData([journey])
      .pathPoints((j) => (j as typeof journey).waypoints)
      .pathPointLat((wp) => (wp as { lat: number }).lat)
      .pathPointLng((wp) => (wp as { lng: number }).lng)
      .pathPointAlt(0.009)
      .pathColor(() => journey.color ?? GLOBE_COLORS.routeInactive)
      .pathStroke(3.5)
      .pathDashLength(0.6)
      .pathDashGap(0.03)
      .pathDashAnimateTime(6000)
      .pathTransitionDuration(600);

    waypointTagsRef.current = journey.waypoints.map((wp) => ({
      kind: 'waypoint',
      lat: wp.lat,
      lng: wp.lng,
      name: wp.name,
      date: wp.date,
      color: journey.color ?? GLOBE_COLORS.routeInactive,
    }));
    globe.htmlElementsData([...waypointTagsRef.current]);

    const centroid = journeyCentroid(journey.waypoints);
    globe.pointOfView({ lat: centroid.lat, lng: centroid.lng, altitude: 1.8 }, 1200);
  }, [selectedExplorerId, selectedJourneyId]);

  return <div ref={containerRef} className="globe-view" />;
}
