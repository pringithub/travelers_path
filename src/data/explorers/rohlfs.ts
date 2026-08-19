import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'rohlfs',
    name: 'Friedrich Gerhard Rohlfs',
    era: 'Victorian',
    years: '1831 – 1896',
    nationality: 'German',
    blurb:
      'German explorer who made a series of bold crossings of the Sahara, becoming the first European to cross the desert from the Mediterranean to West Africa and to traverse the Atlas Mountains alone.',
    tags: ['africa', 'exploration'],
    sources: [
      { label: 'Gerhard Rohlfs – Wikipedia', url: 'https://en.wikipedia.org/wiki/Gerhard_Rohlfs' },
    ],
    journeys: [
      {
        id: 'sahara-crossings',
        title: 'Sahara crossings to West Africa',
        yearStart: 1862,
        yearEnd: 1866,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'Rohlfs traveled disguised through Morocco, crossed the Sahara from Tripoli to Lake Chad, and made the first recorded European crossing from the Mediterranean to the Gulf of Guinea via West Africa.',
        waypoints: [
          { id: 'wp1', name: 'Tripoli, Libya', lat: 32.89, lng: 13.19, date: '1862', kind: 'port' },
          { id: 'wp2', name: 'Murzuk, Libya', lat: 25.9, lng: 13.9, date: '1863', kind: 'landfall' },
          { id: 'wp3', name: 'Ghadames', lat: 30.13, lng: 9.5, date: '1864', kind: 'landfall', note: 'Crossed the western Sahara' },
          { id: 'wp4', name: 'Lake Chad', lat: 13.1, lng: 14.5, date: '1866', kind: 'discovery', note: 'Reached the lake basin' },
          { id: 'wp5', name: 'Bauchi / Niger', lat: 10.3, lng: 9.8, date: '1866', kind: 'landfall', note: 'Crossed to the Niger headwaters' },
          { id: 'wp6', name: 'Gulf of Guinea coast', lat: 6.4, lng: 3.4, date: '1866', kind: 'port', note: 'Reached the Atlantic in West Africa' },
        ],
      },
      {
        id: 'kufra',
        title: 'Exploration of Cyrenaica and Kufra',
        yearStart: 1878,
        yearEnd: 1879,
        mode: 'caravan',
        color: '#4a72a8',
        summary:
          'Rohlfs later explored the Cyrenaica region of Libya, mapping the lost cities and oases of the interior including the region of Kufra.',
        waypoints: [
          { id: 'wp1', name: 'Cirenaica, Libya', lat: 32.5, lng: 21.0, date: '1878', kind: 'port' },
          { id: 'wp2', name: 'Benghazi / interior oases', lat: 32.12, lng: 20.06, date: '1878', kind: 'landfall' },
          { id: 'wp3', name: 'Kufra Oasis region', lat: 24.2, lng: 23.3, date: '1879', kind: 'discovery', note: 'Crossed into the isolated Kufra basin' },
        ],
      },
    ],
  };