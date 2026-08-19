import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'mcclure',
    name: 'Robert McClure',
    era: 'Age of Exploration',
    years: '1807 – 1873',
    nationality: 'Irish (British service)',
    blurb:
      'Irish-born Royal Navy officer who, commanding HMS Investigator on the Franklin search, became the first to traverse the Northwest Passage (over the ice, not by ship), though it cost him being trapped for two winters and his ship being abandoned.',
    tags: ['arctic', 'polar', 'ship'],
    sources: [
      { label: 'Robert McClure – Wikipedia', url: 'https://en.wikipedia.org/wiki/Robert_McClure' },
    ],
    journeys: [
      {
        id: 'investigator',
        title: 'The Northwest Passage of HMS Investigator',
        yearStart: 1850,
        yearEnd: 1854,
        mode: 'ship',
        color: '#3f556e',
        summary:
          'Sent west into the Arctic to search for the Franklin expedition, McClure forced the Investigator through the Bering Strait into the Beaufort Sea, then up Prince of Wales Strait, ultimately being trapped in the ice north of Banks Island where he wintered twice, and reached the passage over the ice with sledges while crews abandoned the ice-locked ship.',
        waypoints: [
          { id: 'wp1', name: 'Bering Strait (from Atlantic-Pacific route)', lat: 66.0, lng: -169.0, date: '1850-07-29', kind: 'port', note: 'Passed through the Bering Strait eastward' },
          { id: 'wp2', name: 'Prince of Wales Strait', lat: 71.5, lng: -117.0, date: '1850-09', kind: 'discovery', note: 'Forced a route east of Banks Island' },
          { id: 'wp3', name: 'Meres Strait / Banks Island ice-bound', lat: 74.0, lng: -122.0, date: '1851-09', kind: 'turnaround', note: 'Trapped in the ice off Banks Island' },
          { id: 'wp4', name: 'Second winter in the ice', lat: 74.0, lng: -122.0, date: '1852-04', kind: 'death', note: 'Scurvy and cold; many died' },
          { id: 'wp5', name: 'First over-ice Northwest Passage crossing (with sledge to rescue ships)', lat: 74.5, lng: -100.0, date: '1853', kind: 'discovery', note: 'McClure and some men crossed to the Resolute by sledge, being rescued' },
          { id: 'wp6', name: 'Investigator abandoned', lat: 74.0, lng: -122.0, date: '1854', kind: 'turnaround', note: 'The ship was abandoned in the ice' },
        ],
      },
    ],
  };