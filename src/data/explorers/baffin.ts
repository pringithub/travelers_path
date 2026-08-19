import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'baffin',
    name: 'William Baffin',
    era: 'Age of Sail',
    years: 'c. 1584 – 1622',
    nationality: 'English',
    blurb:
      'English navigator and pilot who, on his 1616 voyage with Robert Bylot, explored and named Baffin Bay in the Canadian Arctic, discovering Lancaster Sound, the gateway to the Northwest Passage.',
    tags: ['arctic', 'polar', 'ship'],
    sources: [
      { label: 'William Baffin – Wikipedia', url: 'https://en.wikipedia.org/wiki/William_Baffin' },
    ],
    journeys: [
      {
        id: 'baffin-bay',
        title: 'Voyage into Baffin Bay',
        yearStart: 1616,
        yearEnd: 1616,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'As pilot of the Discovery with Bylot, Baffin pushed north through the strait that became Davis Strait, round the great bay later named for him, mapping Lancaster Sound and seeing hints of the Northwest Passage before the ice turned them back.',
        waypoints: [
          { id: 'wp1', name: 'Gravesend / London, England', lat: 51.44, lng: 0.37, date: '1616-03-26', kind: 'port' },
          { id: 'wp2', name: 'Davis Strait', lat: 63.5, lng: -56.0, date: '1616-05', kind: 'discovery', note: 'Passed north of Davis\'s farthest' },
          { id: 'wp3', name: 'Baffin Bay', lat: 74.0, lng: -70.0, date: '1616-06', kind: 'discovery', note: 'Named the bay, sailing its west side' },
          { id: 'wp4', name: 'Lancaster Sound', lat: 74.3, lng: -84.0, date: '1616-07', kind: 'discovery', note: 'Discovered the sound, gateway to the passage' },
          { id: 'wp5', name: 'Smith and Jones Sounds', lat: 75.0, lng: -80.0, date: '1616-07', kind: 'discovery', note: 'Mapped the northern openings' },
          { id: 'wp6', name: 'England (return)', lat: 51.44, lng: 0.37, date: '1616-08-30', kind: 'port', note: 'Returned; the bay\'s map was doubted for two centuries' },
        ],
      },
    ],
  };