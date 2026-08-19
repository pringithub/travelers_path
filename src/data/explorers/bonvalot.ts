import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'bonvalot',
    name: 'Gabriel Bonvalot',
    era: 'Age of Empire',
    years: '1853 – 1933',
    nationality: 'French',
    blurb:
      'French explorer who made expeditions across Central Asia, crossing the Tian Shan and Tibet in 1886–1887 and travelling from the coast to Tibet in 1889–1891.',
    tags: ['central-asia', 'tibet'],
    sources: [
      { label: 'Gabriel Bonvalot – Wikipedia', url: 'https://en.wikipedia.org/wiki/Gabriel_Bonvalot' },
    ],
    journeys: [
      {
        id: 'tian-shan-tibet',
        title: 'Caravan across the Tian Shan and Tibet',
        yearStart: 1886,
        yearEnd: 1887,
        mode: 'caravan',
        color: '#b5794a',
        summary:
          'Travelling overland from Turkestan, Bonvalot crossed the Tian Shan and penetrated the highlands of Tibet, crossing lands little visited by Europeans.',
        waypoints: [
          { id: 'wp1', name: 'Tashkent', lat: 41.30, lng: 69.24, date: '1886-05', kind: 'port' },
          { id: 'wp2', name: 'Tian Shan foothills', lat: 42.0, lng: 75.0, date: '1886-06', kind: 'discovery' },
          { id: 'wp3', name: 'Issyk-Kul', lat: 42.43, lng: 77.18, date: '1886-07', kind: 'landfall' },
          { id: 'wp4', name: 'Kashgar', lat: 39.47, lng: 75.99, date: '1886-09', kind: 'landfall' },
          { id: 'wp5', name: 'Northern Tibet plateau', lat: 35.0, lng: 82.0, date: '1887-01', kind: 'discovery', note: 'Crossed the high Tibetan plateau' },
          { id: 'wp6', name: 'Ladakh border', lat: 34.0, lng: 78.0, date: '1887-06', kind: 'turnaround', note: 'Expedition ended in northern India' },
        ],
      },
    ],
  };