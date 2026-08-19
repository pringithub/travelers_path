import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'hedin',
    name: 'Sven Hedin',
    era: 'Late 19th – early 20th century',
    years: '1865 – 1952',
    nationality: 'Swedish',
    blurb:
      'Swedish geographer and explorer who made four major expeditions across central Asia, mapping the deserts and mountains of the Silk Road and the sources of the Indus, and becoming one of the most celebrated geographers of his age.',
    tags: ['central-asia', 'silk-road'],
    sources: [
      { label: 'Sven Hedin – Wikipedia', url: 'https://en.wikipedia.org/wiki/Sven_Hedin' },
    ],
    journeys: [
      {
        id: 'taklamakan',
        title: 'Expeditions into the Taklamakan and Tibet',
        yearStart: 1893,
        yearEnd: 1908,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'Across multiple journeys Hedin crossed the Taklamakan Desert, discovered the ancient buried city cities and the lakes of the Tarim basin, and penetrated into Tibet to establish the courses of its great rivers.',
        waypoints: [
          { id: 'wp1', name: 'Stockholm, Sweden', lat: 59.33, lng: 18.07, date: '1893', kind: 'port' },
          { id: 'wp2', name: 'Kashgar, Xinjiang', lat: 39.47, lng: 75.99, date: '1895', kind: 'landfall', note: 'Base for central Asia expeditions' },
          { id: 'wp3', name: 'Taklamakan Desert', lat: 38.9, lng: 80.0, date: '1895', kind: 'discovery', note: 'Crossed the deadly desert, nearly perishing' },
          { id: 'wp4', name: 'Lop Nur / Tarim basin', lat: 40.5, lng: 90.5, date: '1896', kind: 'discovery' },
          { id: 'wp5', name: 'Tibet (wanderings toward Lhasa)', lat: 33.0, lng: 88.0, date: '1900', kind: 'landfall', note: 'Probed the unknown Tibetan highlands' },
          { id: 'wp6', name: 'Indus / Brahmaputra sources region', lat: 31.2, lng: 81.4, date: '1907', kind: 'discovery', note: 'Studied the headwaters of the great rivers' },
          { id: 'wp7', name: 'Return to Zhang Ye / China', lat: 38.9, lng: 100.4, date: '1908', kind: 'port', note: 'Returned with extensive surveys of central Asia' },
        ],
      },
    ],
  };