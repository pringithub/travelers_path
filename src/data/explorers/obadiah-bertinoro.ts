import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'obadiah-bertinoro',
    name: 'Obadiah of Bertinoro',
    era: 'Renaissance',
    years: 'c. 1450 – c. 1515',
    nationality: 'Italian Jewish',
    blurb:
      'Renowned commentator on the Mishnah who left Italy for Jerusalem in the late 15th century and became a central figure in rebuilding Jewish communal organization there.',
    tags: ['pilgrimage', 'renaissance'],
    sources: [
      { label: 'Obadiah ben Abraham of Bertinoro – Wikipedia', url: 'https://en.wikipedia.org/wiki/Obadiah_ben_Abraham_of_Bertinoro' },
    ],
    journeys: [
      {
        id: 'aliyah-to-jerusalem',
        title: 'Migration from Italy to Jerusalem',
        yearStart: 1486,
        yearEnd: 1488,
        mode: 'ship',
        color: '#3f8f6a',
        summary:
          'Sailed from Italy to the eastern Mediterranean and proceeded to Jerusalem, where his letters describe local life and his leadership helped stabilize the city’s Jewish community.',
        waypoints: [
          { id: 'wp1', name: 'Bertinoro, Italy', lat: 44.15, lng: 12.14, date: '1486', kind: 'port' },
          { id: 'wp2', name: 'Rome', lat: 41.9, lng: 12.5, date: '1486', kind: 'landfall' },
          { id: 'wp3', name: 'Naples', lat: 40.85, lng: 14.27, date: '1487', kind: 'port' },
          { id: 'wp4', name: 'Palermo, Sicily', lat: 38.12, lng: 13.36, date: '1487', kind: 'landfall' },
          { id: 'wp5', name: 'Alexandria, Egypt', lat: 31.2, lng: 29.92, date: '1487', kind: 'landfall' },
          { id: 'wp6', name: 'Cairo', lat: 30.04, lng: 31.24, date: '1487', kind: 'landfall' },
          { id: 'wp7', name: 'Gaza', lat: 31.5, lng: 34.47, date: '1488', kind: 'landfall' },
          { id: 'wp8', name: 'Jerusalem', lat: 31.78, lng: 35.22, date: '1488', kind: 'port', note: 'Journey ends; became a major rabbinic leader in the city' },
        ],
      },
    ],
  };
