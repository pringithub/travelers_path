import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'dezhnev',
    name: 'Semyon Dezhnev',
    era: 'Age of Sail',
    years: 'c. 1605 – 1673',
    nationality: 'Russian',
    blurb:
      'Russian Cossack explorer who in 1648 sailed through the Bering Strait along the Chukotka coast, becoming the first Russian (European) credited with the passage between Asia and America, decades before Bering.',
    tags: ['arctic', 'age-of-sail', 'siberia'],
    sources: [
      { label: 'Semyon Dezhnev – Wikipedia', url: 'https://en.wikipedia.org/wiki/Semyon_Dezhnev' },
    ],
    journeys: [
      {
        id: 'bering-strait',
        title: 'Voyage through the Bering Strait',
        yearStart: 1648,
        yearEnd: 1649,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Leading a party of kochs down the Kolyma River, Dezhnev rounded the Chukotka Peninsula and passed through the strait separating Asia from North America, before being wrecked and reaching the Anadyr River overland.',
        waypoints: [
          { id: 'wp1', name: 'Kolyma River mouth', lat: 69.5, lng: 159.0, date: '1648-06', kind: 'port' },
          { id: 'wp2', name: 'Bering Straits area', lat: 66.0, lng: -170.0, date: '1648-09', kind: 'discovery', note: 'Passed between Asia and America' },
          { id: 'wp3', name: 'Cape Dezhnev, Chukotka', lat: 66.08, lng: -169.66, date: '1648-09', kind: 'turnaround', note: 'Easternmost point of Asia rounded by his ships' },
          { id: 'wp4', name: 'Anadyr River mouth', lat: 64.75, lng: 176.5, date: '1649-09', kind: 'landfall', note: 'Reached after shipwreck, continued overland' },
        ],
      },
    ],
  };