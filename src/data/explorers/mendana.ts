import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'mendana',
    name: 'Álvaro de Mendaña',
    era: 'Age of Sail',
    years: '1542 – 1595',
    nationality: 'Spanish',
    blurb:
      'Spanish navigator who led the first expedition to the Solomon Islands and rediscovered the Marquesas, the guiding figure of some of the Pacific\'s earliest colonial voyages driven by the legend of the "Golden Land of Ophir".',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'Álvaro de Mendaña – Wikipedia', url: 'https://en.wikipedia.org/wiki/%C3%81lvaro_de_Menda%C3%B1a_y_Neira' },
    ],
    journeys: [
      {
        id: 'solomons',
        title: 'Discovery of the Solomon Islands',
        yearStart: 1567,
        yearEnd: 1569,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Sailing with pilot Pedro Sarmiento de Gamboa from Peru, Mendaña discovered a chain of large, well-inhabited islands that he named the Solomons, believing they held gold, before returning to Peru.',
        waypoints: [
          { id: 'wp1', name: 'Callao, Peru', lat: -12.06, lng: -77.13, date: '1567-11-20', kind: 'port' },
          { id: 'wp2', name: 'Wake Island / Oceanic Islands', lat: 5.0, lng: -160.0, date: '1568', kind: 'landfall', note: 'Crossed the Pacific on the north wind track' },
          { id: 'wp3', name: 'Solomon Islands', lat: -9.0, lng: 160.0, date: '1568-02-07', kind: 'discovery', note: 'Discovered the large island group; landed at islands' },
          { id: 'wp4', name: 'Choiseul / Santa Isabel', lat: -7.6, lng: 158.4, date: '1568', kind: 'landfall', note: 'Anchored and explored' },
          { id: 'wp5', name: 'Return west to Peru', lat: -13.0, lng: -90.0, date: '1568', kind: 'port', note: 'Sailed back; the route proved fixed by winds' },
        ],
      },
      {
        id: 'marquesas',
        title: 'Marquesas and the ill-fated colony',
        yearStart: 1595,
        yearEnd: 1596,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'On a second voyage, Mendaña rediscovered the Marquesas Islands and attempted to found a colony in the Solomons, which failed amid sickness and conflict; he died in the islands and his widow led the survivors to the Philippines.',
        waypoints: [
          { id: 'wp1', name: 'Callao, Peru', lat: -12.06, lng: -77.13, date: '1595-04-09', kind: 'port' },
          { id: 'wp2', name: 'Marquesas Islands', lat: -10.0, lng: -139.0, date: '1595-07', kind: 'discovery', note: 'Rediscovered the Marquesas, named in honor of the Viceroy' },
          { id: 'wp3', name: 'Santa Cruz Islands', lat: -10.7, lng: 165.8, date: '1595-09', kind: 'landfall', note: 'Tried to found a colony here' },
          { id: 'wp4', name: 'Santa Cruz Islands (death)', lat: -10.7, lng: 165.8, date: '1595-10-18', kind: 'death', note: 'Mendaña died of fever; wife Isabel led the survivors' },
          { id: 'wp5', name: 'Manila, Philippines', lat: 14.6, lng: 120.98, date: '1596-02', kind: 'port', note: 'The expedition abandoned the colony and sailed to the Philippines' },
        ],
      },
    ],
  };