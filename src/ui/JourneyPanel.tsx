import { findExplorer } from '../data/explorers';
import { useAppStore } from '../state/store';
import { journeyDistanceKm } from '../globe/geo';

export function JourneyPanel() {
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const selectedJourneyId = useAppStore((s) => s.selectedJourneyId);
  const select = useAppStore((s) => s.select);
  const explorer = findExplorer(selectedExplorerId);
  const journey = explorer?.journeys.find((j) => j.id === selectedJourneyId);

  if (!explorer || !journey) return null;

  const distanceKm = Math.round(journeyDistanceKm(journey.waypoints));

  return (
    <aside className="panel journey-panel" aria-label="Journey details">
      <div className="panel-head">
        <h2>{explorer.name}</h2>
        <p className="meta">
          {explorer.years} &middot; {explorer.nationality}
        </p>
        <p className="blurb">{explorer.blurb}</p>

        {explorer.journeys.length > 1 && (
          <nav className="voyage-select" aria-label="Voyages">
            {explorer.journeys.map((j) => (
              <button
                key={j.id}
                type="button"
                className={j.id === selectedJourneyId ? 'active' : ''}
                aria-current={j.id === selectedJourneyId}
                onClick={() => select(explorer.id, j.id)}
              >
                <span className="swatch" style={{ background: j.color ?? '#9c3b28' }} />
                <span className="voyage-title">{j.title}</span>
                <span className="voyage-years">
                  {j.yearStart}
                  {j.yearEnd ? `–${j.yearEnd}` : ''}
                </span>
              </button>
            ))}
          </nav>
        )}
      </div>

      <div className="journey-scroll">
        <hr />

        <h3>{journey.title}</h3>
        <p className="meta">
          {journey.yearStart}
          {journey.yearEnd ? `–${journey.yearEnd}` : ''} &middot; ~{distanceKm.toLocaleString()} km
        </p>
        <p className="summary">{journey.summary}</p>

        <ol className="waypoints">
          {journey.waypoints.map((wp) => (
            <li key={wp.id}>
              <span className="wp-name">{wp.name}</span>
              {wp.date && <span className="wp-date">{wp.date}</span>}
              {wp.note && <span className="wp-note">{wp.note}</span>}
            </li>
          ))}
        </ol>

        <h4>Sources</h4>
        <ul className="sources">
          {explorer.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
