import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'nachmanides',
    name: 'Nachmanides (Ramban)',
    era: 'Late Middle Ages',
    years: '1194 – 1270',
    nationality: 'Catalan Jewish',
    blurb:
      'Rabbi and biblical commentator from Girona who, after disputation and exile, journeyed to the Land of Israel and helped revive Jewish communal life in Jerusalem under Mamluk rule.',
    tags: ['medieval', 'pilgrimage'],
    sources: [
      { label: 'Nachmanides – Wikipedia', url: 'https://en.wikipedia.org/wiki/Nachmanides' },
    ],
    journeys: [
      {
        id: 'exile-to-the-land-of-israel',
        title: 'Exile to the Land of Israel',
        yearStart: 1267,
        yearEnd: 1267,
        mode: 'ship',
        color: '#7a5fa0',
        summary:
          'After leaving Iberia, Nachmanides crossed the Mediterranean to Acre, traveled inland to Jerusalem and Hebron, and established a synagogue that anchored renewed Jewish presence in the city.',
        waypoints: [
          { id: 'wp1', name: 'Girona, Crown of Aragon', lat: 41.98, lng: 2.82, date: '1267', kind: 'port', note: 'Departure from Catalonia after exile decree' },
          { id: 'wp2', name: 'Barcelona', lat: 41.39, lng: 2.17, date: '1267', kind: 'port' },
          { id: 'wp3', name: 'Acre', lat: 32.92, lng: 35.08, date: '1267', kind: 'landfall', note: 'Primary Crusader port in the Levant' },
          { id: 'wp4', name: 'Jerusalem', lat: 31.78, lng: 35.22, date: '1267-08', kind: 'landfall', note: 'Found very small Jewish community and began rebuilding communal institutions' },
          { id: 'wp5', name: 'Hebron', lat: 31.53, lng: 35.1, date: '1267', kind: 'landfall' },
          { id: 'wp6', name: 'Acre', lat: 32.92, lng: 35.08, date: '1268', kind: 'port', note: 'Final years spent in Acre, where he continued teaching and writing' },
        ],
      },
    ],
  };
