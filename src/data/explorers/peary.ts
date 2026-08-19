import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'peary',
    name: 'Robert Peary',
    era: 'Late 19th – early 20th century',
    years: '1856 – 1920',
    nationality: 'American',
    blurb:
      'American naval officer who led repeated expeditions to Greenland and the Arctic, and claimed on 6 April 1909 to have been the first to reach the North Pole — a claim that remains controversial.',
    tags: ['arctic', 'polar', 'sled'],
    sources: [
      { label: 'Robert Peary – Wikipedia', url: 'https://en.wikipedia.org/wiki/Robert_Peary' },
    ],
    journeys: [
      {
        id: 'greenland',
        title: 'Expeditions across northern Greenland',
        yearStart: 1891,
        yearEnd: 1908,
        mode: 'sled',
        color: '#4a72a8',
        summary:
          'Across several expeditions Peary mapped large stretches of Greenland, reaching its far northern capes, introducing the use of Inuit dogsledding techniques and establishing that Greenland was an island.',
        waypoints: [
          { id: 'wp1', name: 'New York / McCormick Bay, Greenland', lat: 77.7, lng: -69.0, date: '1891', kind: 'port' },
          { id: 'wp2', name: 'Far northern Greenland coast', lat: 83.3, lng: -40.0, date: '1895', kind: 'discovery', note: 'Mapped the north Greenland coast' },
          { id: 'wp3', name: 'Cape Morris Jesup, Greenland', lat: 83.63, lng: -33.5, date: '1900', kind: 'discovery', note: 'Reached the world\'s northernmost land' },
          { id: 'wp4', name: 'Fort Conger, Ellesmere', lat: 81.74, lng: -64.7, date: '1906', kind: 'landfall', note: 'Closed in on the pole base' },
        ],
      },
      {
        id: 'north-pole',
        title: 'Claimed North Pole',
        yearStart: 1908,
        yearEnd: 1909,
        mode: 'sled',
        color: '#3f556e',
        summary:
          'Peary\'s flagship S.S. Roosevelt carried the expedition north, and the final dash was made by dogsled across the Arctic Ocean. He claimed to reach the pole on 6 April 1909 with Matthew Henson and four Inuit companions; the navigational claim is widely questioned.',
        waypoints: [
          { id: 'wp1', name: 'Cape Columbia, Ellesmere', lat: 83.1, lng: -70.0, date: '1909-02-28', kind: 'port', note: 'Pushed north across the sea ice' },
          { id: 'wp2', name: 'North Pole (claimed)', lat: 90.0, lng: 0.0, date: '1909-04-06', kind: 'discovery', note: 'The accuracy of the navigation to the pole is disputed' },
          { id: 'wp3', name: 'Cape Columbia / Etah', lat: 83.1, lng: -70.0, date: '1909-04', kind: 'port', note: 'Retreated to Ellesmere and returned home' },
        ],
      },
    ],
  };