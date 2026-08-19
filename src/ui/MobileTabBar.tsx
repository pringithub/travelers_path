import { useAppStore, type MobileTab } from "../state/store";

const TABS: { id: MobileTab; label: string; icon: string }[] = [
  { id: "explorers", label: "Explorers", icon: "🧭" },
  { id: "details", label: "Details", icon: "📜" },
  { id: "map", label: "Map", icon: "🌐" },
];

export function MobileTabBar() {
  const mobileTab = useAppStore((s) => s.mobileTab);
  const sheetOpen = useAppStore((s) => s.sheetOpen);
  const setMobileTab = useAppStore((s) => s.setMobileTab);
  const setSheetOpen = useAppStore((s) => s.setSheetOpen);

  return (
    <nav className="mobile-tabbar" aria-label="Panels">
      {TABS.map((tab) => {
        const isActive = tab.id === mobileTab && sheetOpen;
        return (
          <button
            key={tab.id}
            type="button"
            className={isActive ? "active" : ""}
            aria-pressed={isActive}
            onClick={() => {
              // Tapping the active tab collapses the sheet to reveal the globe.
              if (tab.id === mobileTab && sheetOpen) {
                setSheetOpen(false);
              } else {
                setMobileTab(tab.id);
              }
            }}
          >
            <span className="tab-icon" aria-hidden="true">
              {tab.icon}
            </span>
            <span className="tab-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
