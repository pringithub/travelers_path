import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'vizcaino',
    name: 'Sebastián Vizcaíno',
    era: 'Age of Sail (Spanish colonial era)',
    years: '1550 – 1615',
    nationality: 'Spanish',
    blurb:
      'Spanish soldier and navigator who mapped the California coast from Acapulco to Monterey Bay in 1602–1603, discovering and naming Monterey, and who later voyaged to Japan in search of the fabled Islas de Roca de Oro.',
    tags: ['pacific', 'age-of-sail', 'north-america'],
    sources: [
      { label: 'Sebastián Vizcaíno – Wikipedia', url: 'https://en.wikipedia.org/wiki/Sebasti%C3%A1n_Vizca%C3%ADno' },
    ],
    journeys: [
      {
        id: 'california-coast',
        title: 'Mapping of the California coast',
        yearStart: 1602,
        yearEnd: 1603,
        mode: 'ship',
        color: '#3a7a8a',
        summary:
          'Commanding a small fleet sent to chart and rename the bays and capes of upper California, Vizcaíno sailed north from Acapulco, discovered and christened Monterey Bay, and mapped the coastline before turning back.',
        waypoints: [
          { id: 'wp1', name: 'Acapulco, Mexico', lat: 16.86, lng: -99.88, date: '1602-05', kind: 'port' },
          { id: 'wp2', name: 'San Diego Bay', lat: 32.71, lng: -117.16, date: '1602-11', kind: 'discovery', note: 'First mapped and named San Diego de Alcalá' },
          { id: 'wp3', name: 'Monterey Bay', lat: 36.6, lng: -121.9, date: '1602-12', kind: 'discovery', note: 'Discovered, named in honour of the viceroy, and surveyed for anchorage' },
          { id: 'wp4', name: 'Cape Mendocino', lat: 40.44, lng: -124.4, date: '1603-01', kind: 'turnaround', note: 'Farthest north reached before the return' },
          { id: 'wp5', name: 'Return to Acapulco, Mexico', lat: 16.86, lng: -99.88, date: '1603-03', kind: 'port', note: 'Chaotic return, with typhus and storms claiming many men' },
        ],
      },
      {
        id: 'japan-expedition',
        title: 'Embassy to Japan',
        yearStart: 1611,
        yearEnd: 1612,
        mode: 'ship',
        color: '#7a5f8a',
        summary:
          'Sent on a diplomatic mission to Japan, Vizcaíno sailed across the Pacific and, while in port, was ordered to survey the Japanese coast before a hazardous return voyage to New Spain.',
        waypoints: [
          { id: 'wp1', name: 'Acapulco, Mexico', lat: 16.86, lng: -99.88, date: '1611-03', kind: 'port' },
          { id: 'wp2', name: 'Edo Bay, Japan', lat: 35.4, lng: 139.77, date: '1612', kind: 'landfall', note: 'Reaching Japan on the diplomatic mission' },
          { id: 'wp3', name: 'Suruga Bay, Japan', lat: 34.8, lng: 138.5, date: '1612', kind: 'turnaround', note: 'Surveying the coast before the return voyage' },
          { id: 'wp4', name: 'Return to Acapulco, Mexico', lat: 16.86, lng: -99.88, date: '1612-06', kind: 'port', note: 'Escaping a typhoon to reach home' },
        ],
      },
    ],
  };