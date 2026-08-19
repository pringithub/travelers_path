import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'weddell',
    name: 'James Weddell',
    era: 'Age of Sail',
    years: '1787 – 1834',
    nationality: 'British',
    blurb:
      'British sailor and navigator who, commanding the brig Jane in 1823, sailed into the sea that now bears his name and reached 74°15\u2032S \u2014 the farthest south yet attained \u2014 and explored the South Orkney and South Shetland Islands.',
    tags: ['antarctic', 'age-of-sail', 'southern-ocean'],
    sources: [
      { label: 'James Weddell – Wikipedia', url: 'https://en.wikipedia.org/wiki/James_Weddell' },
      { label: 'Weddell Sea – Wikipedia', url: 'https://en.wikipedia.org/wiki/Weddell_Sea' },
    ],
    journeys: [
      {
        id: 'south-shetlands-and-orkneys',
        title: 'Fur-sealing voyages to the South Orkneys and South Shetlands',
        yearStart: 1822,
        yearEnd: 1823,
        mode: 'ship',
        color: '#3e7d6a',
        summary:
          'After a season sealing around the South Orkneys and South Shetlands, in 1823 Weddell sailed the brig Jane unusually far south through open pack ice, reaching 74°15\u2032S in what is now the Weddell Sea before turning north.',
        waypoints: [
          { id: 'wp1', name: 'Falkland Islands', lat: -51.7, lng: -59.5, date: '1822-06', kind: 'port', note: 'Secretly outfitted with two ships, the Jane and the Beaufoy' },
          { id: 'wp2', name: 'South Orkney Islands', lat: -60.6, lng: -45.5, date: '1822-12', kind: 'landfall', note: 'Made a detailed survey of the group' },
          { id: 'wp3', name: 'South Shetland Islands', lat: -62.0, lng: -58.0, date: '1823-01', kind: 'landfall', note: 'Wintered and sealed amid the islands' },
          { id: 'wp4', name: 'South Sandwich Islands', lat: -58.4, lng: -26.4, date: '1823-02', kind: 'landfall', note: 'Passed the group on heading south' },
          { id: 'wp5', name: 'Farthest south (74°15\u2032S)', lat: -74.25, lng: -34.0, date: '1823-02-20', kind: 'turnaround', note: 'Open water where pack ice was expected; no land sighted beyond, forcing the return' },
          { id: 'wp6', name: 'Falkland Islands', lat: -51.7, lng: -59.5, date: '1823-03', kind: 'port', note: 'Returned to winter harbour with the record noon latitude' },
        ],
      },
      {
        id: 'south-orkneys-survey',
        title: 'Survey of the South Orkney Islands',
        yearStart: 1823,
        yearEnd: 1824,
        mode: 'ship',
        color: '#6a9e8c',
        summary:
          'Weddell made one further cruise to the far south, refining his earlier survey of the South Orkneys and gathering observations that helped confirm the ice conditions of the southern ocean.',
        waypoints: [
          { id: 'wp1', name: 'Falkland Islands', lat: -51.7, lng: -59.5, date: '1823-10', kind: 'port' },
          { id: 'wp2', name: 'South Orkney Islands', lat: -60.6, lng: -45.5, date: '1823-11', kind: 'landfall', note: 'Completed charting of the group' },
          { id: 'wp3', name: 'Elephant Island', lat: -61.1, lng: -55.2, date: '1823-12', kind: 'landfall', note: 'Rounded the South Shetlands' },
          { id: 'wp4', name: 'Falkland Islands', lat: -51.7, lng: -59.5, date: '1824-01', kind: 'port', note: 'Final return to harbour' },
        ],
      },
    ],
  };