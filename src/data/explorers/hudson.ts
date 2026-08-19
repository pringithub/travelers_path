import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'hudson',
    name: 'Henry Hudson',
    era: 'Age of Discovery',
    years: 'c. 1565 – 1611',
    nationality: 'English',
    blurb:
      'English navigator who searched repeatedly for a northern passage to Asia, charting the river and bay that now bear his name before being set adrift by mutineers and vanishing forever.',
    tags: ['northwest-passage', 'age-of-sail'],
    sources: [
      { label: 'Henry Hudson – Wikipedia', url: 'https://en.wikipedia.org/wiki/Henry_Hudson' },
    ],
    journeys: [
      {
        id: 'first-voyage',
        title: 'First voyage: over the top of the world',
        yearStart: 1607,
        yearEnd: 1607,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Sailed for the Muscovy Company to seek a route across the North Pole to Asia, reaching the east coast of Greenland and the edge of Svalbard before pack ice forced a return.',
        waypoints: [
          { id: 'wp1', name: 'London, England', lat: 51.5, lng: -0.09, date: '1607-05-01', kind: 'port' },
          { id: 'wp2', name: 'East coast of Greenland (Hold with Hope)', lat: 73.0, lng: -20.0, date: '1607-05-13', kind: 'landfall' },
          { id: 'wp3', name: 'Spitsbergen (Isfjorden)', lat: 78.27, lng: 13.83, date: '1607-05-27', kind: 'discovery' },
          { id: 'wp4', name: "Hakluyt's Headland, Svalbard", lat: 79.82, lng: 10.8, date: '1607-07-16', kind: 'turnaround', note: 'Pack ice blocked further progress north' },
          { id: 'wp5', name: 'Tilbury, River Thames', lat: 51.46, lng: 0.36, date: '1607-09-15', kind: 'port', note: 'Journey ends' },
        ],
      },
      {
        id: 'second-voyage',
        title: 'Second voyage: the northeast passage',
        yearStart: 1608,
        yearEnd: 1608,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Attempted to find a route to Asia around northern Russia, reaching Novaya Zemlya before impenetrable summer ice turned the expedition back.',
        waypoints: [
          { id: 'wp1', name: 'London, England', lat: 51.5, lng: -0.09, date: '1608-04-22', kind: 'port' },
          { id: 'wp2', name: 'Novaya Zemlya', lat: 73.0, lng: 55.0, date: '1608-07', kind: 'turnaround', note: 'Ice found impenetrable even in midsummer' },
          { id: 'wp3', name: 'Gravesend, England', lat: 51.44, lng: 0.37, date: '1608-08-26', kind: 'port', note: 'Journey ends' },
        ],
      },
      {
        id: 'third-voyage',
        title: 'Third voyage: the Half Moon and the Hudson River',
        yearStart: 1609,
        yearEnd: 1609,
        mode: 'ship',
        color: '#7a5fa0',
        summary:
          'Sailing for the Dutch East India Company, abandoned the search for a northeast passage and turned west instead, exploring the coast of North America and the river that now bears his name.',
        waypoints: [
          { id: 'wp1', name: 'Amsterdam, Netherlands', lat: 52.37, lng: 4.9, date: '1609-04-04', kind: 'port' },
          { id: 'wp2', name: 'Grand Banks of Newfoundland', lat: 45.5, lng: -50.0, date: '1609-07-02', kind: 'landfall' },
          { id: 'wp3', name: 'LaHave, Nova Scotia', lat: 44.28, lng: -64.31, date: '1609-07', kind: 'landfall' },
          { id: 'wp4', name: 'Cape Cod', lat: 42.05, lng: -70.18, date: '1609-08-04', kind: 'landfall' },
          { id: 'wp5', name: 'Delaware Bay', lat: 39.0, lng: -75.15, date: '1609-08', kind: 'landfall' },
          { id: 'wp6', name: 'Hudson River estuary (New York Harbor)', lat: 40.7, lng: -74.02, date: '1609-09-03', kind: 'discovery' },
          { id: 'wp7', name: 'Albany, New York', lat: 42.65, lng: -73.75, date: '1609-09-19', kind: 'turnaround', note: 'Furthest point reached upriver before turning back' },
          { id: 'wp8', name: 'Dartmouth, England', lat: 50.35, lng: -3.58, date: '1609-11-07', kind: 'port', note: 'Journey ends' },
        ],
      },
      {
        id: 'fourth-voyage',
        title: 'Fourth voyage: Hudson Bay and mutiny',
        yearStart: 1610,
        yearEnd: 1611,
        mode: 'ship',
        color: '#9c6b2f',
        summary:
          'Sailed in search of the Northwest Passage, discovered and charted Hudson Strait and Hudson Bay, wintered in James Bay, and was set adrift by mutineers on the homeward attempt, never to be seen again.',
        waypoints: [
          { id: 'wp1', name: 'London, England', lat: 51.5, lng: -0.09, date: '1610-04', kind: 'port' },
          { id: 'wp2', name: 'Iceland', lat: 64.13, lng: -21.9, date: '1610-05-11', kind: 'landfall' },
          { id: 'wp3', name: 'Southern Greenland', lat: 60.0, lng: -44.0, date: '1610-06-04', kind: 'landfall' },
          { id: 'wp4', name: 'Hudson Strait', lat: 61.5, lng: -70.0, date: '1610-06-25', kind: 'discovery' },
          { id: 'wp5', name: 'Hudson Bay', lat: 58.0, lng: -85.0, date: '1610-08-02', kind: 'discovery' },
          { id: 'wp6', name: 'James Bay', lat: 53.0, lng: -80.5, date: '1610-11', kind: 'landfall', note: 'Ship trapped by ice; the crew wintered ashore' },
          { id: 'wp7', name: 'James Bay', lat: 52.5, lng: -81.5, date: '1611-06-22', kind: 'death', note: 'Mutineers set Hudson, his son, and seven loyal crew adrift in a small boat; never seen again' },
        ],
      },
    ],
  };
