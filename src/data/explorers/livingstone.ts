import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'livingstone',
    name: 'David Livingstone',
    era: 'Victorian',
    years: '1813 – 1873',
    nationality: 'British (Scottish)',
    blurb:
      'Missionary doctor and explorer who mapped vast tracts of southern and central Africa, crossed the continent from Angola to Mozambique, and became the first European to see Victoria Falls.',
    tags: ['africa', 'exploration'],
    sources: [
      { label: 'David Livingstone – Wikipedia', url: 'https://en.wikipedia.org/wiki/David_Livingstone' },
    ],
    journeys: [
      {
        id: 'trans-africa',
        title: 'Transcontinental crossing and Victoria Falls',
        yearStart: 1852,
        yearEnd: 1856,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'Setting out from Cape Town, Livingstone traveled north to the Zambezi, crossed the continent westward to Luanda, then returned east to discover and name Victoria Falls and reach Quelimane, first European to traverse the continent.',
        waypoints: [
          { id: 'wp1', name: 'Cape Town', lat: -33.92, lng: 18.42, date: '1852', kind: 'port' },
          { id: 'wp2', name: 'Kuruman', lat: -27.46, lng: 23.44, date: '1852', kind: 'landfall', note: 'Mission station; pushed north into the interior' },
          { id: 'wp3', name: 'Linyanti (Barotse), Botswana', lat: -18.0, lng: 23.5, date: '1853', kind: 'landfall' },
          { id: 'wp4', name: 'Luanda, Angola (Atlantic coast)', lat: -8.84, lng: 13.23, date: '1854-05', kind: 'landfall', note: 'Reached the western coast' },
          { id: 'wp5', name: 'Luanda return to Linyanti', lat: -18.0, lng: 23.5, date: '1855-09', kind: 'turnaround', note: 'Crossed back east across the continent' },
          { id: 'wp6', name: 'Victoria Falls, Zambezi', lat: -17.92, lng: 25.86, date: '1855-11-16', kind: 'discovery', note: 'First European to see the falls; named them for Queen Victoria' },
          { id: 'wp7', name: 'Quelimane, Mozambique (Indian Ocean)', lat: -17.88, lng: 36.89, date: '1856-05-20', kind: 'port', note: 'First recorded west–east crossing of the continent' },
        ],
      },
      {
        id: 'zambezi',
        title: 'Zambezi expedition',
        yearStart: 1858,
        yearEnd: 1864,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'An official British expedition explored the lower Zambezi and its tributaries, seeking navigable routes into the interior; it revealed the river was not navigable far inland and found Lake Malawi.',
        waypoints: [
          { id: 'wp1', name: 'Kew, England', lat: 51.48, lng: -0.29, date: '1858', kind: 'port' },
          { id: 'wp2', name: 'Congo River delta', lat: -6.0, lng: 12.5, date: '1858', kind: 'landfall', note: 'Examined the river\'s mouth early in the expedition' },
          { id: 'wp3', name: 'Zambezi mouth (Chinde)', lat: -18.6, lng: 36.46, date: '1858', kind: 'landfall' },
          { id: 'wp4', name: 'Victoria Falls', lat: -17.92, lng: 25.86, date: '1860', kind: 'landfall', note: 'Returned to survey the river upstream' },
          { id: 'wp5', name: 'Lake Malawi', lat: -12.0, lng: 34.5, date: '1861', kind: 'discovery', note: 'Explored the southern end of the lake' },
          { id: 'wp6', name: 'Zambezi mouth', lat: -18.6, lng: 36.46, date: '1864', kind: 'port', note: 'Expedition recalled; journey ends' },
        ],
      },
      {
        id: 'search-for-nile',
        title: 'Final search for the Nile source',
        yearStart: 1866,
        yearEnd: 1873,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Livingstone returned to Africa trying to prove the Nile rose from the Lualaba, but fell into a state of crisis and isolation; Henry Morton Stanley found him at Ujiji in 1871, and he died at Chitambo without confirming the source.',
        waypoints: [
          { id: 'wp1', name: 'Zanzibar', lat: -6.16, lng: 39.19, date: '1866', kind: 'port' },
          { id: 'wp2', name: 'Lake Nyasa (Lake Malawi)', lat: -12.0, lng: 34.5, date: '1866', kind: 'landfall' },
          { id: 'wp3', name: 'Ujiji, Lake Tanganyika', lat: -4.9, lng: 29.7, date: '1869', kind: 'landfall', note: 'Ill and isolated at the trading post' },
          { id: 'wp4', name: 'Nyangwe, Lualaba River', lat: -4.2, lng: 26.2, date: '1871', kind: 'turnaround', note: 'Unable to press on west; sources uncertain' },
          { id: 'wp5', name: 'Ujiji', lat: -4.9, lng: 29.7, date: '1871-11-10', kind: 'landfall', note: 'Stanley finds him: "Dr. Livingstone, I presume?"' },
          { id: 'wp6', name: 'Chitambo, Bangweulu', lat: -12.1, lng: 30.2, date: '1873-05-01', kind: 'death', note: 'Died here; his body was carried to the coast' },
        ],
      },
    ],
  };