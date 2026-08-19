import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'stuart',
    name: 'John McDouall Stuart',
    era: 'Victorian',
    years: '1815 – 1866',
    nationality: 'British (Scottish)',
    blurb:
      'Scottish-born surveyor in Australia who led six expeditions into the interior, pioneering a route south-north across the continent and making the first successful crossing from south to north.',
    tags: ['australia', 'exploration'],
    sources: [
      { label: 'John McDouall Stuart – Wikipedia', url: 'https://en.wikipedia.org/wiki/John_McDouall_Stuart' },
    ],
    journeys: [
      {
        id: 'trans-australia',
        title: 'Crossing of Australia from south to north',
        yearStart: 1858,
        yearEnd: 1862,
        mode: 'horse',
        color: '#9c3b28',
        summary:
          'Through repeated expeditions Stuart pushed north from Adelaide, discovering the Centre (including the area of Alice Springs), and finally reached the north coast at Chambers Bay, near present-day Darwin, the first European to cross the continent south to north.',
        waypoints: [
          { id: 'wp1', name: 'Adelaide, South Australia', lat: -34.93, lng: 138.6, date: '1858', kind: 'port' },
          { id: 'wp2', name: 'Chambers Creek / Mount Stuart', lat: -31.0, lng: 139.0, date: '1859', kind: 'landfall', note: 'Early reconnaissance toward the interior' },
          { id: 'wp3', name: 'Lake Eyre basin', lat: -28.5, lng: 137.0, date: '1859', kind: 'landfall', note: 'Forced into harsh desert country' },
          { id: 'wp4', name: 'Alice Springs / Todd River', lat: -23.7, lng: 133.88, date: '1860-04', kind: 'discovery', note: 'Discovered the future site of Alice Springs' },
          { id: 'wp5', name: 'Centre of Australia / Mount Barkly', lat: -24.0, lng: 133.0, date: '1860', kind: 'landfall', note: 'Reached the heart of the continent' },
          { id: 'wp6', name: 'Attack Creek', lat: -19.0, lng: 134.0, date: '1860-04', kind: 'turnaround', note: 'Ran low on water and forced back' },
          { id: 'wp7', name: 'Chambers Bay, Timor Sea', lat: -12.0, lng: 130.9, date: '1862-07-24', kind: 'discovery', note: 'Reached the north coast; the first south-to-north crossing' },
        ],
      },
    ],
  };