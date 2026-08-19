import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'przhevalsky',
    name: 'Nikolay Przhevalsky',
    era: 'Age of Empire',
    years: '1839 – 1888',
    nationality: 'Russian',
    blurb:
      'Russian explorer who made four major expeditions into Central Asia, covering Mongolia, China and Tibet, discovering the wild horse named after him and mapping vast previously uncharted areas.',
    tags: ['central-asia', 'tibet'],
    sources: [
      { label: 'Nikolay Przhevalsky – Wikipedia', url: 'https://en.wikipedia.org/wiki/Nikolay_Przhevalsky' },
    ],
    journeys: [
      {
        id: 'second-central-asia-expedition',
        title: 'First major expedition through Mongolia to Tibet',
        yearStart: 1870,
        yearEnd: 1873,
        mode: 'caravan',
        color: '#b5794a',
        summary:
          'Travelling overland from Siberia, Przhevalsky crossed the Gobi and reached the northern margins of Tibet, surveying the route and collecting natural history specimens that included the wild horse named for him.',
        waypoints: [
          { id: 'wp1', name: 'Irkutsk, Siberia', lat: 52.29, lng: 104.30, date: '1870-11', kind: 'port' },
          { id: 'wp2', name: 'Kyakhta border', lat: 50.35, lng: 106.45, date: '1870-11', kind: 'landfall' },
          { id: 'wp3', name: 'Urga (Ulaanbaatar)', lat: 47.89, lng: 106.91, date: '1870-12', kind: 'landfall' },
          { id: 'wp4', name: 'Gobi Desert', lat: 44.0, lng: 108.0, date: '1871-02', kind: 'discovery', note: 'Crossed the Gobi toward China' },
          { id: 'wp5', name: 'Ala Shan (Helan Mountains)', lat: 38.5, lng: 105.5, date: '1871-10', kind: 'turnaround', note: 'Approached the edge of Tibet before turning back' },
          { id: 'wp6', name: 'Irkutsk, Siberia', lat: 52.29, lng: 104.30, date: '1873-10', kind: 'port', note: 'Returned with collections including the Przewalski\'s horse' },
        ],
      },
    ],
  };