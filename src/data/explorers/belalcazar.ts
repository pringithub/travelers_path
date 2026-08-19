import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'belalcazar',
    name: 'Sebastián de Belalcázar',
    era: 'Age of Exploration',
    years: 'c. 1490 – 1551',
    nationality: 'Spanish',
    blurb:
      'Spanish conquistador who founded the cities of Quito, Ecuador, and Cali, Colombia, and led expeditions that explored much of the northern Andes and upper Magdalena Valley.',
    tags: ['conquistador', 'new-world', 'foot'],
    sources: [
      { label: 'Sebastián de Belalcázar – Wikipedia', url: 'https://en.wikipedia.org/wiki/Sebasti%C3%A1n_de_Belalc%C3%A1zar' },
    ],
    journeys: [
      {
        id: 'quito-and-cali',
        title: 'Conquest and founding of Quito and Cali',
        yearStart: 1533,
        yearEnd: 1537,
        mode: 'foot',
        color: '#7a5c2e',
        summary:
          'Marching from the coast into the Andes, Belalcázar conquered the Inca city of Quito, founded Cali in the Cauca valley, and pushed on to dispute the conquest of the north with other conquistadors.',
        waypoints: [
          { id: 'wp1', name: 'San Miguel (coastal base)', lat: -2.5, lng: -80.0, date: '1533', kind: 'port', note: 'Set out from the Pacific coast expedition base' },
          { id: 'wp2', name: 'Cali, Cauca Valley', lat: 3.45, lng: -76.53, date: '1536-07-25', kind: 'discovery', note: 'Founded the city of Cali' },
          { id: 'wp3', name: 'Quito, Ecuador', lat: -0.18, lng: -78.47, date: '1534-12-06', kind: 'discovery', note: 'Founded Quito over the Inca town site' },
          { id: 'wp4', name: 'Pasture lands of the northern Andes', lat: 1.2, lng: -77.0, date: '1536', kind: 'landfall', note: 'Territory of the Pasto peoples explored' },
          { id: 'wp5', name: 'Bogotá (Sabana) pursuit', lat: 4.71, lng: -74.07, date: '1538', kind: 'landfall', note: 'Clashed and later settled with Quesada over claims' },
        ],
      },
    ],
  };