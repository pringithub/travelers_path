import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'ws-bruce',
    name: 'William Speirs Bruce',
    era: 'Heroic Age of Antarctic Exploration',
    years: '1867 – 1921',
    nationality: 'Scottish',
    blurb:
      'Scottish polar explorer and oceanographer who led the Scottish National Antarctic Expedition (1902–1904), carrying out pioneering scientific work in the Weddell Sea and establishing the first permanent Scottish scientific station on the Antarctic peninsula.',
    tags: ['antarctic', 'heroic-age'],
    sources: [
      { label: 'William Speirs Bruce – Wikipedia', url: 'https://en.wikipedia.org/wiki/William_Speirs_Bruce' },
    ],
    journeys: [
      {
        id: 'scottish-national-antarctic-expedition',
        title: 'Scottish National Antarctic Expedition',
        yearStart: 1902,
        yearEnd: 1904,
        mode: 'ship',
        color: '#2e6f9e',
        summary:
          'Commanding the Scotia, Bruce sailed from Scotland to establish a scientific base at Laurie Island in the South Orkneys, then pushed deep into the Weddell Sea aboard a frozen, drifting ship to make oceanographic measurements before returning home.',
        waypoints: [
          { id: 'wp1', name: 'Leith, Scotland', lat: 55.97, lng: -3.17, date: '1902-11', kind: 'port' },
          { id: 'wp2', name: 'Laurie Island, South Orkneys', lat: -60.72, lng: -44.59, date: '1903-03', kind: 'discovery', note: 'Established Omond House, the first permanent Scottish Antarctic station' },
          { id: 'wp3', name: 'Farthest south in the Weddell Sea', lat: -72.18, lng: -17.98, date: '1904-03', kind: 'turnaround', note: 'The ship trapped in pack ice before turning north' },
          { id: 'wp4', name: 'Return to Leith, Scotland', lat: 55.97, lng: -3.17, date: '1904-07', kind: 'port', note: 'A successful scientific cruise' },
        ],
      },
    ],
  };