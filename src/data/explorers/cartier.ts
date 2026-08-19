import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'cartier',
    name: 'Jacques Cartier',
    era: 'Age of Sail',
    years: '1491 – 1557',
    nationality: 'French',
    blurb:
      'French navigator who made three voyages of exploration up the St. Lawrence River, claiming eastern Canada for France and giving the name to Canada itself.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'Jacques Cartier – Wikipedia', url: 'https://en.wikipedia.org/wiki/Jacques_Cartier' },
    ],
    journeys: [
      {
        id: 'first-voyage',
        title: 'First voyage: the St. Lawrence Gulf',
        yearStart: 1534,
        yearEnd: 1534,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Cartier\'s first expedition explored the coast of Newfoundland and the Gulf of St. Lawrence, claiming the region for France at the Gaspé Peninsula.',
        waypoints: [
          { id: 'wp1', name: 'Saint-Malo, France', lat: 48.65, lng: -2.02, date: '1534-04-20', kind: 'port' },
          { id: 'wp2', name: 'Bell Island, Newfoundland', lat: 51.0, lng: -55.0, date: '1534-05-10', kind: 'landfall' },
          { id: 'wp3', name: 'Gaspé Peninsula', lat: 48.8, lng: -64.4, date: '1534-07-24', kind: 'landfall', note: 'Claimed the land for France; raised a cross' },
          { id: 'wp4', name: 'Anticosti Island', lat: 49.5, lng: -63.0, date: '1534-08', kind: 'landfall', note: 'Determined the gulf was not an open passage' },
          { id: 'wp5', name: 'Saint-Malo', lat: 48.65, lng: -2.02, date: '1534-09-05', kind: 'port', note: 'Journey ends' },
        ],
      },
      {
        id: 'second-voyage',
        title: 'Second voyage: up the St. Lawrence',
        yearStart: 1535,
        yearEnd: 1536,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Cartier sailed up the St. Lawrence to Hochelaga (Montreal), spent a brutal winter at Stadacona (Quebec City) where much of the crew died of scurvy, and took two Iroquoian chiefs back to France.',
        waypoints: [
          { id: 'wp1', name: 'Saint-Malo', lat: 48.65, lng: -2.02, date: '1535-05-16', kind: 'port' },
          { id: 'wp2', name: 'St. Lawrence River mouth', lat: 49.0, lng: -67.0, date: '1535-08', kind: 'landfall', note: 'Entered the great river' },
          { id: 'wp3', name: 'Stadacona (Quebec City)', lat: 46.8, lng: -71.25, date: '1535-09-07', kind: 'landfall', note: 'Main ship wintered here; scurvy killed many men' },
          { id: 'wp4', name: 'Hochelaga (Montreal)', lat: 45.5, lng: -73.56, date: '1535-10-02', kind: 'turnaround', note: 'Named the rapids La Chine after the hoped-for passage to China' },
          { id: 'wp5', name: 'Stadacona', lat: 46.8, lng: -71.25, date: '1535-10', kind: 'landfall', note: 'Returned for winter; almost all survived after a Native cure for scurvy' },
          { id: 'wp6', name: 'Saint-Malo', lat: 48.65, lng: -2.02, date: '1536-07-16', kind: 'port', note: 'Returned with Donnacona, who told tales of a kingdom of the Saguenay' },
        ],
      },
      {
        id: 'third-voyage',
        title: 'Third voyage: saguenay and the failed colony',
        yearStart: 1541,
        yearEnd: 1542,
        mode: 'ship',
        color: '#3f8f6a',
        summary:
          'A final expedition sought to establish a colony and reach the fabled kingdom of the Saguenay; it failed, relations with the Iroquois soured, and the settlement was abandoned.',
        waypoints: [
          { id: 'wp1', name: 'Saint-Malo', lat: 48.65, lng: -2.02, date: '1541', kind: 'port' },
          { id: 'wp2', name: 'Cap-Rouge, St. Lawrence', lat: 46.75, lng: -71.35, date: '1541-08', kind: 'landfall', note: 'Founded Charlesbourg-Royal, the first French colony in Canada' },
          { id: 'wp3', name: 'Hochelaga (Montreal)', lat: 45.5, lng: -73.56, date: '1541-10', kind: 'turnaround', note: 'Rapids blocked the way; winter famine and hostile Iroquois followed' },
          { id: 'wp4', name: 'Cap-Rouge', lat: 46.75, lng: -71.35, date: '1542', kind: 'death', note: 'Colony abandoned; Cartier returned to France with "gold" that proved to be iron pyrite' },
        ],
      },
    ],
  };