import type { Waypoint } from "../data/types";

const EARTH_RADIUS_KM = 6371;

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function toDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function haversineKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

export function journeyDistanceKm(waypoints: Waypoint[]): number {
  let total = 0;
  for (let i = 1; i < waypoints.length; i++) {
    total += haversineKm(waypoints[i - 1], waypoints[i]);
  }
  return total;
}

// Spherical linear interpolation between two lat/lng points, fraction f in [0, 1].
function slerp(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
  f: number,
) {
  const lat1 = toRad(a.lat);
  const lng1 = toRad(a.lng);
  const lat2 = toRad(b.lat);
  const lng2 = toRad(b.lng);

  const x1 = Math.cos(lat1) * Math.cos(lng1);
  const y1 = Math.cos(lat1) * Math.sin(lng1);
  const z1 = Math.sin(lat1);
  const x2 = Math.cos(lat2) * Math.cos(lng2);
  const y2 = Math.cos(lat2) * Math.sin(lng2);
  const z2 = Math.sin(lat2);

  const d = Math.acos(Math.min(1, Math.max(-1, x1 * x2 + y1 * y2 + z1 * z2)));
  if (d === 0) return { lat: a.lat, lng: a.lng };

  const sinD = Math.sin(d);
  const A = Math.sin((1 - f) * d) / sinD;
  const B = Math.sin(f * d) / sinD;

  const x = A * x1 + B * x2;
  const y = A * y1 + B * y2;
  const z = A * z1 + B * z2;

  const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
  const lng = Math.atan2(y, x);
  return { lat: toDeg(lat), lng: toDeg(lng) };
}

/** Position along a journey's waypoints at progress t in [0, 1], weighted by leg distance. */
export function positionAlongJourney(
  waypoints: Waypoint[],
  t: number,
): { lat: number; lng: number } {
  if (waypoints.length === 0) return { lat: 0, lng: 0 };
  if (waypoints.length === 1)
    return { lat: waypoints[0].lat, lng: waypoints[0].lng };

  const clamped = Math.min(1, Math.max(0, t));
  const legDistances = waypoints
    .slice(1)
    .map((wp, i) => haversineKm(waypoints[i], wp));
  const total = legDistances.reduce((a, b) => a + b, 0);
  if (total === 0) return { lat: waypoints[0].lat, lng: waypoints[0].lng };

  let target = clamped * total;
  for (let i = 0; i < legDistances.length; i++) {
    const legDist = legDistances[i];
    if (target <= legDist || i === legDistances.length - 1) {
      const f = legDist === 0 ? 0 : target / legDist;
      return slerp(waypoints[i], waypoints[i + 1], Math.min(1, f));
    }
    target -= legDist;
  }
  return {
    lat: waypoints[waypoints.length - 1].lat,
    lng: waypoints[waypoints.length - 1].lng,
  };
}

export function journeyCentroid(waypoints: Waypoint[]): {
  lat: number;
  lng: number;
} {
  const lat = waypoints.reduce((sum, wp) => sum + wp.lat, 0) / waypoints.length;
  const lng = waypoints.reduce((sum, wp) => sum + wp.lng, 0) / waypoints.length;
  return { lat, lng };
}
