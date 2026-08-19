import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'stanley',
    name: 'Henry Morton Stanley',
    era: 'Victorian',
    years: '1841 – 1904',
    nationality: 'British-American',
    blurb:
      'Journalist and explorer who famously found David Livingstone, then mapped the Congo River from end to end and helped open central Africa to European interests.',
    tags: ['africa', 'exploration'],
    sources: [
      { label: 'Henry Morton Stanley – Wikipedia', url: 'https://en.wikipedia.org/wiki/Henry_Morton_Stanley' },
    ],
    journeys: [
      {
        id: 'find-livingstone',
        title: 'Search for Livingstone',
        yearStart: 1871,
        yearEnd: 1872,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Commissioned by the New York Herald, Stanley led an expedition from Zanzibar into the interior and found the missing Scot at the trading post of Ujiji, producing the famous greeting.',
        waypoints: [
          { id: 'wp1', name: 'Zanzibar', lat: -6.16, lng: 39.19, date: '1871-02-06', kind: 'port' },
          { id: 'wp2', name: 'Bagamoyo', lat: -6.43, lng: 38.9, date: '1871-02', kind: 'port', note: 'Departed the coast with a large caravan' },
          { id: 'wp3', name: 'Unyanyembe (Tabora)', lat: -5.01, lng: 32.8, date: '1871-06', kind: 'landfall', note: 'Long delays due to sickness and war' },
          { id: 'wp4', name: 'Congo River crossing', lat: -3.0, lng: 29.0, date: '1871-10', kind: 'landfall', note: 'Circled south around the fighting' },
          { id: 'wp5', name: 'Ujiji, Lake Tanganyika', lat: -4.9, lng: 29.7, date: '1871-11-10', kind: 'landfall', note: '"Dr. Livingstone, I presume?"' },
          { id: 'wp6', name: 'Zanzibar', lat: -6.16, lng: 39.19, date: '1872-05-07', kind: 'port', note: 'Returned with Livingstone\'s papers; journey ends' },
        ],
      },
      {
        id: 'congo-descent',
        title: 'Descent of the Congo River',
        yearStart: 1874,
        yearEnd: 1877,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'Stanley circumambulated Lakes Victoria and Tanganyika, then followed the Congo River from its headwaters in central Africa all the way to its mouth on the Atlantic, the first European to trace the river\'s full course with enormous loss of life.',
        waypoints: [
          { id: 'wp1', name: 'Bagamoyo', lat: -6.43, lng: 38.9, date: '1874-11', kind: 'port' },
          { id: 'wp2', name: 'Lake Victoria', lat: -1.0, lng: 33.0, date: '1875-03', kind: 'discovery', note: 'Circumnavigated the lake, proving its extent' },
          { id: 'wp3', name: 'Lake Tanganyika', lat: -6.0, lng: 29.5, date: '1876', kind: 'discovery', note: 'Circumnavigated, finding no outlet north' },
          { id: 'wp4', name: 'Nyangwe (Lualaba)', lat: -4.2, lng: 26.2, date: '1876-11', kind: 'port', note: 'Began the descent of the great river' },
          { id: 'wp5', name: 'Stanley Falls (Boyoma Falls)', lat: 0.5, lng: 25.2, date: '1877-02', kind: 'discovery', note: 'Fought through seven sets of rapids' },
          { id: 'wp6', name: 'Congo rapids / mouth', lat: -5.7, lng: 13.5, date: '1877-08', kind: 'port', note: 'Reached the Atlantic, completing the first full descent of the Congo' },
        ],
      },
    ],
  };