import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'giles',
    name: 'Ernest Giles',
    era: 'Victorian era',
    years: '1835 – 1897',
    nationality: 'British (Australia)',
    blurb:
      'English-Australian explorer who led strenuous mounted expeditions across the interior of Australia, becoming the first European to cross the Gibson Desert and the Great Victoria Desert in central and western Australia.',
    tags: ['australia', 'desert', 'horse'],
    sources: [
      { label: 'Ernest Giles – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ernest_Giles' },
    ],
    journeys: [
      {
        id: 'australian-deserts',
        title: 'Expeditions across the western deserts',
        yearStart: 1872,
        yearEnd: 1876,
        mode: 'horse',
        color: '#b0743a',
        summary:
          'Giles mounted repeated expeditions from South Australia into the arid centre and west, crossing the Gibson Desert and the Great Victoria Desert, and finally reaching Perth to become the first European to cross Australia from east to west by that inland route.',
        waypoints: [
          { id: 'wp1', name: 'Chambers Creek, South Australia', lat: -31.5, lng: 134.5, date: '1872-08', kind: 'port', note: 'Departure point into the interior' },
          { id: 'wp2', name: 'Lake Amadeus', lat: -24.8, lng: 130.9, date: '1872-11', kind: 'discovery', note: 'Salted lake; pushed on west' },
          { id: 'wp3', name: 'Mount Olga (Kata Tjuta)', lat: -25.3, lng: 130.74, date: '1873-02', kind: 'landfall', note: 'Named the striking domed rock' },
          { id: 'wp4', name: 'Tietkens Range, Gibson Desert', lat: -25.6, lng: 127.6, date: '1874-10', kind: 'discovery', note: 'First crossing of the Gibson Desert' },
          { id: 'wp5', name: 'Queen Victoria Spring, Western Australia', lat: -30.4, lng: 123.6, date: '1875-11', kind: 'landfall', note: 'Reached water on the Great Victoria Desert traverse' },
          { id: 'wp6', name: 'Perth, Western Australia', lat: -31.95, lng: 115.86, date: '1875-11-19', kind: 'port', note: 'First crossing of Australia from east to west' },
        ],
      },
    ],
  };