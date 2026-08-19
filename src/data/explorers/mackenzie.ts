import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'mackenzie',
    name: 'Alexander Mackenzie',
    era: 'Age of Enlightenment',
    years: '1764 – 1820',
    nationality: 'British (Scottish)',
    blurb:
      'Fur trader and explorer who became the first European to reach the Pacific overland through North America, and gave his name to the great Mackenzie River while seeking a Northwest Passage.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'Alexander Mackenzie – Wikipedia', url: 'https://en.wikipedia.org/wiki/Alexander_Mackenzie_(explorer)' },
    ],
    journeys: [
      {
        id: 'mackenzie-river',
        title: 'Descent of the Mackenzie River to the Arctic',
        yearStart: 1789,
        yearEnd: 1789,
        mode: 'foot',
        color: '#4a72a8',
        summary:
          'From Fort Chipewyan on Lake Athabasca, Mackenzie descended an enormous river he hoped was the Northwest Passage to the Pacific, only to reach the Arctic Ocean instead.',
        waypoints: [
          { id: 'wp1', name: 'Fort Chipewyan, Lake Athabasca', lat: 58.71, lng: -111.15, date: '1789-06-03', kind: 'port' },
          { id: 'wp2', name: 'Great Slave Lake', lat: 61.45, lng: -114.2, date: '1789-06-09', kind: 'landfall', note: 'Mistook the outflow for the hoped-for passage' },
          { id: 'wp3', name: 'Mackenzie River', lat: 65.0, lng: -125.0, date: '1789-07', kind: 'discovery', note: 'Descended the river for over 1,600 km' },
          { id: 'wp4', name: 'Arctic Ocean (Beaufort Sea)', lat: 69.4, lng: -135.0, date: '1789-07-14', kind: 'turnaround', note: 'Realised it was the Arctic, not the Pacific; named the river "Disappointment"' },
          { id: 'wp5', name: 'Fort Chipewyan', lat: 58.71, lng: -111.15, date: '1789-09-12', kind: 'port', note: 'Returned after a round trip of nearly 5,000 km' },
        ],
      },
      {
        id: 'first-overland-crossing',
        title: 'First overland crossing of North America',
        yearStart: 1792,
        yearEnd: 1793,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'Mackenzie climbed the Peace River into the Rockies, crossed the Continental Divide via the Fraser headwaters, and descended the Bella Coola River to the Pacific, the first European to cross the continent north of Mexico.',
        waypoints: [
          { id: 'wp1', name: 'Fort Chipewyan', lat: 58.71, lng: -111.15, date: '1792-10-10', kind: 'port' },
          { id: 'wp2', name: 'Fort Fork (Peace River)', lat: 56.16, lng: -117.53, date: '1793', kind: 'landfall', note: 'Wintered before crossing the divides' },
          { id: 'wp3', name: 'Peace River portages', lat: 54.6, lng: -121.0, date: '1793', kind: 'landfall', note: 'Ascended the Peace toward the Rockies' },
          { id: 'wp4', name: 'Great Divide / Fraser headwaters', lat: 53.0, lng: -120.5, date: '1793-06', kind: 'turnaround', note: 'Realised the Fraser flowed south, not west; retraced overland' },
          { id: 'wp5', name: 'Bella Coola River', lat: 52.35, lng: -126.25, date: '1793-07-20', kind: 'discovery', note: 'Descended to the coast' },
          { id: 'wp6', name: 'Pacific Ocean (Dean Channel)', lat: 52.35, lng: -127.2, date: '1793-07-22', kind: 'discovery', note: 'Wrote in vermilion on a rock the first overland crossing' },
        ],
      },
    ],
  };