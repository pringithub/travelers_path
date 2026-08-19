import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'la-perouse',
    name: 'Jean-François de La Pérouse',
    era: 'Age of Sail',
    years: '1741 – 1788',
    nationality: 'French',
    blurb:
      'French naval officer who led the great Pacific expedition of 1785 – 1788, charting coasts from Chile and Hawaii to Alaska, Kamchatka and Australia\u2019s Botany Bay, after which he and all his crews vanished.',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'Jean-François de La Pérouse – Wikipedia', url: 'https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_de_Galaup,_comte_de_La_P%C3%A9rouse' },
    ],
    journeys: [
      {
        id: 'pacific-odyssey',
        title: 'Pacific expedition of the Astrolabe and Boussole',
        yearStart: 1785,
        yearEnd: 1788,
        mode: 'ship',
        color: '#7a5a4f',
        summary:
          'In two frigates and with scientists aboard, La Pérouse explored the Pacific, mapping the Chilean coast, the Hawaiian islands, the American northwest and Alaska before crossing to Kamchatka, Samoa, and finally Botany Bay \u2014 from which no further news ever came.',
        waypoints: [
          { id: 'wp1', name: 'Brest, France', lat: 48.39, lng: -4.49, date: '1785-08-01', kind: 'port', note: 'Departure with the Astrolabe and Boussole' },
          { id: 'wp2', name: 'Concepción, Chile', lat: -36.83, lng: -73.05, date: '1786-02', kind: 'landfall', note: 'First Pacific landfall, surveying the Chilean coast' },
          { id: 'wp3', name: 'Hawaiian Islands', lat: 20.8, lng: -156.33, date: '1786-05', kind: 'landfall', note: 'Visited and named Nihoa before Dutch explorers arrived' },
          { id: 'wp4', name: 'Alaskan coast', lat: 59.35, lng: -139.55, date: '1786-07', kind: 'discovery', note: 'Charted the coast of what became southeastern Alaska' },
          { id: 'wp5', name: 'Kamchatka, Russia', lat: 53.03, lng: 158.65, date: '1787-09', kind: 'landfall', note: 'Sent reports overland to France across Siberia' },
          { id: 'wp6', name: 'Samoa', lat: -13.83, lng: -171.77, date: '1787-12', kind: 'landfall', note: 'Landing party attacked, several men killed' },
          { id: 'wp7', name: 'Botany Bay, Australia', lat: -33.99, lng: 151.23, date: '1788-01-26', kind: 'landfall', note: 'Last message sent home before the ships vanished' },
        ],
      },
    ],
  };