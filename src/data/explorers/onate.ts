import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'onate',
    name: 'Juan de Oñate',
    era: 'Age of Exploration',
    years: '1550 – 1626',
    nationality: 'Spanish',
    blurb:
      'Spanish explorer and conquistador who founded the first permanent European colony in New Mexico in 1598 and led expeditions across the Southwest, reaching the mouth of the Colorado River in 1605.',
    tags: ['conquistador', 'new-mexico', 'southwest', 'foot'],
    sources: [
      { label: 'Juan de Oñate – Wikipedia', url: 'https://en.wikipedia.org/wiki/Juan_de_O%C3%B1ate' },
    ],
    journeys: [
      {
        id: 'new-mexico-colony',
        title: 'Founding of New Mexico and the Colorado River',
        yearStart: 1598,
        yearEnd: 1605,
        mode: 'foot',
        color: '#8a5a2b',
        summary:
          'Leading colonists north from Mexico, Oñate established San Juan Pueblo as the seat of New Mexico, then trekked west across the Great Plains and Arizona to reach the Gulf of California at the Colorado River delta.',
        waypoints: [
          { id: 'wp1', name: 'San Juan Pueblo, New Mexico', lat: 36.05, lng: -106.07, date: '1598-07-11', kind: 'discovery', note: 'Established the first European colony in New Mexico' },
          { id: 'wp2', name: 'Rio Grande headwaters', lat: 37.9, lng: -107.2, date: '1598-08', kind: 'landfall' },
          { id: 'wp3', name: 'Great Plains buffalo hunt', lat: 34.5, lng: -100.5, date: '1599', kind: 'landfall', note: 'Eastward expedition to the buffalo plains' },
          { id: 'wp4', name: 'Zuni pueblos', lat: 35.07, lng: -108.79, date: '1604-10', kind: 'landfall', note: 'Staging point before heading west' },
          { id: 'wp5', name: 'Mouth of the Colorado River', lat: 31.8, lng: -114.8, date: '1605-01', kind: 'discovery', note: 'Reached the Gulf of California shore' },
          { id: 'wp6', name: 'Return to San Juan Pueblo', lat: 36.05, lng: -106.07, date: '1605-04', kind: 'turnaround', note: 'Returned from the Gulf to the colony' },
        ],
      },
    ],
  };