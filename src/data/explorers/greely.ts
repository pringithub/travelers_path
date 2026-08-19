import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'greely',
    name: 'Adolphus Greely',
    era: 'Age of Polar Exploration',
    years: '1844 – 1935',
    nationality: 'American',
    blurb:
      'American Army officer and polar explorer who commanded the Lady Franklin Bay Expedition (1881–1884), setting a farthest-north record in the Arctic before a desperate, starving retreat in which over half his men perished.',
    tags: ['arctic', 'polar'],
    sources: [
      { label: 'Adolphus Greely – Wikipedia', url: 'https://en.wikipedia.org/wiki/Adolphus_Greely' },
    ],
    journeys: [
      {
        id: 'lady-franklin-bay-expedition',
        title: 'Lady Franklin Bay Expedition and farthest north',
        yearStart: 1881,
        yearEnd: 1884,
        mode: 'sled',
        color: '#3a5a6a',
        summary:
          'Sailing to the north coast of Ellesmere Island, Greely\'s men spent two winters in a station that gathered scientific data, then sledged north to exceed the northernmost record. Stranded when the relief ships failed, they retreated, and all but six died of starvation and cold before rescue.',
        waypoints: [
          { id: 'wp1', name: 'St. John\'s, Newfoundland', lat: 47.56, lng: -52.71, date: '1881-07', kind: 'port' },
          { id: 'wp2', name: 'Fort Conger, Lady Franklin Bay', lat: 81.75, lng: -64.75, date: '1881-08', kind: 'discovery', note: 'Establishing the scientific station for two winters' },
          { id: 'wp3', name: 'Farthest north at 83°24\'N', lat: 83.4, lng: -60.0, date: '1882-05', kind: 'turnaround', note: 'New farthest-north record on the Greenland coast' },
          { id: 'wp4', name: 'Stranded at Pim Island, Cape Sabine', lat: 78.73, lng: -74.1, date: '1884', kind: 'death', note: 'Starving retreat; relief ship of the 1884 expedition arrived' },
          { id: 'wp5', name: 'St. John\'s, Newfoundland', lat: 47.56, lng: -52.71, date: '1884-07', kind: 'port', note: 'Six survivors rescued, including Greely' },
        ],
      },
    ],
  };