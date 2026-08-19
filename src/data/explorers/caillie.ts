import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'caillie',
    name: 'René Caillié',
    era: 'Victorian',
    years: '1799 – 1838',
    nationality: 'French',
    blurb:
      'French explorer who became the first European to survive a visit to and return from the fabled city of Timbuktu, disguised as a Muslim traveller and crossing the Sahara to Morocco on the way home.',
    tags: ['africa', 'west-africa', 'caravan'],
    sources: [
      { label: 'René Caillié – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ren%C3%A9_Cailli%C3%A9' },
    ],
    journeys: [
      {
        id: 'timbuktu',
        title: 'First European return from Timbuktu',
        yearStart: 1824,
        yearEnd: 1828,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'Driven to a lifelong ambition, Caillié later disguised himself as an Arab overland trader, followed the Niger past Timbuktu itself, then crossed the Sahara to Tangier, returning to Europe as the first living European to have seen the city.',
        waypoints: [
          { id: 'wp1', name: 'Freetown / Sierra Leone', lat: 8.48, lng: -13.23, date: '1824', kind: 'port', note: 'Began his quest' },
          { id: 'wp2', name: 'Mamou, Guinea', lat: 10.37, lng: -12.1, date: '1827', kind: 'landfall', note: 'Fell ill and was sheltered' },
          { id: 'wp3', name: 'Kankan', lat: 10.38, lng: -9.3, date: '1827-11', kind: 'landfall', note: 'Adopted Arab disguise' },
          { id: 'wp4', name: 'Niagassola / crossing to the Niger', lat: 12.7, lng: -11.2, date: '1828', kind: 'landfall' },
          { id: 'wp5', name: 'Timbuktu', lat: 16.77, lng: -3.01, date: '1828-04-20', kind: 'discovery', note: 'First European to reach and return from the city' },
          { id: 'wp6', name: 'Sahara crossing · Tangier, Morocco', lat: 35.76, lng: -5.83, date: '1828-09-09', kind: 'port', note: 'Crossed the desert to the Mediterranean' },
        ],
      },
    ],
  };