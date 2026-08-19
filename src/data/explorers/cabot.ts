import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'cabot',
    name: 'John Cabot',
    era: 'Age of Sail',
    years: 'c. 1450 – c. 1500',
    nationality: 'Italian (English service)',
    blurb:
      'Genoese navigator in the service of Henry VII who sailed west and reached the coast of North America in 1497, laying the basis for English claims to the continent.',
    tags: ['north-america', 'age-of-sail'],
    sources: [
      { label: 'John Cabot – Wikipedia', url: 'https://en.wikipedia.org/wiki/John_Cabot' },
    ],
    journeys: [
      {
        id: 'first-voyage',
        title: 'First voyage across the Atlantic',
        yearStart: 1497,
        yearEnd: 1497,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Sailing from Bristol in the small ship Matthew, Cabot crossed the North Atlantic and reached land widely identified as Newfoundland or Cape Breton Island, claiming it for England before returning in under three months.',
        waypoints: [
          { id: 'wp1', name: 'Bristol, England', lat: 51.45, lng: -2.59, date: '1497-05-02', kind: 'port' },
          { id: 'wp2', name: 'Ireland', lat: 51.9, lng: -10.0, date: '1497-05', kind: 'landfall', note: 'Parted from Ireland on the westward crossing' },
          { id: 'wp3', name: 'Newfoundland / Cape Breton', lat: 50.0, lng: -55.0, date: '1497-06-24', kind: 'discovery', note: 'First English landfall in North America — the exact spot is debated' },
          { id: 'wp4', name: 'Atlantis Strait and coast surveys', lat: 44.5, lng: -63.0, date: '1497-06', kind: 'landfall', note: 'Walked ashore, planted a cross' },
          { id: 'wp5', name: 'Bristol, England', lat: 51.45, lng: -2.59, date: '1497-08-06', kind: 'port', note: 'Returned to a royal reward; claimed the land for England' },
        ],
      },
      {
        id: 'fateful-voyage',
        title: 'Fateful second voyage',
        yearStart: 1498,
        yearEnd: 1498,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'A larger fleet set out to build on Cabot\'s discovery, exploring the northwest coast and hoping to reach Asia; Cabot\'s ships largely vanished, and he is not known to have returned.',
        waypoints: [
          { id: 'wp1', name: 'Bristol, England', lat: 51.45, lng: -2.59, date: '1498-05', kind: 'port' },
          { id: 'wp2', name: 'Greenland', lat: 62.0, lng: -41.0, date: '1498-06', kind: 'landfall', note: 'Reported south along the Greenland coast' },
          { id: 'wp3', name: 'Newfoundland coast', lat: 49.0, lng: -57.0, date: '1498-06', kind: 'landfall' },
          { id: 'wp4', name: 'Northwest Atlantic (lost)', lat: 45.0, lng: -50.0, date: '1498', kind: 'death', note: 'Cabot and most of the fleet vanished; his end is unknown' },
        ],
      },
    ],
  };