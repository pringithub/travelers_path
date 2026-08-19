import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'bellinghausen',
    name: 'Fabian Gottlieb von Bellingshausen',
    era: 'Age of Sail',
    years: '1778 – 1852',
    nationality: 'Russian',
    blurb:
      'Baltic German naval officer in Russian service who commanded the First Russian Antarctic Expedition, circumnavigating the continent and becoming one of the first to sight the Antarctic mainland in 1820.',
    tags: ['antarctic', 'polar', 'age-of-sail', 'ship'],
    sources: [
      { label: 'Fabian Gottlieb von Bellingshausen – Wikipedia', url: 'https://en.wikipedia.org/wiki/Fabian_Gottlieb_von_Bellingshausen' },
    ],
    journeys: [
      {
        id: 'first-russian-antarctic',
        title: 'Circumnavigation of Antarctica',
        yearStart: 1819,
        yearEnd: 1821,
        mode: 'ship',
        color: '#3a6b8f',
        summary:
          'Bellingshausen sailed the Vostok with the Mirny in the First Russian Antarctic Expedition, rounding Cape Horn into the Southern Ocean, sighting the Antarctic mainland and circumnavigating the ice-bound continent before reaching home.',
        waypoints: [
          { id: 'wp1', name: 'Kronstadt, Russia', lat: 59.99, lng: 29.77, date: '1819-07-04', kind: 'port' },
          { id: 'wp2', name: 'South Georgia', lat: -54.5, lng: -36.5, date: '1819-12', kind: 'landfall', note: 'Dropped anchor to provision before pushing south' },
          { id: 'wp3', name: 'First sighting of Antarctica (mainland)', lat: -69.2, lng: -2.4, date: '1820-01-27', kind: 'discovery', note: 'Among the first to see the Antarctic mainland' },
          { id: 'wp4', name: 'Peter I Island', lat: -68.85, lng: -90.58, date: '1821-01-21', kind: 'discovery', note: 'Discovered the island, blocked by ice from landing' },
          { id: 'wp5', name: 'Alexander Island', lat: -71.0, lng: -70.0, date: '1821-01-28', kind: 'discovery', note: 'Sighted and named for Tsar Alexander I' },
          { id: 'wp6', name: 'Circumnavigation turnaround', lat: -60.5, lng: 93.0, date: '1821-02', kind: 'turnaround', note: 'Turned north after completing the Antarctic loop' },
          { id: 'wp7', name: 'Kronstadt, Russia', lat: 59.99, lng: 29.77, date: '1821-08-05', kind: 'port', note: 'Returned from the voyage' },
        ],
      },
    ],
  };