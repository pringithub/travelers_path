import { useAppStore, type MapStyle } from '../state/store';

const MAP_STYLES: { id: MapStyle; label: string }[] = [
  { id: 'basic', label: 'Basic' },
  { id: 'political', label: 'Political' },
  { id: 'satellite', label: 'Satellite' },
];

export function MapControls() {
  const mapStyle = useAppStore((s) => s.mapStyle);
  const setMapStyle = useAppStore((s) => s.setMapStyle);
  const showLabels = useAppStore((s) => s.showLabels);
  const toggleLabels = useAppStore((s) => s.toggleLabels);

  return (
    <div className="panel map-controls" aria-label="Map settings">
      <h3>Map</h3>
      <div className="map-style-buttons" role="radiogroup" aria-label="Map style">
        {MAP_STYLES.map((style) => (
          <button
            key={style.id}
            type="button"
            role="radio"
            aria-checked={mapStyle === style.id}
            className={mapStyle === style.id ? 'active' : ''}
            onClick={() => setMapStyle(style.id)}
          >
            {style.label}
          </button>
        ))}
      </div>
      <label className="labels-toggle">
        <input type="checkbox" checked={showLabels} onChange={toggleLabels} />
        Show labels
      </label>
    </div>
  );
}
