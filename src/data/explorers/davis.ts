import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'davis',
    name: 'John Davis',
    era: 'Age of Sail',
    years: 'c. 1550 – 1605',
    nationality: 'English',
    blurb:
      'English navigator and explorer who made three voyages searching for the Northwest Passage, discovering the Davis Strait, and later taking part in voyages to the East Indies where he was killed.',
    tags: ['arctic', 'age-of-sail'],
    sources: [
      { label: 'John Davis (English explorer) – Wikipedia', url: 'https://en.wikipedia.org/wiki/John_Davis_(English_explorer)' },
    ],
    journeys: [
      {
        id: 'northwest-passage',
        title: 'Northwest Passage voyages to the Davis Strait',
        yearStart: 1585,
        yearEnd: 1587,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Seeking the Northwest Passage for Raleigh\'s backers, Davis sailed north between Greenland and Baffin Island, discovering the strait that bears his name and penetrating to 73°N before turning back.',
        waypoints: [
          { id: 'wp1', name: 'Dartmouth, England', lat: 50.35, lng: -3.58, date: '1585-07', kind: 'port' },
          { id: 'wp2', name: 'Greenland coast', lat: 65.6, lng: -37.6, date: '1585-07', kind: 'landfall' },
          { id: 'wp3', name: 'Davis Strait', lat: 63.5, lng: -56.0, date: '1585-08', kind: 'discovery', note: 'First passage into the strait named for him' },
          { id: 'wp4', name: 'Cumberland Sound, Baffin Island', lat: 65.5, lng: -66.0, date: '1585-08', kind: 'discovery', note: 'Misidentifying it, proving it a bay' },
          { id: 'wp5', name: 'Farthest north at 73°N', lat: 73.0, lng: -76.0, date: '1587-08', kind: 'turnaround', note: 'Reached the farthest north of his voyages' },
          { id: 'wp6', name: 'Dartmouth, England', lat: 50.35, lng: -3.58, date: '1587-09', kind: 'port', note: 'Returned, no passage found but opened the whaling grounds' },
        ],
      },
    ],
  };