import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'de-soto',
    name: 'Hernando de Soto',
    era: 'Age of Sail',
    years: 'c. 1497 – 1542',
    nationality: 'Spanish',
    blurb:
      'Spanish conquistador who led the first European expedition deep into the interior of North America, marching from Florida across the southeast and becoming the first European to cross the Mississippi River.',
    tags: ['north-america', 'conquistador'],
    sources: [
      { label: 'Hernando de Soto – Wikipedia', url: 'https://en.wikipedia.org/wiki/Hernando_de_Soto' },
    ],
    journeys: [
      {
        id: 'southeast-march',
        title: 'March across the American Southeast',
        yearStart: 1539,
        yearEnd: 1542,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'A huge expedition landed in Florida and marched north and west across the American South, seeking gold, fighting and enslaving indigenous peoples, crossing the Mississippi in 1541, and ending with de Soto\'s death from fever along the river.',
        waypoints: [
          { id: 'wp1', name: 'Tampa Bay, Florida', lat: 27.76, lng: -82.63, date: '1539-05-30', kind: 'port' },
          { id: 'wp2', name: 'Apalachee (Tallahassee)', lat: 30.44, lng: -84.28, date: '1539-10', kind: 'landfall', note: 'Marched through swampland, taking a Juan Ortiz as guide' },
          { id: 'wp3', name: 'Savannah River region', lat: 33.6, lng: -81.0, date: '1540', kind: 'landfall' },
          { id: 'wp4', name: 'Georgia/South Carolina', lat: 34.0, lng: -83.0, date: '1540-04', kind: 'landfall' },
          { id: 'wp5', name: 'Alabama (Mabila)', lat: 32.0, lng: -87.0, date: '1540-10', kind: 'landfall', note: 'Major battle at Mabila; heavy losses' },
          { id: 'wp6', name: 'Winter camp in Alabama', lat: 33.0, lng: -88.5, date: '1540-12', kind: 'landfall' },
          { id: 'wp7', name: 'Mississippi River', lat: 34.8, lng: -90.2, date: '1541-05-08', kind: 'discovery', note: 'First European to cross the Mississippi' },
          { id: 'wp8', name: 'Ozarks/Arkansas', lat: 35.5, lng: -93.0, date: '1541', kind: 'landfall', note: 'Marched west into Arkansas before turning back' },
          { id: 'wp9', name: 'Mississippi River (south of Arkansas)', lat: 31.0, lng: -91.5, date: '1542', kind: 'death', note: 'De Soto died of fever; his body sunk in the river; survivors fled on rafts to Mexico' },
        ],
      },
    ],
  };