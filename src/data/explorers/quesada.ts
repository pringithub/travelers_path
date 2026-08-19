import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'quesada',
    name: 'Gonzalo Jiménez de Quesada',
    era: 'Age of Sail',
    years: 'c. 1509 – 1579',
    nationality: 'Spanish',
    blurb:
      'Spanish conquistador and explorer who led an expedition from the Caribbean into the heart of the Andes, conquering the Muisca people and founding the city of Bogotá.',
    tags: ['south-america', 'conquistador'],
    sources: [
      { label: 'Gonzalo Jiménez de Quesada – Wikipedia', url: 'https://en.wikipedia.org/wiki/Gonzalo_Jim%C3%A9nez_de_Quesada' },
    ],
    journeys: [
      {
        id: 'bogota',
        title: 'Conquest of the Bogotá highlands',
        yearStart: 1536,
        yearEnd: 1539,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'Descending the Magdalena River and crossing the eastern cordillera of the Andes on foot, Quesada conquered the Muisca, founded Bogotá, and opened the gold-rich Colombian highlands to Spain.',
        waypoints: [
          { id: 'wp1', name: 'Santa Marta, Colombia', lat: 11.24, lng: -74.21, date: '1536-04-05', kind: 'port' },
          { id: 'wp2', name: 'Mouth of the Magdalena / Mompós', lat: 9.24, lng: -74.42, date: '1536-06', kind: 'landfall', note: 'Ascended the great river' },
          { id: 'wp3', name: 'Magdalena River (over 160 survivors)', lat: 7.9, lng: -74.0, date: '1537', kind: 'landfall', note: 'Lost many men to fever and jungle' },
          { id: 'wp4', name: 'Eastern Andes · Mucipatá regions', lat: 5.5, lng: -73.5, date: '1537-02', kind: 'landfall' },
          { id: 'wp5', name: 'Bogotá savanna · founding of Bogotá', lat: 4.6, lng: -74.07, date: '1538-08-06', kind: 'landfall', note: 'Founded the city on the Muisca plain' },
          { id: 'wp6', name: 'Return toward the coast', lat: 6.0, lng: -74.5, date: '1539', kind: 'port', note: 'Presented his conquest to the crown' },
        ],
      },
    ],
  };