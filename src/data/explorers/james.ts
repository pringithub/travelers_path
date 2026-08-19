import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'james',
    name: 'Thomas James',
    era: 'Age of Sail',
    years: 'c. 1593 – 1635',
    nationality: 'English',
    blurb:
      'English navigator and explorer who in 1631–1632 wintered on James Bay in the southern Hudson\'s Bay region while searching for the Northwest Passage, and who explored Charleton Island.',
    tags: ['arctic', 'age-of-sail'],
    sources: [
      { label: 'Thomas James (explorer) – Wikipedia', url: 'https://en.wikipedia.org/wiki/Thomas_James_(explorer)' },
    ],
    journeys: [
      {
        id: 'james-bay',
        title: 'Northwest Passage expedition to James Bay',
        yearStart: 1631,
        yearEnd: 1632,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Commanding the Henrietta Maria, James sailed into Hudson Bay and pushed into its southernmost reach, now named James Bay, where his ship was ice-bound and the crew wintered at Charleton Island before escaping in the spring.',
        waypoints: [
          { id: 'wp1', name: 'Bristol, England', lat: 51.45, lng: -2.59, date: '1631-05', kind: 'port' },
          { id: 'wp2', name: 'Resolution Island, Hudson Strait', lat: 61.6, lng: -65.0, date: '1631-07', kind: 'landfall' },
          { id: 'wp3', name: 'Charlton Island, James Bay', lat: 52.0, lng: -79.5, date: '1631-09', kind: 'landfall', note: 'Wintered here after the ship was ice-bound' },
          { id: 'wp4', name: 'Fort Severn, southern James Bay', lat: 55.0, lng: -87.6, date: '1632-07', kind: 'turnaround', note: 'Farthest south before the ship freed itself' },
          { id: 'wp5', name: 'Bristol, England', lat: 51.45, lng: -2.59, date: '1632-10', kind: 'port', note: 'Returned safely after the gruelling winter' },
        ],
      },
    ],
  };