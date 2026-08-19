import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'ojeda',
    name: 'Alonso de Ojeda',
    era: 'Age of Exploration',
    years: 'c. 1466 – 1515',
    nationality: 'Spanish',
    blurb:
      'Spanish conquistador and explorer who accompanied Columbus and led early expeditions along the South American coast and to the Pearl Islands, exploring Venezuela and the Guajira peninsula.',
    tags: ['caribbean', 'age-of-exploration'],
    sources: [
      { label: 'Alonso de Ojeda – Wikipedia', url: 'https://en.wikipedia.org/wiki/Alonso_de_Ojeda' },
    ],
    journeys: [
      {
        id: 'venezuela-expedition',
        title: 'Expedition along the coast of Venezuela',
        yearStart: 1499,
        yearEnd: 1500,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'With Vespucci aboard, Ojeda sailed along the northern coast of South America, exploring the Gulf of Venezuela and the Guajira Peninsula and naming the area for its stilt villages like a little Venice.',
        waypoints: [
          { id: 'wp1', name: 'Cádiz, Spain', lat: 36.53, lng: -6.29, date: '1499-05', kind: 'port' },
          { id: 'wp2', name: 'Isla Margarita', lat: 10.99, lng: -63.94, date: '1499-08', kind: 'landfall' },
          { id: 'wp3', name: 'Gulf of Venezuela (Lake Maracaibo)', lat: 10.65, lng: -71.6, date: '1499-08', kind: 'discovery', note: 'Named Venezuela for its stilt villages' },
          { id: 'wp4', name: 'Guajira Peninsula', lat: 12.0, lng: -71.5, date: '1499-09', kind: 'discovery' },
          { id: 'wp5', name: 'Pearl Islands', lat: 8.35, lng: -79.0, date: '1500-01', kind: 'discovery', note: 'Traded for pearls off the coast' },
          { id: 'wp6', name: 'Hispaniola', lat: 18.5, lng: -70.0, date: '1500-02', kind: 'port', note: 'Returned to the Spanish settlement' },
        ],
      },
    ],
  };