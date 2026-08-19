import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'flinders',
    name: 'Matthew Flinders',
    era: 'Age of Enlightenment',
    years: '1774 – 1814',
    nationality: 'British',
    blurb:
      'Royal Navy navigator who led the first circumnavigation of Australia, mapped much of its coastline, and gave the continent its present name.',
    tags: ['pacific', 'age-of-sail', 'mapping'],
    sources: [
      { label: 'Matthew Flinders – Wikipedia', url: 'https://en.wikipedia.org/wiki/Matthew_Flinders' },
    ],
    journeys: [
      {
        id: 'norfolk-circumnavigation',
        title: 'Circumnavigation of Tasmania',
        yearStart: 1798,
        yearEnd: 1799,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'With George Bass, Flinders sailed the small sloop Norfolk entirely around the island of Tasmania, proving it was separate from the mainland and discovering Bass Strait.',
        waypoints: [
          { id: 'wp1', name: 'Sydney Cove, Australia', lat: -33.86, lng: 151.2, date: '1798-10-07', kind: 'port' },
          { id: 'wp2', name: 'Bass Strait', lat: -40.0, lng: 147.0, date: '1798', kind: 'discovery', note: 'Proved the strait separating Tasmania' },
          { id: 'wp3', name: 'Circumnavigation of Tasmania', lat: -42.3, lng: 146.5, date: '1798-12', kind: 'discovery', note: 'Norfolk circumnavigated the island' },
          { id: 'wp4', name: 'Sydney Cove', lat: -33.86, lng: 151.2, date: '1799-01-11', kind: 'port', note: 'Completed the first circuit of Tasmania' },
        ],
      },
      {
        id: 'investigator',
        title: 'Circumnavigation of Australia in HMS Investigator',
        yearStart: 1801,
        yearEnd: 1803,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Flinders sailed completely around Australia in HMS Investigator, charting the entire coastline as the ship decayed beneath him; after repairs via Sydney he was captured by the French en route home.',
        waypoints: [
          { id: 'wp1', name: 'Spithead, England', lat: 50.77, lng: -1.11, date: '1801-07-18', kind: 'port' },
          { id: 'wp2', name: 'Spencer Gulf, South Australia', lat: -34.7, lng: 137.0, date: '1802-02', kind: 'discovery', note: 'Named the gulf and region' },
          { id: 'wp3', name: 'Encounter Bay', lat: -35.56, lng: 138.6, date: '1802-04-08', kind: 'discovery', note: 'Met the French expedition of Baudin' },
          { id: 'wp4', name: 'Sydney Cove', lat: -33.86, lng: 151.2, date: '1802-05-09', kind: 'port', note: 'Repaired the leaking Investigator' },
          { id: 'wp5', name: 'Gulf of Carpentaria', lat: -15.0, lng: 139.0, date: '1802-11', kind: 'discovery', note: 'Explored the north coast' },
          { id: 'wp6', name: 'Cape York, northern tip of Australia', lat: -10.69, lng: 142.53, date: '1803-02', kind: 'turnaround', note: 'Ship too rotten to continue; rounded afterwards calling it Australia' },
          { id: 'wp7', name: 'Sydney Cove', lat: -33.86, lng: 151.2, date: '1803-06-09', kind: 'port', note: 'Withdrawing from the circumnavigation to finish the voyage\'s outer route' },
        ],
      },
    ],
  };