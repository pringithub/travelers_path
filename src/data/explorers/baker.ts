import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'baker',
    name: 'Sir Samuel Baker',
    era: 'Victorian',
    years: '1821 – 1893',
    nationality: 'British',
    blurb:
      'English explorer who joined John Hanning Speke and James Grant to trace the Nile, discovering and naming Lake Albert and the Semliki River during his great African expedition of 1861–1864.',
    tags: ['africa', 'victorian'],
    sources: [
      { label: 'Samuel Baker – Wikipedia', url: 'https://en.wikipedia.org/wiki/Samuel_Baker_(explorer)' },
    ],
    journeys: [
      {
        id: 'nile-to-lake-albert',
        title: 'Descent of the Nile and discovery of Lake Albert',
        yearStart: 1861,
        yearEnd: 1864,
        mode: 'foot',
        color: '#3a7ca5',
        summary:
          'Hunting the source of the Nile, Baker travelled south from Khartoum, met Speke and Grant as they returned from Lake Victoria, and marched overland to discover a great lake he named Lake Albert — the lake out of which the White Nile flows — and explore the Semliki River that feeds it.',
        waypoints: [
          { id: 'wp1', name: 'Khartoum, Sudan', lat: 15.5, lng: 32.56, date: '1862-06', kind: 'port', note: 'Joined James Grant and organized the expedition south' },
          { id: 'wp2', name: 'Gondokoro, southern Sudan', lat: 4.91, lng: 31.66, date: '1863-01', kind: 'port', note: 'Met Speke and Grant returning from Lake Victoria' },
          { id: 'wp3', name: 'Overland march through Bunyoro', lat: 1.5, lng: 31.5, date: '1864-02', kind: 'landfall', note: 'Marched inland to reach the lake beyond the kingdom of Bunyoro' },
          { id: 'wp4', name: 'Kibiro, Lake Albert shore', lat: 1.67, lng: 31.05, date: '1864-03-14', kind: 'discovery', note: 'First sight of Lake Albert, which Baker named' },
          { id: 'wp5', name: 'Semliki River', lat: 1.02, lng: 30.44, date: '1864-04', kind: 'discovery', note: 'Explored the river draining into Lake Albert' },
          { id: 'wp6', name: 'Nile at the lake\'s outlet', lat: 2.02, lng: 31.18, date: '1864-05', kind: 'discovery', note: 'Confirmed the Nile flows out of Lake Albert' },
          { id: 'wp7', name: 'Back to Khartoum, Sudan', lat: 15.5, lng: 32.56, date: '1864-10', kind: 'port', note: 'Descended the Nile to conclude the expedition' },
        ],
      },
    ],
  };