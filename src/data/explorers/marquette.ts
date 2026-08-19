import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'marquette',
    name: 'Jacques Marquette',
    era: 'Age of Enlightenment',
    years: '1637 – 1675',
    nationality: 'French (Jesuit)',
    blurb:
      'French Jesuit missionary who joined Louis Jolliet on the first documented descent of the upper Mississippi, mapping the river and its peoples, and founding missions among the Great Lakes.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'Jacques Marquette – Wikipedia', url: 'https://en.wikipedia.org/wiki/Jacques_Marquette' },
    ],
    journeys: [
      {
        id: 'mississippi',
        title: 'Descent of the Mississippi with Jolliet',
        yearStart: 1673,
        yearEnd: 1673,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Marquette set out with Jolliet from the Great Lakes, portaged to the Wisconsin River, canoed the upper Mississippi past the Missouri and Ohio rivers to the Arkansas, then returned north; he recorded the peoples and geography of the route.',
        waypoints: [
          { id: 'wp1', name: 'St. Ignace, Michigan', lat: 45.87, lng: -84.73, date: '1673-05-17', kind: 'port', note: 'Base of his mission' },
          { id: 'wp2', name: 'Green Bay / Fox-Wisconsin portage', lat: 44.5, lng: -88.0, date: '1673-06', kind: 'port' },
          { id: 'wp3', name: 'Mississippi River', lat: 43.0, lng: -91.0, date: '1673-06-17', kind: 'discovery', note: 'First recorded descent of the upper river' },
          { id: 'wp4', name: 'Missouri River mouth', lat: 38.8, lng: -90.1, date: '1673-07', kind: 'discovery', note: 'Noted the big river from the west' },
          { id: 'wp5', name: 'Ohio River mouth', lat: 37.0, lng: -89.0, date: '1673-07', kind: 'discovery' },
          { id: 'wp6', name: 'Arkansas / Quapaw village', lat: 34.0, lng: -91.0, date: '1673-07-17', kind: 'turnaround', note: 'Turned back at the Arkansas' },
          { id: 'wp7', name: 'Return · mission at Chicago River', lat: 41.9, lng: -87.6, date: '1673-09', kind: 'port', note: 'Returned via the Illinois River; Marquette founded a mission by the Chicago' },
        ],
      },
    ],
  };