import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'zheng-he',
    name: 'Zheng He',
    era: 'Ming Treasure Voyages',
    years: '1371 – 1433',
    nationality: 'Chinese (Ming dynasty)',
    blurb:
      'Admiral who commanded seven immense treasure-fleet expeditions across the Indian Ocean, projecting Ming power and trade from China to Southeast Asia, India, Arabia, and East Africa.',
    tags: ['treasure-fleet', 'indian-ocean'],
    sources: [
      { label: 'Zheng He – Wikipedia', url: 'https://en.wikipedia.org/wiki/Zheng_He' },
    ],
    journeys: [
      {
        id: 'first-voyage',
        title: 'First treasure voyage',
        yearStart: 1405,
        yearEnd: 1407,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'The first of seven grand expeditions, sailing a massive fleet from Nanjing through Southeast Asia and across the Indian Ocean to Calicut on India\'s Malabar coast.',
        waypoints: [
          { id: 'wp1', name: 'Nanjing / Liujiagang', lat: 32.06, lng: 120.6, date: '1405-07', kind: 'port' },
          { id: 'wp2', name: 'Champa (Vietnam)', lat: 13.77, lng: 109.22, date: '1405', kind: 'port' },
          { id: 'wp3', name: 'Java', lat: -6.2, lng: 106.85, date: '1405', kind: 'port' },
          { id: 'wp4', name: 'Malacca', lat: 2.19, lng: 102.25, date: '1406', kind: 'port' },
          { id: 'wp5', name: 'Ceylon', lat: 7.29, lng: 80.63, date: '1406', kind: 'landfall' },
          { id: 'wp6', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1407', kind: 'port', note: 'Fleet\'s westernmost destination' },
        ],
      },
      {
        id: 'fourth-voyage',
        title: 'Fourth treasure voyage',
        yearStart: 1413,
        yearEnd: 1415,
        mode: 'ship',
        color: '#3f8f6a',
        summary:
          'Pushed past India for the first time, reaching the Persian Gulf and returning with envoys and exotic tribute from as far as Hormuz.',
        waypoints: [
          { id: 'wp1', name: 'Nanjing / Liujiagang', lat: 32.06, lng: 120.6, date: '1413-11', kind: 'port' },
          { id: 'wp2', name: 'Champa (Vietnam)', lat: 13.77, lng: 109.22, date: '1414', kind: 'port' },
          { id: 'wp3', name: 'Malacca', lat: 2.19, lng: 102.25, date: '1414', kind: 'port' },
          { id: 'wp4', name: 'Ceylon', lat: 7.29, lng: 80.63, date: '1414', kind: 'landfall' },
          { id: 'wp5', name: 'Cochin, India', lat: 9.93, lng: 76.26, date: '1414', kind: 'port' },
          { id: 'wp6', name: 'Hormuz', lat: 26.97, lng: 56.47, date: '1415', kind: 'landfall', note: 'First voyage to reach the Persian Gulf' },
        ],
      },
      {
        id: 'sixth-voyage',
        title: 'Sixth treasure voyage',
        yearStart: 1421,
        yearEnd: 1422,
        mode: 'ship',
        color: '#7a5fa0',
        summary:
          'Escorted foreign envoys home and extended the fleet\'s reach along the Arabian coast to the Horn and East coast of Africa.',
        waypoints: [
          { id: 'wp1', name: 'Nanjing / Liujiagang', lat: 32.06, lng: 120.6, date: '1421-03', kind: 'port' },
          { id: 'wp2', name: 'Palembang, Sumatra', lat: -2.99, lng: 104.76, date: '1421', kind: 'port' },
          { id: 'wp3', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1421', kind: 'port' },
          { id: 'wp4', name: 'Hormuz', lat: 26.97, lng: 56.47, date: '1422', kind: 'landfall' },
          { id: 'wp5', name: 'Aden', lat: 12.79, lng: 45.02, date: '1422', kind: 'landfall' },
          { id: 'wp6', name: 'Mogadishu', lat: 2.04, lng: 45.34, date: '1422', kind: 'landfall' },
          { id: 'wp7', name: 'Malindi, East Africa', lat: -3.22, lng: 40.12, date: '1422', kind: 'discovery', note: 'Furthest west the fleet is recorded reaching' },
        ],
      },
      {
        id: 'seventh-voyage',
        title: 'Seventh treasure voyage (final)',
        yearStart: 1431,
        yearEnd: 1433,
        mode: 'ship',
        color: '#9c6b2f',
        summary:
          'Zheng He\'s last and grandest expedition, sending detachments as far as Jeddah near Mecca; the admiral died on the return leg near India.',
        waypoints: [
          { id: 'wp1', name: 'Nanjing / Liujiagang', lat: 32.06, lng: 120.6, date: '1431-01', kind: 'port' },
          { id: 'wp2', name: 'Champa (Vietnam)', lat: 13.77, lng: 109.22, date: '1431', kind: 'port' },
          { id: 'wp3', name: 'Java', lat: -6.2, lng: 106.85, date: '1431', kind: 'port' },
          { id: 'wp4', name: 'Malacca', lat: 2.19, lng: 102.25, date: '1432', kind: 'port' },
          { id: 'wp5', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1432', kind: 'port' },
          { id: 'wp6', name: 'Hormuz', lat: 26.97, lng: 56.47, date: '1432', kind: 'landfall' },
          { id: 'wp7', name: 'Aden', lat: 12.79, lng: 45.02, date: '1432', kind: 'landfall', note: 'Squadron rounds Arabia via the Gulf of Aden' },
          { id: 'wp8', name: 'Jeddah', lat: 21.49, lng: 39.19, date: '1432', kind: 'discovery', note: 'Envoys traveled inland to Mecca' },
          { id: 'wp9', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1433-04', kind: 'death', note: 'Zheng He dies during the homeward voyage' },
        ],
      },
    ],
  };
