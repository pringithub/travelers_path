import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'clapperton',
    name: 'Hugh Clapperton',
    era: 'Victorian',
    years: '1788 – 1827',
    nationality: 'British (Scottish)',
    blurb:
      'Scottish naval officer and explorer who led expeditions across West Africa, became the first European to reach Lake Chad from the north and the first to see the Niger near Sokoto, dying in the interior on his final expedition.',
    tags: ['africa', 'west-africa', 'exploration'],
    sources: [
      { label: 'Hugh Clapperton – Wikipedia', url: 'https://en.wikipedia.org/wiki/Hugh_Clapperton' },
    ],
    journeys: [
      {
        id: 'sudan',
        title: 'Exploration of the Sokoto cultivations',
        yearStart: 1822,
        yearEnd: 1827,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'Out from Tripoli, Clapperton crossed the Sahara with Major Denham and Dixon Denham to Lake Chad and Bornu, then followed the river toward Sokoto, where attempts to descend the Niger were blocked; he died at Sokoto on his return.',
        waypoints: [
          { id: 'wp1', name: 'Tripoli, Libya', lat: 32.89, lng: 13.19, date: '1822-04', kind: 'port' },
          { id: 'wp2', name: 'Murzuk, Libya', lat: 25.9, lng: 13.9, date: '1822-06', kind: 'landfall', note: 'Sahara crossing by caravan' },
          { id: 'wp3', name: 'Lake Chad', lat: 13.1, lng: 14.5, date: '1823-02', kind: 'discovery', note: 'Saw the vast lake with Denham' },
          { id: 'wp4', name: 'Kano, Nigeria', lat: 12.0, lng: 8.5, date: '1823-09', kind: 'landfall', note: 'Reached the famous trading city' },
          { id: 'wp5', name: 'Sokoto, Nigeria', lat: 13.06, lng: 5.24, date: '1824-03', kind: 'landfall', note: 'Met the Sultan of Sokoto (Sultan Bello), who forbade the Niger descent' },
          { id: 'wp6', name: 'Return to Tripoli', lat: 32.89, lng: 13.19, date: '1825-01', kind: 'port', note: 'Escape from the interior; braved the route back' },
          { id: 'wp7', name: 'Sokoto (death)', lat: 13.06, lng: 5.24, date: '1827-04-13', kind: 'death', note: 'Died of fever at Sokoto after the expedition\'s final attempts' },
        ],
      },
    ],
  };