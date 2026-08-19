import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'shackleton',
    name: 'Ernest Shackleton',
    era: 'Heroic Age of Antarctic Exploration',
    years: '1874 – 1922',
    nationality: 'British (Irish)',
    blurb:
      'British polar explorer famed for the extraordinary survival of his crew after the ship Endurance was crushed in Antarctic pack ice, and who came within a short distance of the South Pole on an earlier expedition.',
    tags: ['antarctic', 'polar', 'sled'],
    sources: [
      { label: 'Ernest Shackleton – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ernest_Shackleton' },
    ],
    journeys: [
      {
        id: 'furthest-south',
        title: 'Nimrod Expedition: furthest south',
        yearStart: 1907,
        yearEnd: 1909,
        mode: 'sled',
        color: '#3f556e',
        summary:
          'Shackleton\'s first expedition as leader, which came within ~180 km of the pole, discovered the Beardmore Glacier, and returned alive; he also took sledding parties to the South Magnetic Pole.',
        waypoints: [
          { id: 'wp1', name: 'McMurdo Sound, Antarctica', lat: -77.85, lng: 166.68, date: '1908-02', kind: 'port', note: 'Base at Cape Royds' },
          { id: 'wp2', name: 'Furthest south, ~38 km short of 88° S', lat: -88.23, lng: 165.0, date: '1909-01-09', kind: 'turnaround', note: 'Turned back within ~180 km of the pole to survive' },
          { id: 'wp3', name: 'Cape Royds, McNurdo Sound', lat: -77.85, lng: 166.68, date: '1909-03-04', kind: 'port', note: 'Returned safely with all men; journey ends' },
        ],
      },
      {
        id: 'endurance',
        title: 'Endurance expedition and crew survival',
        yearStart: 1914,
        yearEnd: 1917,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'After the Endurance was trapped and crushed in the Weddell Sea ice, Shackleton led his entire crew to safety through an extraordinary open-boat journey across the Southern Ocean to South Georgia and a trek over its mountains.',
        waypoints: [
          { id: 'wp1', name: 'Plymouth, England', lat: 50.37, lng: -4.14, date: '1914-08-08', kind: 'port' },
          { id: 'wp2', name: 'Grytviken, South Georgia', lat: -54.28, lng: -36.51, date: '1914-11-05', kind: 'port', note: 'Last civilized port before Antarctica' },
          { id: 'wp3', name: 'Weddell Sea pack ice', lat: -75.5, lng: -31.5, date: '1915-01-19', kind: 'turnaround', note: 'Ship frozen in; drifted for months' },
          { id: 'wp4', name: 'Endurance crushed, abandoned', lat: -77.5, lng: -38.0, date: '1915-11-21', kind: 'death', note: 'Ship sank; crew camped on ice floes' },
          { id: 'wp5', name: 'Elephant Island', lat: -61.13, lng: -55.05, date: '1916-04-15', kind: 'landfall', note: 'Camped while most crew waited' },
          { id: 'wp6', name: 'Rescue voyage in the James Caird to South Georgia', lat: -54.28, lng: -36.51, date: '1916-05-10', kind: 'landfall', note: 'Open-boat crossing of 1,300 km' },
          { id: 'wp7', name: 'Whaling station at Stromness', lat: -54.27, lng: -36.44, date: '1916-05-20', kind: 'port', note: 'Crossed South Georgia on foot in 36 hours' },
          { id: 'wp8', name: 'All 28 men saved at Elephant Island', lat: -61.13, lng: -55.05, date: '1916-08-30', kind: 'port', note: 'Fourth attempt rescued the rest of the crew' },
        ],
      },
      {
        id: 'quest',
        title: 'Quest Expedition and death',
        yearStart: 1921,
        yearEnd: 1922,
        mode: 'ship',
        color: '#6a4a2f',
        summary:
          'Shackleton\'s final expedition to the Antarctic, from which he died of a heart attack at South Georgia, ending the Heroic Age of Antarctic exploration.',
        waypoints: [
          { id: 'wp1', name: 'South Georgia (Grytviken)', lat: -54.28, lng: -36.51, date: '1922-01-04', kind: 'port', note: 'Ship reached South Georgia' },
          { id: 'wp2', name: 'Grytviken', lat: -54.28, lng: -36.51, date: '1922-01-05', kind: 'death', note: 'Shackleton died of a heart attack; buried here' },
        ],
      },
    ],
  };