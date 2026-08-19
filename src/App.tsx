import { GlobeView } from './globe/GlobeView';
import { Cartouche } from './ui/Cartouche';
import { ExplorerList } from './ui/ExplorerList';
import { JourneyPanel } from './ui/JourneyPanel';
import { MapControls } from './ui/MapControls';
import { ErrorBoundary } from './ui/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="app">
      <ErrorBoundary
        fallback={
          <div className="globe-fallback" role="alert">
            The 3D globe couldn&rsquo;t start (WebGL unavailable in this browser). The
            explorer list and journey details below still work.
          </div>
        }
      >
        <GlobeView />
      </ErrorBoundary>
      <Cartouche />
      <ExplorerList />
      <JourneyPanel />
      <MapControls />
    </div>
  );
}

export default App;
