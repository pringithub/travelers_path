import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'la-harpe',
    name: 'Jean-Baptiste Bénard de la Harpe',
    era: 'Age of Enlightenment',
    years: 'c. 1683 – 1765',
    nationality: 'French',
    blurb:
      'French explorer and trader who led an expedition up the Red River and into the region of present-day Oklahoma and the Arkansas interior, founding an early French post and trading with the Caddo chiefs.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'Bénard de la Harpe – Wikipedia', url: 'https://en.wikipedia.org/wiki/B%C3%A9nard_de_la_Harpe' },
    ],
    journeys: [
      {
        id: 'red-river',
        title: 'Expedition up the Red River',
        yearStart: 1718,
        yearEnd: 1719,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'From the French colony on the Mississippi, de la Harpe sailed and walked up the Red River into eastern Texas and Arkansas, establishing Fort Saint-Louis des Cadodaques and opening trade with the Caddo and the far interior.',
        waypoints: [
          { id: 'wp1', name: 'Mobile / New Orleans, Louisiana', lat: 30.0, lng: -90.07, date: '1718', kind: 'port' },
          { id: 'wp2', name: 'Red River / Natchitoches', lat: 31.7, lng: -93.1, date: '1719', kind: 'landfall', note: 'Pushed up the river toward Texas' },
          { id: 'wp3', name: 'Fort Saint-Louis des Cadodaques', lat: 33.5, lng: -94.0, date: '1719', kind: 'port', note: 'Established the French outpost' },
          { id: 'wp4', name: 'Caddo country, Arkansas', lat: 34.5, lng: -94.0, date: '1719-08', kind: 'landfall', note: 'Traded and explored the villages' },
          { id: 'wp5', name: 'Return to the Mississippi', lat: 30.0, lng: -90.07, date: '1719', kind: 'port', note: 'Returned to the French settlements' },
        ],
      },
    ],
  };