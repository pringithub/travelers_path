import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'petachiah-of-regensburg',
    name: 'Petachiah of Regensburg',
    era: 'High Middle Ages',
    years: '12th century',
    nationality: 'Ashkenazi Jewish',
    blurb:
      'Rabbi and traveler whose Hebrew Itinerary of Rabbi Petachia documented routes across eastern Europe, the Near East, and Mesopotamia shortly after Benjamin of Tudela’s era.',
    tags: ['medieval', 'diaspora'],
    sources: [
      { label: 'Petachiah of Regensburg – Wikipedia', url: 'https://en.wikipedia.org/wiki/Petachiah_of_Regensburg' },
    ],
    journeys: [
      {
        id: 'itinerary-journey',
        title: 'Itinerary through Eastern Europe and the Levant',
        yearStart: 1175,
        yearEnd: 1187,
        mode: 'caravan',
        color: '#9c6b2f',
        summary:
          'Travelled from the German lands through Poland and Kievan Rus to the Black Sea, then through the Holy Land and Mesopotamia, recording Jewish communal conditions and local customs.',
        waypoints: [
          { id: 'wp1', name: 'Regensburg', lat: 49.02, lng: 12.1, date: 'c.1175', kind: 'port' },
          { id: 'wp2', name: 'Prague', lat: 50.08, lng: 14.43, date: 'c.1175', kind: 'landfall' },
          { id: 'wp3', name: 'Kraków', lat: 50.06, lng: 19.94, date: 'c.1176', kind: 'landfall' },
          { id: 'wp4', name: 'Kyiv', lat: 50.45, lng: 30.52, date: 'c.1177', kind: 'landfall' },
          { id: 'wp5', name: 'Black Sea coast (Crimea)', lat: 44.95, lng: 34.1, date: 'c.1177', kind: 'port' },
          { id: 'wp6', name: 'Constantinople', lat: 41.01, lng: 28.98, date: 'c.1178', kind: 'landfall' },
          { id: 'wp7', name: 'Jerusalem', lat: 31.78, lng: 35.22, date: 'c.1180', kind: 'landfall' },
          { id: 'wp8', name: 'Damascus', lat: 33.51, lng: 36.28, date: 'c.1180', kind: 'landfall' },
          { id: 'wp9', name: 'Mosul', lat: 36.34, lng: 43.13, date: 'c.1181', kind: 'landfall' },
          { id: 'wp10', name: 'Baghdad', lat: 33.32, lng: 44.36, date: 'c.1181', kind: 'landfall' },
          { id: 'wp11', name: 'Regensburg', lat: 49.02, lng: 12.1, date: 'c.1187', kind: 'port', note: 'Journey ends; itinerary later redacted and circulated' },
        ],
      },
    ],
  };
