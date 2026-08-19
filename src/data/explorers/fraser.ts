import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'fraser',
    name: 'Simon Fraser',
    era: 'Fur trade era of the Northwest',
    years: '1776 – 1862',
    nationality: 'Canadian',
    blurb:
      'North West Company fur trader and explorer who, in 1808, descended the great river of British Columbia that bears his name, travelling by canoe and on foot from its headwaters to the sea and mapping its formidable canyon country.',
    tags: ['north-america', 'fur-trade', 'overland'],
    sources: [
      { label: 'Simon Fraser (explorer) – Wikipedia', url: 'https://en.wikipedia.org/wiki/Simon_Fraser_(explorer)' },
    ],
    journeys: [
      {
        id: 'descent-of-the-fraser',
        title: 'Descent of the Fraser River (1808)',
        yearStart: 1808,
        yearEnd: 1808,
        mode: 'foot',
        color: '#4a7a42',
        summary:
          'Believing the river might be the Columbia and lead to the Pacific, Fraser descended the waterway that today bears his name, fighting past its raging canyons on foot and by canoe until he reached the sea at the river\'s mouth.',
        waypoints: [
          { id: 'wp1', name: 'Rocky Mountain House, BC', lat: 52.38, lng: -121.42, date: '1808-05', kind: 'port', note: 'Departure point on the upper Fraser' },
          { id: 'wp2', name: 'Fraser Canyon', lat: 50.39, lng: -121.5, date: '1808-06', kind: 'discovery', note: 'Portaging the impassable reaches of the canyon' },
          { id: 'wp3', name: 'Musqueam village, river mouth', lat: 49.19, lng: -123.14, date: '1808-07', kind: 'landfall', note: 'Reached the Pacific, discovering the river was not the Columbia' },
          { id: 'wp4', name: 'Return up the Fraser', lat: 49.5, lng: -122.0, date: '1808-08', kind: 'turnaround', note: 'The dangerous return journey' },
        ],
      },
    ],
  };