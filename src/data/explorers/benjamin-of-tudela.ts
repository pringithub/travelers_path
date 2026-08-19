import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'benjamin-of-tudela',
    name: 'Benjamin of Tudela',
    era: 'High Middle Ages',
    years: 'c. 1130 – c. 1173',
    nationality: 'Navarrese Jewish',
    blurb:
      'Medieval Jewish traveler whose Book of Travels mapped Jewish communities from Iberia to Mesopotamia and beyond, becoming one of the most important geographic records of the 12th century.',
    tags: ['medieval', 'diaspora'],
    sources: [
      { label: 'Benjamin of Tudela – Wikipedia', url: 'https://en.wikipedia.org/wiki/Benjamin_of_Tudela' },
      { label: 'The Travels of Benjamin – Wikipedia', url: 'https://en.wikipedia.org/wiki/The_Travels_of_Benjamin' },
    ],
    journeys: [
      {
        id: 'book-of-travels-route',
        title: 'Journey recorded in The Travels',
        yearStart: 1160,
        yearEnd: 1173,
        mode: 'caravan',
        color: '#2f6f7a',
        summary:
          'Set out from Iberia through Provence and Italy, crossed the eastern Mediterranean into the Levant and Mesopotamia, visited major Jewish centers including Baghdad, and returned west via Egypt and Sicily.',
        waypoints: [
          { id: 'wp1', name: 'Tudela, Navarre', lat: 42.06, lng: -1.61, date: 'c.1160', kind: 'port' },
          { id: 'wp2', name: 'Zaragoza', lat: 41.65, lng: -0.89, date: 'c.1160', kind: 'landfall' },
          { id: 'wp3', name: 'Barcelona', lat: 41.39, lng: 2.17, date: 'c.1160', kind: 'port' },
          { id: 'wp4', name: 'Marseille', lat: 43.3, lng: 5.37, date: 'c.1161', kind: 'port' },
          { id: 'wp5', name: 'Genoa', lat: 44.41, lng: 8.93, date: 'c.1161', kind: 'landfall' },
          { id: 'wp6', name: 'Rome', lat: 41.9, lng: 12.5, date: 'c.1161', kind: 'landfall' },
          { id: 'wp7', name: 'Constantinople', lat: 41.01, lng: 28.98, date: 'c.1162', kind: 'landfall' },
          { id: 'wp8', name: 'Antioch', lat: 36.2, lng: 36.16, date: 'c.1162', kind: 'landfall' },
          { id: 'wp9', name: 'Jerusalem', lat: 31.78, lng: 35.22, date: 'c.1163', kind: 'landfall' },
          { id: 'wp10', name: 'Damascus', lat: 33.51, lng: 36.28, date: 'c.1163', kind: 'landfall' },
          { id: 'wp11', name: 'Baghdad', lat: 33.32, lng: 44.36, date: 'c.1165', kind: 'landfall', note: 'Described one of the largest Jewish centers of his era' },
          { id: 'wp12', name: 'Basra', lat: 30.51, lng: 47.81, date: 'c.1165', kind: 'landfall' },
          { id: 'wp13', name: 'Alexandria', lat: 31.2, lng: 29.92, date: 'c.1168', kind: 'port' },
          { id: 'wp14', name: 'Sicily (Palermo)', lat: 38.12, lng: 13.36, date: 'c.1172', kind: 'landfall' },
          { id: 'wp15', name: 'Tudela, Navarre', lat: 42.06, lng: -1.61, date: 'c.1173', kind: 'port', note: 'Journey ends; travel account circulates widely in Hebrew' },
        ],
      },
    ],
  };
