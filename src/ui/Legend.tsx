import { explorers } from '../data/explorers';
import { useAppStore } from '../state/store';

export function Legend() {
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const explorer = explorers.find((e) => e.id === selectedExplorerId);

  return (
    <div className="panel legend" aria-label="Legend">
      <h3>Legend</h3>
      <ul>
        {explorers.map((e) => (
          <li key={e.id} className={e.id === explorer?.id ? 'active' : ''}>
            <span className="swatch" style={{ background: e.journeys[0].color ?? '#9c3b28' }} />
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
