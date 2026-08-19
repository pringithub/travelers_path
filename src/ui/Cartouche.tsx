import { useAppStore } from "../state/store";
import { findExplorer } from "../data/explorers";

export function Cartouche() {
  const selectedExplorerId = useAppStore((s) => s.selectedExplorerId);
  const selectedJourneyId = useAppStore((s) => s.selectedJourneyId);
  const explorer = findExplorer(selectedExplorerId);
  const journey = explorer?.journeys.find((j) => j.id === selectedJourneyId);

  return (
    <div className="cartouche">
      <h1>Traveler&rsquo;s Path</h1>
      <p className="tagline">
        A living atlas of humanity&rsquo;s greatest journeys
      </p>
      {explorer && journey && (
        <div className="current-selection">
          <span className="selection-explorer">{explorer.name}</span>
          <span className="selection-journey">{journey.title}</span>
        </div>
      )}
    </div>
  );
}
