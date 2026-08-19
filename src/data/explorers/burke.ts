import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'burke',
    name: 'Robert O\'Hara Burke',
    era: 'Victorian',
    years: 'c. 1821 – 1861',
    nationality: 'Irish-Australian',
    blurb:
      'Leader of the Burke and Wills expedition, the first party to cross the Australian continent from south to north, from Melbourne to the Gulf of Carpentaria; Burke died on the return journey near Cooper Creek.',
    tags: ['australia', 'interior'],
    sources: [
      { label: 'Robert O\'Hara Burke – Wikipedia', url: 'https://en.wikipedia.org/wiki/Robert_O%27Hara_Burke' },
    ],
    journeys: [
      {
        id: 'burke-and-wills',
        title: 'Crossing of Australia to the Gulf of Carpentaria',
        yearStart: 1860,
        yearEnd: 1861,
        mode: 'horse',
        color: '#c98a3b',
        summary:
          'Burke led an expedition from Melbourne intended to be the first south-to-north traverse of Australia. Crossing inland plains, he pressed on with Wills to the Flinders River near the Gulf of Carpentaria, then turned back to the Cooper Creek depot only to find it abandoned, and died on the return in the desert scrub.',
        waypoints: [
          { id: 'wp1', name: 'Melbourne, Victoria', lat: -37.81, lng: 144.96, date: '1860-08-20', kind: 'port', note: 'Expedition departed from Royal Park' },
          { id: 'wp2', name: 'Menindee, Darling River', lat: -32.4, lng: 142.42, date: '1860-10', kind: 'port', note: 'First staging camp reached up the Darling' },
          { id: 'wp3', name: 'Cooper Creek depot', lat: -27.62, lng: 141.09, date: '1860-11-11', kind: 'port', note: 'Main depot established awaiting return' },
          { id: 'wp4', name: 'Flinders River, near Gulf of Carpentaria', lat: -17.5, lng: 140.8, date: '1861-02', kind: 'discovery', note: 'Reached the northern coast and the sea' },
          { id: 'wp5', name: 'Return to Cooper Creek depot', lat: -27.62, lng: 141.09, date: '1861-04-21', kind: 'turnaround', note: 'Found the depot abandoned hours after the party left' },
          { id: 'wp6', name: 'Burke\'s death site, near Cooper Creek', lat: -27.62, lng: 141.09, date: '1861-06-28', kind: 'death', note: 'Burke died of exhaustion and starvation; Wills died later the same day' },
        ],
      },
    ],
  };