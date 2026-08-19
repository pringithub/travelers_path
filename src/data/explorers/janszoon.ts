import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'janszoon',
    name: 'Willem Janszoon',
    era: 'Age of Sail',
    years: 'c. 1570 – 1630',
    nationality: 'Dutch',
    blurb:
      'Dutch navigator who, in the Duyfken in 1606, made the first recorded European landing in Australia, charting the western coast of Cape York Peninsula before sailing home without realizing he had found a new continent.',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'Willem Janszoon – Wikipedia', url: 'https://en.wikipedia.org/wiki/Willem_Janszoon' },
    ],
    journeys: [
      {
        id: 'cape-york',
        title: 'The Duyfken at Cape York',
        yearStart: 1605,
        yearEnd: 1606,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Commander of the Duyfken sent to explore east of the Indies, Janszoon sailed down the coast of modern Papua and across into Australia, landing on the western shores of Cape York and charting hundreds of kilometres of coastline before independently failing to find the fabled southland.',
        waypoints: [
          { id: 'wp1', name: 'Bantam / Banda, East Indies', lat: -6.04, lng: 106.15, date: '1605-12', kind: 'port' },
          { id: 'wp2', name: 'Moluccas / Aru', lat: -6.0, lng: 134.0, date: '1606-01', kind: 'port' },
          { id: 'wp3', name: 'Cape York western coast, Australia', lat: -12.6, lng: 141.9, date: '1606-02-26', kind: 'discovery', note: 'First recorded European contact with Australia' },
          { id: 'wp4', name: 'Bathurst Bay, Cape York', lat: -14.0, lng: 143.5, date: '1606-03', kind: 'landfall', note: 'Landed, fought Aboriginals, lost men' },
          { id: 'wp5', name: 'Cape Keerweer (Furthest south)', lat: -17.0, lng: 139.7, date: '1606-05', kind: 'turnaround', note: 'Turned back at the Cape he named Keerweer ("Turn-again")' },
          { id: 'wp6', name: 'Banda, East Indies', lat: -4.5, lng: 129.9, date: '1606-06', kind: 'port', note: 'Returned to the Indies without perceiving the continent' },
        ],
      },
    ],
  };