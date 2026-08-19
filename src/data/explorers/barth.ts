import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'barth',
    name: 'Heinrich Barth',
    era: 'Victorian',
    years: '1821 – 1865',
    nationality: 'German',
    blurb:
      'German explorer, geographer and scholar who spent five years traveling across the Sahara and Sahel, documenting in extraordinary detail the history and peoples of central Africa from Lake Chad to Timbuktu and the Niger.',
    tags: ['africa', 'exploration'],
    sources: [
      { label: 'Heinrich Barth – Wikipedia', url: 'https://en.wikipedia.org/wiki/Heinrich_Barth' },
    ],
    journeys: [
      {
        id: 'sudan',
        title: 'Expedition across the Sudan and Sahara',
        yearStart: 1850,
        yearEnd: 1855,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'Accompanying a British expedition, Barth crossed the Sahara to Lake Chad, then ranged east to the Benue, crossed to Timbuktu and descended the Niger, making the most detailed European record of the region.',
        waypoints: [
          { id: 'wp1', name: 'Tripoli, Libya', lat: 32.89, lng: 13.19, date: '1850', kind: 'port' },
          { id: 'wp2', name: 'Ghat (Wadi al-Hayat)', lat: 24.96, lng: 10.17, date: '1850', kind: 'landfall', note: 'Sahara caravan routes' },
          { id: 'wp3', name: 'Agadez, Niger', lat: 16.97, lng: 7.99, date: '1850-11', kind: 'landfall' },
          { id: 'wp4', name: 'Lake Chad', lat: 13.1, lng: 14.5, date: '1851-05-18', kind: 'discovery', note: 'Reached a major focus of the expedition' },
          { id: 'wp5', name: 'Kukawa (Bornu)', lat: 12.5, lng: 13.5, date: '1851', kind: 'landfall', note: 'Residence of the Bornu ruler' },
          { id: 'wp6', name: 'Yola / Benue River', lat: 9.2, lng: 12.5, date: '1851-11', kind: 'discovery', note: 'Forced back by hostility' },
          { id: 'wp7', name: 'Timbuktu', lat: 16.77, lng: -3.01, date: '1853-09-07', kind: 'landfall', note: 'Stayed several months, historical study' },
          { id: 'wp8', name: 'Sokoto / Niger River', lat: 13.06, lng: 5.24, date: '1854', kind: 'landfall', note: 'Followed the Niger east' },
          { id: 'wp9', name: 'Tripoli', lat: 32.89, lng: 13.19, date: '1855-09', kind: 'port', note: 'Returned after five years with his great account' },
        ],
      },
    ],
  };