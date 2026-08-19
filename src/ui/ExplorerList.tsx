import { useMemo, useState } from 'react';
import { explorers } from '../data/explorers';
import { useAppStore } from '../state/store';

export function ExplorerList() {
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const select = useAppStore((s) => s.select);
  const [query, setQuery] = useState('');

  const filteredExplorers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return explorers;
    return explorers.filter((explorer) => {
      const haystack = [
        explorer.name,
        explorer.era,
        explorer.nationality,
        ...(explorer.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <nav className="panel explorer-list" aria-label="Explorers">
      <div className="panel-head">
        <h2>Explorers</h2>
        <label className="search-label" htmlFor="explorer-search">
          Search
        </label>
        <input
          id="explorer-search"
          type="search"
          className="search-input"
          placeholder="Name, era, tag"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="explorer-scroll">
        <ul>
          {filteredExplorers.map((explorer) => (
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
          {filteredExplorers.length === 0 && <li className="empty-state">No explorers match your search.</li>}
        </ul>
      </div>
    </nav>
  );
}
