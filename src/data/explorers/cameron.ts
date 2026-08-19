import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'cameron',
    name: 'Verney Lovett Cameron',
    era: 'Victorian',
    years: '1844 – 1894',
    nationality: 'British',
    blurb:
      'British naval officer and explorer who led the first recorded crossing of central Africa from west to east, reached the eastern shore of Lake Tanganyika, and produced an account of the region while searching for the missing Livingstone.',
    tags: ['africa', 'exploration'],
    sources: [
      { label: 'Verney Lovett Cameron – Wikipedia', url: 'https://en.wikipedia.org/wiki/Verney_Lovett_Cameron' },
    ],
    journeys: [
      {
        id: 'cross-africa',
        title: 'Search for Livingstone and crossing of Africa',
        yearStart: 1873,
        yearEnd: 1875,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'Sent to aid Livingstone, Cameron landed on the east coast, crossed much of central Africa, met Livingstone\'s servants who had borne the great explorer\'s body away, descended to the Lualaba and reached the west coast, completing the first east–west crossing of equatorial Africa.',
        waypoints: [
          { id: 'wp1', name: 'Bagamoyo, Tanzania', lat: -6.43, lng: 38.9, date: '1873-03', kind: 'port' },
          { id: 'wp2', name: 'Unyanyembe (Tabora)', lat: -5.01, lng: 32.8, date: '1873-10', kind: 'landfall' },
          { id: 'wp3', name: 'Lake Tanganyika', lat: -5.8, lng: 29.5, date: '1874-02-24', kind: 'discovery', note: 'Reached the lake and circumnavigated it' },
          { id: 'wp4', name: 'Lualaba River / Congo headwaters', lat: -4.0, lng: 26.5, date: '1874', kind: 'discovery', note: 'Cameron approached the Congo tributary' },
          { id: 'wp5', name: 'Bihé, Angola', lat: -12.4, lng: 16.9, date: '1875', kind: 'landfall', note: 'Ascent across the Angolan highlands' },
          { id: 'wp6', name: 'Benguela, Angola (Atlantic)', lat: -12.58, lng: 13.41, date: '1875-11-07', kind: 'port', note: 'First west-east crossing of equatorial Africa' },
        ],
      },
    ],
  };