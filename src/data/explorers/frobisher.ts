import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'frobisher',
    name: 'Martin Frobisher',
    era: 'Age of Sail',
    years: 'c. 1535 – 1594',
    nationality: 'English',
    blurb:
      'English navigator and privateer who made three voyages to the Canadian Arctic in search of the Northwest Passage, discovering the bay that still bears his name but diverting much of his work into mining what turned out to be worthless iron pyrite.',
    tags: ['arctic', 'age-of-sail'],
    sources: [
      { label: 'Martin Frobisher – Wikipedia', url: 'https://en.wikipedia.org/wiki/Martin_Frobisher' },
    ],
    journeys: [
      {
        id: 'northwest-passage',
        title: 'Voyages in search of the Northwest Passage',
        yearStart: 1576,
        yearEnd: 1578,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Sailing Elizabethan ships (the Gabriel and the Michael), Frobisher reached the coast of Baffin Island and entered the sound he named for himself, taking home black ore he believed was gold; his second and third voyages mined the "ore" at great cost before it proved to be fool\'s gold, and he never found the passage.',
        waypoints: [
          { id: 'wp1', name: 'Deptford, England', lat: 51.48, lng: 0.02, date: '1576-06-07', kind: 'port' },
          { id: 'wp2', name: 'Frobisher Bay, Baffin Island', lat: 62.8, lng: -65.0, date: '1576-08', kind: 'discovery', note: 'Discovered and named the bay' },
          { id: 'wp3', name: 'Meta Incognita, Baffin Island', lat: 62.5, lng: -66.0, date: '1576-08-20', kind: 'landfall', note: 'Sequence-mining site of supposed gold' },
          { id: 'wp4', name: 'Return with "gold ore"', lat: 62.0, lng: -70.0, date: '1576-10', kind: 'turnaround', note: 'Carried ore home' },
          { id: 'wp5', name: 'Frobisher Bay mining fleet (2nd & 3rd voyages)', lat: 62.5, lng: -66.0, date: '1577-08', kind: 'landfall', note: 'Mined tons of ore that proved worthless' },
          { id: 'wp6', name: 'England', lat: 51.48, lng: 0.02, date: '1578', kind: 'port', note: 'Voyages abandoned; the "gold" was fools\' gold' },
        ],
      },
    ],
  };