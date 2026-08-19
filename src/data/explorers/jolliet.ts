import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'jolliet',
    name: 'Louis Jolliet',
    era: 'Age of Enlightenment',
    years: '1645 – 1700',
    nationality: 'French-Canadian',
    blurb:
      'French-Canadian fur trader, cartographer and explorer who, with the Jesuit Jacques Marquette, made the first documented descent of the Mississippi River, establishing it led to the Gulf of Mexico.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'Louis Jolliet – Wikipedia', url: 'https://en.wikipedia.org/wiki/Louis_Jolliet' },
    ],
    journeys: [
      {
        id: 'mississippi',
        title: 'First descent of the Mississippi',
        yearStart: 1673,
        yearEnd: 1673,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Commissioned by Frontenac, Jolliet and Marquette canoed the Fox and Wisconsin rivers to the Mississippi, descended to the mouth of the Arkansas, confirmed the river ran to the gulf, then returned north.',
        waypoints: [
          { id: 'wp1', name: 'Sault Ste. Marie / Mackinac', lat: 46.5, lng: -84.33, date: '1673-05', kind: 'port' },
          { id: 'wp2', name: 'Green Bay / Fox River', lat: 44.5, lng: -88.0, date: '1673-06', kind: 'port' },
          { id: 'wp3', name: 'Wisconsin River portage', lat: 43.9, lng: -90.2, date: '1673-06-14', kind: 'landfall' },
          { id: 'wp4', name: 'Mississippi River', lat: 43.0, lng: -91.0, date: '1673-06-17', kind: 'discovery', note: 'First Europeans to follow the upper river' },
          { id: 'wp5', name: 'Mouth of the Arkansas River', lat: 33.8, lng: -91.0, date: '1673-07-17', kind: 'turnaround', note: 'Turned back, convinced the river reached the Gulf' },
          { id: 'wp6', name: 'Return to Lake Michigan', lat: 45.5, lng: -86.0, date: '1673-08', kind: 'port', note: 'Returned, sure of the river\'s course' },
        ],
      },
    ],
  };