import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'nachtigal',
    name: 'Gustav Nachtigal',
    era: 'Victorian',
    years: '1834 – 1885',
    nationality: 'German',
    blurb:
      'German explorer and colonial administrator who made daring solo crossings of the Sahara, including the first European visit to the Kufra oasis on a perilous route, and later helped establish German colonies in Africa.',
    tags: ['africa', 'exploration'],
    sources: [
      { label: 'Gustav Nachtigal – Wikipedia', url: 'https://en.wikipedia.org/wiki/Gustav_Nachtigal' },
    ],
    journeys: [
      {
        id: 'sahara',
        title: 'Crossing of the Sahara to the Sudan',
        yearStart: 1869,
        yearEnd: 1874,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'Travelling disguised and often alone, Nachtigal crossed the Sahara from Tripoli to Lake Chad, reached the unexplored oases of Kufra and Tibesti, and travelled through Bornu and the central Sudan before emerging at the Nile.',
        waypoints: [
          { id: 'wp1', name: 'Tunis, Tunisia', lat: 36.8, lng: 10.18, date: '1869', kind: 'port' },
          { id: 'wp2', name: 'Tripoli, Libya', lat: 32.89, lng: 13.19, date: '1869', kind: 'port' },
          { id: 'wp3', name: 'Kufra Oasis', lat: 24.2, lng: 23.3, date: '1870', kind: 'discovery', note: 'First European to reach the isolated oases' },
          { id: 'wp4', name: 'Lake Chad', lat: 13.1, lng: 14.5, date: '1870-12', kind: 'discovery', note: 'Reached the lake after a long dangerous crossing' },
          { id: 'wp5', name: 'Bornu / Kanem', lat: 13.5, lng: 14.0, date: '1871', kind: 'landfall', note: 'Studied the Bornu and Tukulor kingdoms' },
          { id: 'wp6', name: 'Wadai (Abéché)', lat: 13.8, lng: 20.8, date: '1872', kind: 'landfall', note: 'Crossed to the East African savanna' },
          { id: 'wp7', name: 'Khartoum, Sudan', lat: 15.6, lng: 32.5, date: '1874', kind: 'port', note: 'Reached the Nile, completing the trans-Saharan journey' },
        ],
      },
    ],
  };