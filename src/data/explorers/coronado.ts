import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'coronado',
    name: 'Francisco Vázquez de Coronado',
    era: 'Age of Sail',
    years: '1510 – 1554',
    nationality: 'Spanish',
    blurb:
      'Spanish governor and explorer who led a large expedition north from Mexico into present-day Arizona, New Mexico, Texas, Oklahoma and Kansas, seeking the fabled Seven Cities of Cibola.',
    tags: ['north-america', 'conquistador'],
    sources: [
      { label: 'Francisco Vázquez de Coronado – Wikipedia', url: 'https://en.wikipedia.org/wiki/Francisco_V%C3%A1zquez_de_Coronado' },
    ],
    journeys: [
      {
        id: 'cibola',
        title: 'Expedition to Cibola, the plains and the Grand Canyon',
        yearStart: 1540,
        yearEnd: 1542,
        mode: 'horse',
        color: '#9c3b28',
        summary:
          'Guided by reports of golden cities, Coronado marched north through the deserts of the Southwest, captured the pueblos of Zuni, reached the Rio Grande, and was first European to view the Grand Canyon before traveling east onto the Great Plains.',
        waypoints: [
          { id: 'wp1', name: 'Compostela, Mexico', lat: 21.2, lng: -104.9, date: '1540-02-23', kind: 'port' },
          { id: 'wp2', name: 'Corazones, Sonora', lat: 29.0, lng: -110.0, date: '1540-05', kind: 'landfall' },
          { id: 'wp3', name: 'Hawikuh, Zuni pueblos (Cibola)', lat: 34.9, lng: -108.5, date: '1540-07-07', kind: 'landfall', note: 'Found only poor pueblos, no gold' },
          { id: 'wp4', name: 'Rio Grande pueblos (Tiguex)', lat: 35.6, lng: -106.5, date: '1540-12', kind: 'landfall', note: 'Wintered among the pueblos, with brutal conflicts' },
          { id: 'wp5', name: 'Grand Canyon (by-party of Cárdenas)', lat: 36.06, lng: -112.1, date: '1540-09', kind: 'discovery', note: 'A detachment became the first Europeans to view the canyon' },
          { id: 'wp6', name: 'Great Plains, Kansas (Quivira)', lat: 38.0, lng: -99.0, date: '1541', kind: 'turnaround', note: 'Crossed the plains seeking Quivira; found no wealth' },
          { id: 'wp7', name: 'Return to Mexico City', lat: 19.4, lng: -99.1, date: '1542', kind: 'port', note: 'Disappointed, returned with nothing to show' },
        ],
      },
    ],
  };