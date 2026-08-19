import { explorers } from '../data/explorers';
import { useAppStore } from '../state/store';

export function ExplorerList() {
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const select = useAppStore((s) => s.select);

  return (
    <nav className="panel explorer-list" aria-label="Explorers">
      <h2>Explorers</h2>
      <ul>
        {explorers.map((explorer) => (
          <li key={explorer.id}>
            <button
              type="button"
              className={explorer.id === selectedExplorerId ? 'active' : ''}
              onClick={() => select(explorer.id)}
            >
              <span className="name">{explorer.name}</span>
              <span className="era">{explorer.era}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
