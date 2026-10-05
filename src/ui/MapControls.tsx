import type { ReactNode } from "react";
import { useAppStore, type MapStyle } from "../state/store";

const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const MAP_STYLES: { id: MapStyle; label: string; icon: ReactNode }[] = [
  {
    id: "satellite",
    label: "Satellite",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m9 11 4 4 5-5-4-4z" />
        <path d="M11 6 8 3 4 7l3 3" />
        <path d="m18 13 3 3-4 4-3-3" />
        <path d="M4 15a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    id: "basic",
    label: "Basic",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
      </svg>
    ),
  },
  {
    id: "political",
    label: "Political",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </svg>
    ),
  },
];

export function MapControls() {
  const mapStyle = useAppStore((s) => s.mapStyle);
  const setMapStyle = useAppStore((s) => s.setMapStyle);
  const showLabels = useAppStore((s) => s.showLabels);
  const toggleLabels = useAppStore((s) => s.toggleLabels);

  return (
    <div className="panel map-controls" aria-label="Map settings">
      <h3>Map Options</h3>
      <div className="map-controls-row">
        <div
          className="map-style-buttons"
          role="radiogroup"
          aria-label="Map style"
        >
          {MAP_STYLES.map((style) => (
            <button
              key={style.id}
              type="button"
              role="radio"
              aria-checked={mapStyle === style.id}
              aria-label={style.label}
              title={style.label}
              className={mapStyle === style.id ? "active" : ""}
              onClick={() => setMapStyle(style.id)}
            >
              {style.icon}
              <span className="map-btn-label">{style.label}</span>
            </button>
          ))}
        </div>
        <span className="map-controls-divider" aria-hidden="true" />
        <button
          type="button"
          className={`labels-toggle${showLabels ? " active" : ""}`}
          aria-pressed={showLabels}
          aria-label="Show labels"
          title={showLabels ? "Hide labels" : "Show labels"}
          onClick={toggleLabels}
        >
          <svg {...ICON_PROPS}>
            <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z" />
            <circle cx="7.5" cy="7.5" r="1.2" />
          </svg>
          <span className="map-btn-label">Labels</span>
        </button>
      </div>
    </div>
  );
}
