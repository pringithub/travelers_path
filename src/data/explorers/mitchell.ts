import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'mitchell',
    name: 'Thomas Mitchell',
    era: 'Victorian',
    years: '1792 – 1855',
    nationality: 'British (Scottish)',
    blurb:
      'British surveyor-general of New South Wales who led four major expeditions into the interior of southeastern and eastern Australia, discovering rich lands he named "Australia Felix" and charting the Darling and Murray rivers.',
    tags: ['australia', 'river', 'surveyor'],
    sources: [
      { label: 'Thomas Mitchell (explorer) – Wikipedia', url: 'https://en.wikipedia.org/wiki/Thomas_Mitchell_(explorer)' },
    ],
    journeys: [
      {
        id: 'australia-felix',
        title: 'Explorations of southeastern Australia',
        yearStart: 1831,
        yearEnd: 1846,
        mode: 'horse',
        color: '#3f8f6a',
        summary:
          'Across his four expeditions Mitchell traced the courses of the Bogan, Namoi, Gwydir, Darling, Murray and Glenelg rivers, crossing into Victoria and opening up the well-watered volcanic grasslands of what he named "Australia Felix".',
        waypoints: [
          { id: 'wp1', name: 'Sydney, New South Wales', lat: -33.87, lng: 151.2, date: '1831', kind: 'port' },
          { id: 'wp2', name: 'Bogan River / Darling River', lat: -31.5, lng: 147.0, date: '1835', kind: 'discovery', note: 'Charted the Murray-Darling system' },
          { id: 'wp3', name: 'Murray River junction', lat: -34.0, lng: 144.5, date: '1836', kind: 'landfall', note: 'Confluences of rivers in the interior' },
          { id: 'wp4', name: 'Australia Felix, Victoria', lat: -37.5, lng: 143.5, date: '1836', kind: 'discovery', note: 'Reached the lush volcanic plains and named them Australia Felix' },
          { id: 'wp5', name: 'Glenelg River, Victoria', lat: -38.1, lng: 141.4, date: '1836', kind: 'discovery', note: 'Reached the western coast of Victoria' },
          { id: 'wp6', name: 'Sydney (return)', lat: -33.87, lng: 151.2, date: '1846', kind: 'port', note: 'Final return from his expeditions' },
        ],
      },
    ],
  };