import { useRef, useState } from "react";
import { GlobeView } from "./globe/GlobeView";
import { Cartouche } from "./ui/Cartouche";
import { ExplorerList } from "./ui/ExplorerList";
import { JourneyPanel } from "./ui/JourneyPanel";
import { MapControls } from "./ui/MapControls";
import { MobileTabBar } from "./ui/MobileTabBar";
import { ErrorBoundary } from "./ui/ErrorBoundary";
import { useAppStore } from "./state/store";
import "./App.css";

// Distance (px) a drag must travel down before releasing collapses the sheet.
const DRAG_DISMISS_THRESHOLD = 90;
// Sheet height snap points, as a fraction of the viewport height.
const SHEET_DEFAULT_VH = 0.55;
const SHEET_EXPANDED_VH = 0.85;
const SHEET_EXPAND_MIDPOINT_VH = (SHEET_DEFAULT_VH + SHEET_EXPANDED_VH) / 2;

function App() {
  const mobileTab = useAppStore((s) => s.mobileTab);
  const sheetOpen = useAppStore((s) => s.sheetOpen);
  const sheetExpanded = useAppStore((s) => s.sheetExpanded);
  const setSheetOpen = useAppStore((s) => s.setSheetOpen);
  const setSheetExpanded = useAppStore((s) => s.setSheetExpanded);

  const sheetRef = useRef<HTMLDivElement>(null);
  const [dragY, setDragY] = useState(0);
  const [dragHeight, setDragHeight] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartHeight = useRef(0);

  // The Map Options section hugs its own (short) content, so its handle only
  // supports the drag-down-to-dismiss gesture. Explorers/Details can also be
  // dragged up to reveal more of the list.
  const canResize = mobileTab !== 'map';

  const handleDragStart = (e: React.PointerEvent<HTMLButtonElement>) => {
    setDragging(true);
    dragStartY.current = e.clientY;
    dragStartHeight.current = sheetRef.current?.getBoundingClientRect().height ?? 0;
    // Pointer capture can fail in some environments; the drag still works
    // from move/up events bubbling to this element without it.
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleDragMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging) return;
    if (!canResize) {
      setDragY(Math.max(0, e.clientY - dragStartY.current));
      return;
    }
    const delta = e.clientY - dragStartY.current;
    const maxHeight = window.innerHeight * SHEET_EXPANDED_VH;
    setDragHeight(Math.min(maxHeight, Math.max(0, dragStartHeight.current - delta)));
  };

  const handleDragEnd = () => {
    setDragging(false);
    if (!canResize) {
      if (dragY > DRAG_DISMISS_THRESHOLD) {
        setSheetOpen(false);
      }
      setDragY(0);
      return;
    }
    if (dragHeight !== null) {
      const collapseBoundary = window.innerHeight * SHEET_DEFAULT_VH - DRAG_DISMISS_THRESHOLD;
      const expandMidpoint = window.innerHeight * SHEET_EXPAND_MIDPOINT_VH;
      if (dragHeight < collapseBoundary) {
        setSheetOpen(false);
      } else {
        setSheetExpanded(dragHeight > expandMidpoint);
      }
    }
    setDragHeight(null);
  };

  return (
    <div
      className="app"
      data-mobile-tab={mobileTab}
      data-sheet-open={sheetOpen}
      data-sheet-expanded={sheetExpanded}
    >
      <ErrorBoundary
        fallback={
          <div className="globe-fallback" role="alert">
            The 3D globe couldn&rsquo;t start (WebGL unavailable in this
            browser). The explorer list and journey details below still work.
          </div>
        }
      >
        <GlobeView />
      </ErrorBoundary>
      <Cartouche />
      <div
        ref={sheetRef}
        className="sheet"
        style={
          dragging
            ? canResize
              ? { height: `${dragHeight}px`, transition: 'none' }
              : { transform: `translateY(${dragY}px)`, transition: 'none' }
            : undefined
        }
      >
        <button
          type="button"
          className="sheet-handle"
          aria-label={
            canResize
              ? 'Drag up for more detail, down to collapse panel'
              : 'Drag down to collapse panel'
          }
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
        >
          <span className="sheet-handle-bar" />
        </button>
        <ExplorerList />
        <JourneyPanel />
        <MapControls />
      </div>
      <MobileTabBar />
    </div>
  );
}

export default App;
