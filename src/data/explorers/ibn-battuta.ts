import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'ibn-battuta',
    name: 'Ibn Battuta',
    era: 'Medieval Islamic Golden Age',
    years: '1304 – 1369',
    nationality: 'Moroccan',
    blurb:
      'Scholar from Tangier who spent nearly three decades wandering the Islamic world and beyond, from West Africa to China, recording his travels in the Rihla.',
    tags: ['silk-road', 'pilgrimage'],
    sources: [
      { label: 'Ibn Battuta – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ibn_Battuta' },
    ],
    journeys: [
      {
        id: 'pilgrimage',
        title: 'Pilgrimage to Mecca and the Middle East',
        yearStart: 1325,
        yearEnd: 1332,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'What began as a pilgrimage from Tangier to Mecca grew into years of wandering through Iraq, Persia, the Horn of Africa, and on to Constantinople.',
        waypoints: [
          { id: 'wp1', name: 'Tangier, Morocco', lat: 35.76, lng: -5.83, date: '1325', kind: 'port' },
          { id: 'wp2', name: 'Cairo, Egypt', lat: 30.04, lng: 31.24, date: '1326', kind: 'landfall' },
          { id: 'wp3', name: 'Mecca', lat: 21.42, lng: 39.83, date: '1326', kind: 'landfall' },
          { id: 'wp4', name: 'Baghdad', lat: 33.32, lng: 44.36, date: '1327', kind: 'landfall' },
          { id: 'wp5', name: 'Aden', lat: 12.79, lng: 45.02, date: '1330', kind: 'landfall', note: 'Took ship down the Red Sea coast' },
          { id: 'wp6', name: 'Mogadishu', lat: 2.04, lng: 45.34, date: '1330', kind: 'landfall' },
          { id: 'wp7', name: 'Kilwa, East Africa', lat: -8.97, lng: 39.57, date: '1330', kind: 'landfall' },
          { id: 'wp8', name: 'Mecca', lat: 21.42, lng: 39.83, date: '1330', kind: 'landfall', note: 'Returned to Mecca before heading north' },
          { id: 'wp9', name: 'Damascus', lat: 33.51, lng: 36.28, date: '1332', kind: 'landfall' },
          { id: 'wp10', name: 'Constantinople', lat: 41.01, lng: 28.98, date: '1332', kind: 'landfall' },
        ],
      },
      {
        id: 'india-china',
        title: 'India, the Maldives, and China',
        yearStart: 1332,
        yearEnd: 1346,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Served as a qadi in the Delhi Sultanate for years before an embassy to China carried him through the Maldives, Ceylon, and Southeast Asia to Quanzhou, the furthest point of his travels.',
        waypoints: [
          { id: 'wp1', name: 'Multan', lat: 30.2, lng: 71.47, date: '1333', kind: 'landfall', note: 'Entry point into the Delhi Sultanate' },
          { id: 'wp2', name: 'Delhi', lat: 28.65, lng: 77.23, date: '1334', kind: 'landfall' },
          { id: 'wp3', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1342', kind: 'port', note: 'Embarked on the China embassy by ship' },
          { id: 'wp4', name: 'Maldives', lat: 4.17, lng: 73.51, date: '1344', kind: 'landfall' },
          { id: 'wp5', name: 'Ceylon', lat: 7.29, lng: 80.63, date: '1344', kind: 'landfall' },
          { id: 'wp6', name: 'Chittagong, Bengal', lat: 22.36, lng: 91.83, date: '1345', kind: 'port' },
          { id: 'wp7', name: 'Sumatra', lat: 5.2, lng: 97.0, date: '1345', kind: 'port' },
          { id: 'wp8', name: 'Quanzhou, China', lat: 24.87, lng: 118.68, date: '1345', kind: 'turnaround', note: 'Furthest point east' },
          { id: 'wp9', name: 'Malacca', lat: 2.19, lng: 102.25, date: '1346', kind: 'port' },
          { id: 'wp10', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1346', kind: 'port' },
        ],
      },
      {
        id: 'west-africa',
        title: 'Journey to West Africa',
        yearStart: 1351,
        yearEnd: 1354,
        mode: 'caravan',
        color: '#9c3b28',
        summary:
          'His final expedition, crossing the Sahara by camel caravan to visit the Mali Empire and the fabled city of Timbuktu before returning home to Fez to dictate the Rihla.',
        waypoints: [
          { id: 'wp1', name: 'Fez, Morocco', lat: 34.03, lng: -5.0, date: '1351', kind: 'port' },
          { id: 'wp2', name: 'Sijilmasa, Morocco', lat: 31.28, lng: -4.27, date: '1352', kind: 'port' },
          { id: 'wp3', name: 'Taghaza salt mines', lat: 23.35, lng: -3.85, date: '1352', kind: 'landfall' },
          { id: 'wp4', name: 'Timbuktu, Mali', lat: 16.77, lng: -3.01, date: '1352', kind: 'landfall' },
          { id: 'wp5', name: 'Gao, Mali Empire', lat: 16.27, lng: -0.04, date: '1353', kind: 'landfall' },
          { id: 'wp6', name: 'Fez, Morocco', lat: 34.03, lng: -5.0, date: '1354', kind: 'port', note: 'Journey ends; Rihla dictated' },
        ],
      },
    ],
  };
