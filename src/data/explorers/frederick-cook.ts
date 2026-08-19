import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'frederick-cook',
    name: 'Frederick Cook',
    era: 'Heroic Age of Antarctic Exploration',
    years: '1865 – 1940',
    nationality: 'American',
    blurb:
      'American physician and explorer who served on expeditions to Greenland and Antarctica and claimed — contentiously — to have reached the North Pole in 1908, a claim widely disputed.',
    tags: ['arctic', 'antarctic', 'polar', 'sled'],
    sources: [
      { label: 'Frederick Cook – Wikipedia', url: 'https://en.wikipedia.org/wiki/Frederick_Cook' },
    ],
    journeys: [
      {
        id: 'north-pole-claim',
        title: 'Contested North Pole claim',
        yearStart: 1907,
        yearEnd: 1909,
        mode: 'sled',
        color: '#4a72a8',
        summary:
          'Cook set out from Annatok, Greenland, with two Inuit, crossed Ellesmere Island and the polar pack, and claimed to have reached the North Pole on 21 April 1908, though his account was never substantiated.',
        waypoints: [
          { id: 'wp1', name: 'Annatok, Greenland', lat: 78.85, lng: -69.0, date: '1907-02-19', kind: 'port', note: 'Set sledge teams out from the Greenland coast' },
          { id: 'wp2', name: 'Smith Sound, Ellesmere Island', lat: 78.6, lng: -76.0, date: '1907-03', kind: 'landfall', note: 'Crossed to Ellesmere Island' },
          { id: 'wp3', name: 'Jones Sound to Devon Island', lat: 76.2, lng: -82.0, date: '1907-04', kind: 'landfall' },
          { id: 'wp4', name: 'Axel Heiberg Island, Arctic', lat: 79.5, lng: -90.0, date: '1908-03-07', kind: 'turnaround', note: 'Last outpost before the pack; march into the Arctic Ocean' },
          { id: 'wp5', name: 'Claimed North Pole', lat: 90.0, lng: 0.0, date: '1908-04-21', kind: 'discovery', note: 'Claimed to have reached the pole; never verified' },
          { id: 'wp6', name: 'Return to Denmark (exile)', lat: 55.68, lng: 12.57, date: '1909-09', kind: 'landfall', note: 'Congratulated abroad before his claim collapsed at home' },
        ],
      },
    ],
  };