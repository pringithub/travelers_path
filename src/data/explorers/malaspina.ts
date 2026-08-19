import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'malaspina',
    name: 'Alejandro Malaspina',
    era: 'Age of Enlightenment',
    years: '1754 – 1810',
    nationality: 'Spanish (Italian-born)',
    blurb:
      'Italian-born naval officer in Spanish service who led the most important scientific and political expedition of the Spanish Enlightenment, a five-year circumnavigation that surveyed the Pacific coast of the Americas and Oceania with unprecedented detail.',
    tags: ['pacific', 'circumnavigation', 'age-of-sail'],
    sources: [
      { label: 'Alejandro Malaspina – Wikipedia', url: 'https://en.wikipedia.org/wiki/Alejandro_Malaspina' },
    ],
    journeys: [
      {
        id: 'circumnavigation',
        title: 'The Malaspina circumnavigation',
        yearStart: 1789,
        yearEnd: 1794,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Commanding the corvettes Descubierta and Atrevida, Malaspina made a scientific circumnavigation of the globe, surveying the coasts of South America, the Pacific Northwest, the Philippines and the entire South Pacific, and amassing the Enlightenment\'s greatest collection of natural and astronomical data.',
        waypoints: [
          { id: 'wp1', name: 'Cádiz, Spain', lat: 36.53, lng: -6.29, date: '1789-07-30', kind: 'port' },
          { id: 'wp2', name: 'Montevideo / Buenos Aires', lat: -34.9, lng: -56.2, date: '1789-11', kind: 'port' },
          { id: 'wp3', name: 'Strait of Magellan and Pacific coast of South America', lat: -45.0, lng: -75.0, date: '1790', kind: 'discovery', note: 'Surveyed the coast, named glaciers and fiords' },
          { id: 'wp4', name: 'Pacific Northwest coast (Alaska to California)', lat: 55.0, lng: -135.0, date: '1791-06', kind: 'discovery', note: 'Surveyed the coast at nearly 60°N, meeting Russian and English ships' },
          { id: 'wp5', name: 'Oceanic Islands (islands en route west)', lat: -5.0, lng: -170.0, date: '1792', kind: 'landfall' },
          { id: 'wp6', name: 'Philippines / Malay archipelago', lat: 15.0, lng: 121.0, date: '1792', kind: 'landfall', note: 'Surveyed the Far East' },
          { id: 'wp7', name: 'South Pacific / New Zealand', lat: -45.0, lng: 170.0, date: '1793', kind: 'landfall', note: 'Crossed the South Pacific' },
          { id: 'wp8', name: 'Spain (return via Australia, Cape)', lat: 39.5, lng: -6.0, date: '1794-09-21', kind: 'port', note: 'Returned to Cádiz with the era\'s best charts' },
        ],
      },
    ],
  };