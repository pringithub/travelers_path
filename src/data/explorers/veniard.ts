import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'veniard',
    name: 'Étienne de Veniard, Sieur de Bourgmont',
    era: 'Age of Enlightenment',
    years: '1679 – 1734',
    nationality: 'French',
    blurb:
      'French fur trader and explorer who was the first European to travel the Missouri River above the Platte, venturing from the Illinois country to the Great Plains on his expedition of 1712–1714.',
    tags: ['north-america', 'missouri'],
    sources: [
      { label: 'Étienne de Bourgmont – Wikipedia', url: 'https://en.wikipedia.org/wiki/%C3%89tienne_de_bourgmont' },
    ],
    journeys: [
      {
        id: 'upper-missouri',
        title: 'First ascent of the Missouri above the Platte',
        yearStart: 1712,
        yearEnd: 1714,
        mode: 'foot',
        color: '#8b7d3b',
        summary:
          'Acting with Missouri and Osage allies, Bourgmont descended the Illinois and Mississippi rivers and then ascended the lower Missouri into the Great Plains, becoming the first European recorded to reach the Missouri above the Platte River and the Pawnee villages.',
        waypoints: [
          { id: 'wp1', name: 'Fort Ponchartrain du Détroit', lat: 42.33, lng: -83.05, date: '1712', kind: 'port', note: 'Expedition set out from the Detroit area' },
          { id: 'wp2', name: 'Missouri River mouth, confluence with the Mississippi', lat: 38.81, lng: -90.12, date: '1712', kind: 'port', note: 'Entered the Missouri from the Mississippi' },
          { id: 'wp3', name: 'Missouri village on the lower river', lat: 39.1, lng: -94.58, date: '1713', kind: 'port', note: 'Wintered among the Missouri people' },
          { id: 'wp4', name: 'Upper Missouri above the Platte', lat: 41.11, lng: -95.98, date: '1714', kind: 'discovery', note: 'Passed the Platte confluence, the farthest known point' },
          { id: 'wp5', name: 'Pawnee villages, Great Plains', lat: 41.3, lng: -96.9, date: '1714', kind: 'discovery', note: 'Reached the Pawnee, first European recorded to do so' },
          { id: 'wp6', name: 'Return to the Missouri and Illinois country', lat: 40.87, lng: -91.14, date: '1714', kind: 'turnaround', note: 'Turned back from the lower Plains' },
        ],
      },
    ],
  };