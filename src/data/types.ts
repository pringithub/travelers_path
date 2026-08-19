export interface Waypoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  date?: string;
  note?: string;
  kind?: "port" | "landfall" | "death" | "discovery" | "turnaround";
}

export type JourneyMode =
  | "ship"
  | "caravan"
  | "foot"
  | "sled"
  | "balloon"
  | "horse";

export interface Journey {
  id: string;
  title: string;
  yearStart: number;
  yearEnd?: number;
  mode: JourneyMode;
  color?: string;
  waypoints: Waypoint[];
  summary: string;
  distanceKm?: number;
}

export interface Source {
  label: string;
  url: string;
}

export interface Explorer {
  id: string;
  name: string;
  era: string;
  years: string;
  nationality: string;
  portrait?: string;
  blurb: string;
  journeys: Journey[];
  sources: Source[];
  tags?: string[];
}
