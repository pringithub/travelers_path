import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'wilkes',
    name: 'Charles Wilkes',
    era: 'Age of Sail',
    years: '1798 – 1877',
    nationality: 'American',
    blurb:
      'American naval officer who commanded the United States Exploring Expedition (1838–1842) that circumnavigated the globe, surveyed the Pacific, and discovered the Antarctic coastline now named Wilkes Land.',
    tags: ['antarctic', 'pacific', 'age-of-sail'],
    sources: [
      { label: 'Charles Wilkes – Wikipedia', url: 'https://en.wikipedia.org/wiki/Charles_Wilkes' },
    ],
    journeys: [
      {
        id: 'us-ex-ex',
        title: 'United States Exploring Expedition',
        yearStart: 1838,
        yearEnd: 1842,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Wilkes led the largest exploring expedition the United States had yet mounted, charting island groups across the Pacific, surveying the Pacific Northwest coast of America, and confirming the continental Antarctic coastline that became Wilkes Land.',
        waypoints: [
          { id: 'wp1', name: 'Norfolk, Virginia', lat: 36.85, lng: -76.29, date: '1838-08', kind: 'port' },
          { id: 'wp2', name: 'Sydney, Australia', lat: -33.87, lng: 151.21, date: '1839-12', kind: 'port' },
          { id: 'wp3', name: 'Antarctic coast, Wilkes Land', lat: -66.5, lng: 120.0, date: '1840-01', kind: 'discovery', note: 'Coastal strip charted and later named Wilkes Land' },
          { id: 'wp4', name: 'New Zealand', lat: -39.0, lng: 174.5, date: '1840-03', kind: 'landfall' },
          { id: 'wp5', name: 'Columbia River mouth, Oregon', lat: 46.24, lng: -124.0, date: '1841-07', kind: 'landfall', note: 'Surveyed the Pacific Northwest coast' },
          { id: 'wp6', name: 'New York City', lat: 40.71, lng: -74.01, date: '1842-06', kind: 'port', note: 'Expedition concluded after circumnavigation' },
        ],
      },
    ],
  };