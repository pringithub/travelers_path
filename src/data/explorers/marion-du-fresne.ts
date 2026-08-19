import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'marion-du-fresne',
    name: 'Marc-Joseph Marion du Fresne',
    era: 'Age of Sail',
    years: '1724 – 1772',
    nationality: 'French',
    blurb:
      'French explorer who in 1771–1772 discovered the Marion and Prince Edward Islands, made one of the first French landfalls in Tasmania, and explored the north coast of New Zealand\'s North Island before being killed there by Māori.',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'Marc-Joseph Marion du Fresne – Wikipedia', url: 'https://en.wikipedia.org/wiki/Marc-Joseph_Marion_de_Fresne' },
    ],
    journeys: [
      {
        id: 'southern-ocean-expedition',
        title: 'Expedition to the southern Indian and South Pacific Oceans',
        yearStart: 1771,
        yearEnd: 1772,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Sailing in search of the conjectured southern continent, Marion du Fresne discovered the Marion and Prince Edward Islands, reached the North Island of New Zealand, and was killed by Māori soon after landing.',
        waypoints: [
          { id: 'wp1', name: 'Île de France (Mauritius)', lat: -20.16, lng: 57.50, date: '1771-03', kind: 'port' },
          { id: 'wp2', name: 'Marion Island', lat: -46.9, lng: 37.75, date: '1772-01', kind: 'discovery', note: 'Discovered the island later named Marion Island' },
          { id: 'wp3', name: 'Prince Edward Islands', lat: -46.6, lng: 37.8, date: '1772-01', kind: 'discovery' },
          { id: 'wp4', name: 'Adventure Bay, Tasmania', lat: -43.36, lng: 147.33, date: '1772-03', kind: 'landfall', note: 'First French landing in Tasmania; watered the ships' },
          { id: 'wp5', name: 'Cape Campbell, New Zealand', lat: -41.73, lng: 174.28, date: '1772-04', kind: 'landfall' },
          { id: 'wp6', name: 'Bay of Islands, New Zealand', lat: -35.26, lng: 174.12, date: '1772-05', kind: 'death', note: 'Killed by Māori along with a number of his crew' },
        ],
      },
    ],
  };