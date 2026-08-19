import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'du-tisne',
    name: 'Claude Charles du Tisné',
    era: 'Age of Enlightenment',
    years: 'c. 1688 – 1730',
    nationality: 'French',
    blurb:
      'French explorer who made the first recorded journey by a European into the interior of the North American prairies, reaching the Osage and Pawnee peoples and being the first to cross the Mississippi far to the west toward the plains.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'Claude Charles du Tisné – Wikipedia', url: 'https://en.wikipedia.org/wiki/Claude_Charles_Du_Tisn%C3%A9' },
    ],
    journeys: [
      {
        id: 'prairie',
        title: 'First French journey onto the prairies',
        yearStart: 1719,
        yearEnd: 1719,
        mode: 'horse',
        color: '#c8992e',
        summary:
          'Commissioned by the Company of the Indies, du Tisné set out from the Mississippi, crossed the Missouri and Osage river country and reached the Pawnee villages far onto the grasslands, mapping the first routes into the interior plains for the French.',
        waypoints: [
          { id: 'wp1', name: 'Kaskaskia / Illinois, Mississippi', lat: 37.92, lng: -89.0, date: '1719', kind: 'port' },
          { id: 'wp2', name: 'Missouri River / Osage villages', lat: 38.8, lng: -92.5, date: '1719', kind: 'landfall', note: 'Reached Osage country on the river' },
          { id: 'wp3', name: 'Pawnee villages, central plains', lat: 39.0, lng: -98.0, date: '1719-11', kind: 'landfall', note: 'First recorded French contact with the plains Pawnee' },
          { id: 'wp4', name: 'Mississippi (return)', lat: 37.92, lng: -89.0, date: '1719-12', kind: 'port', note: 'Returned after opening the plains route' },
        ],
      },
    ],
  };