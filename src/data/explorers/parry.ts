import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'parry',
    name: 'William Edward Parry',
    era: 'Age of Exploration',
    years: '1790 – 1855',
    nationality: 'British',
    blurb:
      'British rear-admiral and Arctic explorer who led pioneering attempts on the Northwest Passage, repeatedly venturing further west than any before him and sailing within reach of the North Pole of his day.',
    tags: ['arctic', 'polar', 'sled'],
    sources: [
      { label: 'William Edward Parry – Wikipedia', url: 'https://en.wikipedia.org/wiki/William_Edward_Parry' },
    ],
    journeys: [
      {
        id: 'northwest-passage',
        title: 'Northwest Passage attempts',
        yearStart: 1819,
        yearEnd: 1827,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Through several voyages Parry pressed west through the Arctic archipelago and reached a series of records west of Lancaster Sound; his final venture was an attempt to sledge to the North Pole.',
        waypoints: [
          { id: 'wp1', name: 'Plymouth, England', lat: 50.37, lng: -4.14, date: '1819-05-04', kind: 'port' },
          { id: 'wp2', name: 'Lancaster Sound', lat: 74.3, lng: -84.0, date: '1819-08', kind: 'discovery', note: 'Broke the sound and pushed west' },
          { id: 'wp3', name: 'Winter Harbour, Melville Island', lat: 74.8, lng: -110.5, date: '1819-09', kind: 'port', note: 'Farthest west, wintered; nearly conquered the western sea' },
          { id: 'wp4', name: 'Baffin Bay and Lancaster Sound', lat: 74.3, lng: -84.0, date: '1821', kind: 'discovery', note: 'Subsequent attempts farther south' },
          { id: 'wp5', name: 'Farthest west on the ice (1822)', lat: 74.6, lng: -113.6, date: '1822', kind: 'turnaround', note: 'Ice blocked further west' },
        ],
      },
      {
        id: 'north-pole',
        title: 'Attempt on the North Pole by sledge',
        yearStart: 1827,
        yearEnd: 1827,
        mode: 'sled',
        color: '#3f556e',
        summary:
          'From a ship anchored north of Spitsbergen, Parry led a sledge party with improvised wheels across pack ice toward the North Pole, reaching 82°45\' N, the farthest north yet attained.',
        waypoints: [
          { id: 'wp1', name: 'Svalbard (Spitsbergen)', lat: 78.9, lng: 15.0, date: '1827-04-04', kind: 'port' },
          { id: 'wp2', name: 'Far northern pack ice', lat: 82.75, lng: 20.0, date: '1827-07-23', kind: 'discovery', note: 'Reached lat 82°45\' N, a record' },
          { id: 'wp3', name: 'Svalbard (return)', lat: 78.9, lng: 15.0, date: '1827-08-21', kind: 'port', note: 'Turned back, having set the farthest-north mark' },
        ],
      },
    ],
  };