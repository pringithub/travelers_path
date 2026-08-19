import { useEffect, useRef } from 'react';
import Globe, { type GlobeInstance } from 'globe.gl';
import * as THREE from 'three';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import landTopology from 'world-atlas/land-110m.json';
import { useAppStore } from '../state/store';
import { findExplorer } from '../data/explorers';
import { GLOBE_COLORS } from './theme';
import { journeyCentroid, positionAlongJourney } from './geo';

const landFeatures = (
  feature(
    landTopology as unknown as Topology,
    (landTopology as unknown as Topology).objects.land as GeometryCollection,
  ) as unknown as { features: GeoJSON.Feature[] }
).features;

const PLAY_DURATION_MS = 12000;

export function GlobeView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeInstance | null>(null);
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const selectedJourneyId = useAppStore((s) => s.selectedJourneyId);
  const playing = useAppStore((s) => s.playing);
  const progress = useAppStore((s) => s.progress);
  const setProgress = useAppStore((s) => s.setProgress);

  // One-time globe setup.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const globe = new Globe(el)
      .globeMaterial(new THREE.MeshPhongMaterial({ color: GLOBE_COLORS.ocean }))
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor(GLOBE_COLORS.atmosphere)
      .atmosphereAltitude(0.18)
      .polygonsData(landFeatures)
      .polygonCapColor(() => GLOBE_COLORS.land)
      .polygonSideColor(() => 'rgba(58, 44, 26, 0.15)')
      .polygonStrokeColor(() => GLOBE_COLORS.landStroke)
      .polygonAltitude(0.006)
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
      .pathColor(() => journey.color ?? GLOBE_COLORS.routeInactive)
      .pathStroke(2)
      .pathDashLength(0.4)
      .pathDashGap(0.15)
      .pathDashAnimateTime(9000)
      .pathTransitionDuration(600);

    globe
      .pointsData(journey.waypoints)
      .pointLat((wp) => (wp as { lat: number }).lat)
      .pointLng((wp) => (wp as { lng: number }).lng)
      .pointColor(() => journey.color ?? GLOBE_COLORS.routeInactive)
      .pointAltitude(0.01)
      .pointRadius(0.35)
      .pointLabel((wp) => {
        const w = wp as { name: string; date?: string; note?: string };
        return `<b>${w.name}</b>${w.date ? `<br/>${w.date}` : ''}${w.note ? `<br/>${w.note}` : ''}`;
      });

    const centroid = journeyCentroid(journey.waypoints);
    globe.pointOfView({ lat: centroid.lat, lng: centroid.lng, altitude: 1.8 }, 1200);
  }, [selectedExplorerId, selectedJourneyId]);

  // Animated marker along the path, driven by play/progress state.
  useEffect(() => {
    const globe = globeRef.current;
    const explorer = findExplorer(selectedExplorerId);
    const journey = explorer?.journeys.find((j) => j.id === selectedJourneyId);
    if (!globe || !journey) return;

    const pos = positionAlongJourney(journey.waypoints, progress);
    globe.htmlElementsData([{ ...pos }]).htmlElement(() => {
      const div = document.createElement('div');
      div.className = 'journey-marker';
      div.textContent = '\u2609';
      return div;
    });
  }, [selectedExplorerId, selectedJourneyId, progress]);

  // Advance progress while playing.
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const current = useAppStore.getState().progress;
      const next = current + dt / PLAY_DURATION_MS;
      if (next >= 1) {
        setProgress(1);
        useAppStore.getState().togglePlay();
        return;
      }
      setProgress(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, setProgress]);

  return <div ref={containerRef} className="globe-view" />;
}
