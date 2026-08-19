import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'tasman',
    name: 'Abel Tasman',
    era: 'Age of Sail',
    years: '1603 – 1659',
    nationality: 'Dutch',
    blurb:
      'Dutch explorer in the employ of the VOC who made the first European sighting of Tasmania, New Zealand, Fiji and the Tonga group, and whose island of Tasmania and the Tasman Sea are named for him.',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'Abel Tasman – Wikipedia', url: 'https://en.wikipedia.org/wiki/Abel_Tasman' },
    ],
    journeys: [
      {
        id: 'first-voyage',
        title: 'First voyage: Tasmania, New Zealand and Fiji',
        yearStart: 1642,
        yearEnd: 1643,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Commanding the Heemskerck and Zeehaen out of Batavia, Tasman sought the great southern continent, sighted Tasmania and the west coast of New Zealand, and returned across the Pacific past Fiji and Tonga.',
        waypoints: [
          { id: 'wp1', name: 'Batavia (Jakarta)', lat: -6.14, lng: 106.85, date: '1642-08-14', kind: 'port' },
          { id: 'wp2', name: 'Mauritius', lat: -20.16, lng: 57.5, date: '1642-09', kind: 'port', note: 'Took on water and provisions' },
          { id: 'wp3', name: 'Anthony van Diemen\'s Land (Tasmania)', lat: -42.85, lng: 147.6, date: '1642-11-24', kind: 'discovery', note: 'First European sighting of Tasmania' },
          { id: 'wp4', name: 'Blackman Bay, Tasmania', lat: -42.85, lng: 147.9, date: '1642-12-03', kind: 'landfall', note: 'First landing; named it Van Diemen\'s Land' },
          { id: 'wp5', name: 'Cape Foulwind, New Zealand', lat: -41.7, lng: 171.5, date: '1642-12-13', kind: 'discovery', note: 'First European sighting of New Zealand' },
          { id: 'wp6', name: 'Massacre Bay (Golden Bay), New Zealand', lat: -40.9, lng: 172.9, date: '1642-12-18', kind: 'landfall', note: 'Attacked by Māori; several sailors killed' },
          { id: 'wp7', name: 'Cape Maria van Diemen, New Zealand', lat: -34.47, lng: 172.85, date: '1643-01-04', kind: 'landfall', note: 'Distant northern tip of New Zealand' },
          { id: 'wp8', name: 'Fiji', lat: -17.7, lng: 178.0, date: '1643-02', kind: 'landfall', note: 'First European sighting of Fiji' },
          { id: 'wp9', name: 'Tongatapu, Tonga', lat: -21.14, lng: -175.2, date: '1643-02', kind: 'landfall', note: 'Friendly reception in the Tonga group' },
          { id: 'wp10', name: 'Batavia (Jakarta)', lat: -6.14, lng: 106.85, date: '1643-06-15', kind: 'port', note: 'Journey ends, circumnavigating Australia without sighting its coast' },
        ],
      },
    ],
  };