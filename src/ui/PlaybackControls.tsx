import { findExplorer } from '../data/explorers';
import { useAppStore } from '../state/store';
import { MODE_ICON } from '../globe/theme';

export function PlaybackControls() {
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const selectedJourneyId = useAppStore((s) => s.selectedJourneyId);
  const playing = useAppStore((s) => s.playing);
  const progress = useAppStore((s) => s.progress);
  const togglePlay = useAppStore((s) => s.togglePlay);
  const setProgress = useAppStore((s) => s.setProgress);

  const explorer = findExplorer(selectedExplorerId);
  const journey = explorer?.journeys.find((j) => j.id === selectedJourneyId);
  if (!journey) return null;

  return (
    <div className="panel playback-controls" aria-label="Journey playback">
      <button type="button" className="play-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
        {playing ? '⏸' : '▶'}
      </button>
      <span className="mode-icon" aria-hidden="true">
        {MODE_ICON[journey.mode] ?? '⛵'}
      </span>
      <input
        type="range"
        min={0}
        max={1}
        step={0.001}
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        aria-label="Journey progress"
      />
    </div>
  );
}
