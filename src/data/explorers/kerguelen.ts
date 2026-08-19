import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'kerguelen',
    name: 'Yves-Joseph de Kerguelen-Trémarec',
    era: 'Age of Sail',
    years: '1734 – 1797',
    nationality: 'French',
    blurb:
      'French naval officer who led two expeditions across the southern Indian Ocean, discovering the Kerguelen Islands in 1772 and giving France its most remote island possession.',
    tags: ['southern-ocean', 'age-of-sail'],
    sources: [
      { label: 'Yves-Joseph de Kerguelen-Trémarec – Wikipedia', url: 'https://en.wikipedia.org/wiki/Yves-Joseph_de_Kerguelen-Tr%C3%A9marec' },
    ],
    journeys: [
      {
        id: 'first-expedition',
        title: 'First expedition and discovery of the Kerguelen Islands',
        yearStart: 1771,
        yearEnd: 1772,
        mode: 'ship',
        color: '#3a6ea5',
        summary:
          'Sailing from Brest in search of a great southern continent, Kerguelen crossed the Indian Ocean and, in early 1772, sighted the inhospitable subantarctic islands that now bear his name, briefly landing before turning back to France.',
        waypoints: [
          { id: 'wp1', name: 'Brest, France', lat: 48.39, lng: -4.49, date: '1771-05', kind: 'port' },
          { id: 'wp2', name: 'Île de France (Mauritius)', lat: -20.16, lng: 57.5, date: '1771', kind: 'port', note: 'Taking on provisions in the French colony' },
          { id: 'wp3', name: 'Kerguelen Islands, first sighting', lat: -49.2, lng: 69.4, date: '1772-02', kind: 'discovery', note: 'First sight of the remote subantarctic landmass' },
          { id: 'wp4', name: 'Kerguelen Islands, landing', lat: -48.5, lng: 69.0, date: '1772-03', kind: 'landfall', note: 'A brief, difficult landing on the barren coast' },
          { id: 'wp5', name: 'Return to France', lat: 48.39, lng: -4.49, date: '1772', kind: 'port', note: 'Back with news of a supposed southern continent' },
        ],
      },
      {
        id: 'second-expedition',
        title: 'Second expedition to secure the discovery',
        yearStart: 1773,
        yearEnd: 1774,
        mode: 'ship',
        color: '#7a5f3a',
        summary:
          'Returning with two ships to confirm and claim the island group, Kerguelen found the land far less promising than hoped, lost a vessel, and was court-martialled on his return to France for the expedition\'s failures.',
        waypoints: [
          { id: 'wp1', name: 'Brest, France', lat: 48.39, lng: -4.49, date: '1773-03', kind: 'port' },
          { id: 'wp2', name: 'Kerguelen Islands', lat: -49.2, lng: 69.4, date: '1773-12', kind: 'landfall', note: 'Returning to survey the island group' },
          { id: 'wp3', name: 'Northern Kerguelen coast', lat: -48.6, lng: 68.9, date: '1774', kind: 'turnaround', note: 'Separation and loss of a companion vessel' },
          { id: 'wp4', name: 'Return to France', lat: 48.39, lng: -4.49, date: '1774', kind: 'port', note: 'Court-martialled for the expedition\'s failures' },
        ],
      },
    ],
  };