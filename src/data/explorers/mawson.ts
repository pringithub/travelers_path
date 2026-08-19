import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'mawson',
    name: 'Douglas Mawson',
    era: 'Heroic Age of Antarctic Exploration',
    years: '1882 – 1958',
    nationality: 'Australian',
    blurb:
      'Australian geologist and Antarctic explorer who led the Australasian Antarctic Expedition, mapping the coast of the continent south of Australia and surviving one of polar history\'s most harrowing survival treks.',
    tags: ['antarctic', 'polar', 'sled'],
    sources: [
      { label: 'Douglas Mawson – Wikipedia', url: 'https://en.wikipedia.org/wiki/Douglas_Mawson' },
    ],
    journeys: [
      {
        id: 'aae',
        title: 'Australasian Antarctic Expedition',
        yearStart: 1911,
        yearEnd: 1914,
        mode: 'sled',
        color: '#9c3b28',
        summary:
          'Mawson\'s expedition charted a huge stretch of the unexplored Antarctic coast south of Australia, and survived the death of his companions on a sledge journey that nearly killed him; he also took a magnetic survey that reached the South Magnetic Pole.',
        waypoints: [
          { id: 'wp1', name: 'Hobart, Tasmania', lat: -42.88, lng: 147.33, date: '1911-12-02', kind: 'port' },
          { id: 'wp2', name: 'Cape Denison, Commonwealth Bay', lat: -67.0, lng: 142.67, date: '1912-01-08', kind: 'port', note: 'Main base, known as the windiest place on Earth' },
          { id: 'wp3', name: 'Furthest east of the coast survey, King George V Land', lat: -66.5, lng: 145.0, date: '1912', kind: 'discovery', note: 'The eastern party mapped the coast' },
          { id: 'wp4', name: 'South Magnetic Pole (party of Bage)', lat: -72.0, lng: 155.0, date: '1912-11', kind: 'discovery', note: 'Separate party reached the magnetic pole region' },
          { id: 'wp5', name: 'Far eastern traverse', lat: -66.8, lng: 144.5, date: '1912-12', kind: 'turnaround', note: 'Companions Ninnis and Mertz died; Mawson trekked alone back' },
          { id: 'wp6', name: 'Cape Denison', lat: -67.0, lng: 142.67, date: '1913-02-08', kind: 'port', note: 'Returned alone after walking 100 miles; the ship had left' },
          { id: 'wp7', name: 'Adelaide, Australia', lat: -34.93, lng: 138.6, date: '1914-03', kind: 'port', note: 'Returned home to acclaim; journey ends' },
        ],
      },
    ],
  };