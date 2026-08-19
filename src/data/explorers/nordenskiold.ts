import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'nordenskiold',
    name: 'Adolf Erik Nordenskiöld',
    era: 'Late 19th century',
    years: '1832 – 1901',
    nationality: 'Swedish-Finnish',
    blurb:
      'Finnish-Swedish geologist and explorer who led the first navigation of the Northeast Passage, sailing the Vega from Europe to the Pacific and witnessing the full opening of the Arctic sea route to Asia.',
    tags: ['arctic', 'polar', 'ship'],
    sources: [
      { label: 'Adolf Erik Nordenskiöld – Wikipedia', url: 'https://en.wikipedia.org/wiki/Adolf_Erik_Nordenski%C3%B6ld' },
    ],
    journeys: [
      {
        id: 'northeast-passage',
        title: 'First Northeast Passage in the Vega',
        yearStart: 1878,
        yearEnd: 1880,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Sailing the steamship Vega, Nordenskiöld forced a route along the north coast of Siberia, wintered for ten months in the ice near the Bering Strait, then completed the journey to the Pacific, the first ship to traverse the Arctic route.',
        waypoints: [
          { id: 'wp1', name: 'Karlskrona, Sweden', lat: 56.16, lng: 15.59, date: '1878-07-04', kind: 'port' },
          { id: 'wp2', name: 'Cape Nordkapp / Tromsø, Norway', lat: 69.65, lng: 18.96, date: '1878', kind: 'port' },
          { id: 'wp3', name: 'Yenisei mouth, Siberia', lat: 71.0, lng: 82.0, date: '1878-08', kind: 'landfall', note: 'Entered the Kara Sea' },
          { id: 'wp4', name: 'Cape Chelyuskin', lat: 77.7, lng: 104.3, date: '1878-08-19', kind: 'discovery', note: 'Rounded the northernmost point of Asia' },
          { id: 'wp5', name: 'Frozen in near Cape Serdtse-Kamen', lat: 67.0, lng: -171.0, date: '1878-09-28', kind: 'turnaround', note: 'Froze in the ice of the Chukchi Sea for winter' },
          { id: 'wp6', name: 'Bering Strait (ice freed)', lat: 66.0, lng: -169.0, date: '1879-07-18', kind: 'discovery', note: 'Spring thaw released the ship' },
          { id: 'wp7', name: 'Stockholm, Sweden (via Yokohama)', lat: 59.33, lng: 18.07, date: '1880-04-24', kind: 'port', note: 'Completed the first full Northeast Passage' },
        ],
      },
    ],
  };