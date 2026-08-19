import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'gregory',
    name: 'Augustus Charles Gregory',
    era: 'Victorian',
    years: '1819 – 1905',
    nationality: 'British (Australian)',
    blurb:
      'Australian-born surveyor and explorer who led expeditions across northern Australia, surveying vast areas of the colony\'s interior and tracing a route from southern Australia toward the Gulf of Carpentaria.',
    tags: ['australia', 'exploration'],
    sources: [
      { label: 'Augustus Charles Gregory – Wikipedia', url: 'https://en.wikipedia.org/wiki/Augustus_Charles_Gregory' },
    ],
    journeys: [
      {
        id: 'northern-australia',
        title: 'North Australian Expedition',
        yearStart: 1855,
        yearEnd: 1857,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'Gregory commanded an expedition overland from the Roper and Victoria rivers to survey much of northern Australia, reaching the subtropical coast before turning south to cross the country and arriving at the Queensland goldfields in the interior.',
        waypoints: [
          { id: 'wp1', name: 'Swan / Port Patterson, Australia', lat: -12.4, lng: 130.8, date: '1855-08', kind: 'port', note: 'Began in the north coast' },
          { id: 'wp2', name: 'Sturt Creek region', lat: -20.0, lng: 128.0, date: '1856', kind: 'landfall', note: 'Surveyed the interior' },
          { id: 'wp3', name: 'Gulf of Carpentaria coast', lat: -17.0, lng: 140.0, date: '1856', kind: 'landfall', note: 'Reached the gulf coast' },
          { id: 'wp4', name: 'Crossing south across western Queensland', lat: -23.0, lng: 145.0, date: '1857', kind: 'landfall' },
          { id: 'wp5', name: 'Port Patterson / north Queensland (return)', lat: -16.0, lng: 142.0, date: '1857', kind: 'port', note: 'Returned after surveying North Australia' },
        ],
      },
      {
        id: 'perth-carpentaria',
        title: 'Overland route from Perth to the Gulf',
        yearStart: 1861,
        yearEnd: 1861,
        mode: 'foot',
        color: '#c8992e',
        summary:
          'Gregory traced a possible permanent overland telegraph route from southern Australia to the Gulf of Carpentaria, exploring the vast arid lands that separated the settled seaboard from the northern coast.',
        waypoints: [
          { id: 'wp1', name: 'Adelaide / Perth, Australia', lat: -31.95, lng: 115.86, date: '1861', kind: 'port' },
          { id: 'wp2', name: 'Camden Harbour, north Australia', lat: -15.5, lng: 124.5, date: '1861', kind: 'landfall', note: 'Probed toward the north coast' },
          { id: 'wp3', name: 'Gulf of Carpentaria', lat: -18.0, lng: 137.0, date: '1861', kind: 'landfall' },
          { id: 'wp4', name: 'South Australia pastoral land', lat: -28.0, lng: 134.0, date: '1861', kind: 'port', note: 'Returned south' },
        ],
      },
    ],
  };