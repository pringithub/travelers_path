import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'munk',
    name: 'Jens Munk',
    era: 'Age of Sail',
    years: '1579 – 1628',
    nationality: 'Danish',
    blurb:
      'Danish naval officer and explorer who led a voyage seeking the Northwest Passage that wintered disastrously on the shore of Hudson Bay, where most of his crew died of scurvy, leaving Munk to sail his ship home almost alone.',
    tags: ['arctic', 'polar', 'ship'],
    sources: [
      { label: 'Jens Munk – Wikipedia', url: 'https://en.wikipedia.org/wiki/Jens_Munk' },
    ],
    journeys: [
      {
        id: 'hudson-bay',
        title: 'Voyage to Hudson Bay',
        yearStart: 1619,
        yearEnd: 1620,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Munk commanded two ships in search of the Northwest Passage, rounding Cape Farewell, entering Hudson Bay and wintering at its western shore near present-day Churchill. Scurvy killed all but Munk and two sailors, who somehow sailed the surviving ship home to Denmark.',
        waypoints: [
          { id: 'wp1', name: 'Copenhagen, Denmark', lat: 55.68, lng: 12.57, date: '1619-05-16', kind: 'port' },
          { id: 'wp2', name: 'Cape Farewell, Greenland', lat: 59.78, lng: -43.92, date: '1619-06', kind: 'landfall' },
          { id: 'wp3', name: 'Hudson Strait', lat: 62.5, lng: -75.0, date: '1619-08', kind: 'landfall', note: 'Entered Hudson Bay' },
          { id: 'wp4', name: 'Munk\'s winter quarters (Churchill River)', lat: 58.77, lng: -94.17, date: '1619-09', kind: 'port', note: 'Frozen in for the winter' },
          { id: 'wp5', name: 'Winter deaths from scurvy', lat: 58.77, lng: -94.17, date: '1620-01', kind: 'death', note: 'Scurvy killed nearly all sixty men' },
          { id: 'wp6', name: 'Return voyage, Denmark', lat: 55.68, lng: 12.57, date: '1620-09-21', kind: 'port', note: 'Munk and two sailors brought the Lamprenen home' },
        ],
      },
    ],
  };