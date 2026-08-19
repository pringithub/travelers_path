import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'maimonides',
    name: 'Maimonides',
    era: 'Medieval Islamic Golden Age',
    years: '1138 – 1204',
    nationality: 'Andalusian Jewish (later Egyptian)',
    blurb:
      'Rabbi, physician, and philosopher born in Cordoba whose forced migrations across al-Andalus, North Africa, and the Levant ended in Egypt, where he became one of the most influential Jewish thinkers of the Middle Ages.',
    tags: ['medieval', 'overland'],
    sources: [
      { label: 'Maimonides – Wikipedia', url: 'https://en.wikipedia.org/wiki/Maimonides' },
    ],
    journeys: [
      {
        id: 'exile-and-settlement',
        title: 'Exile from al-Andalus to Egypt',
        yearStart: 1148,
        yearEnd: 1166,
        mode: 'caravan',
        color: '#7a5fa0',
        summary:
          'After Almohad persecution in Iberia, Maimonides and his family moved through southern Spain, lived for years in Fez, and then crossed the Mediterranean and Levant before settling in Fustat (Old Cairo).',
        waypoints: [
          { id: 'wp1', name: 'Cordoba, al-Andalus', lat: 37.89, lng: -4.78, date: '1148', kind: 'port', note: 'Family fled after Almohad conquest' },
          { id: 'wp2', name: 'Almería, al-Andalus', lat: 36.84, lng: -2.46, date: '1148-1159', kind: 'landfall', note: 'Years of displacement in Muslim Spain' },
          { id: 'wp3', name: 'Fez, Morocco', lat: 34.03, lng: -5.0, date: '1160', kind: 'port', note: 'Family lived here about five years' },
          { id: 'wp4', name: 'Acre, Kingdom of Jerusalem', lat: 32.92, lng: 35.08, date: '1165', kind: 'landfall', note: 'Arrived in the Levant by sea' },
          { id: 'wp5', name: 'Jerusalem', lat: 31.78, lng: 35.22, date: '1165-10', kind: 'landfall', note: 'Pilgrimage to the Temple Mount area' },
          { id: 'wp6', name: 'Hebron', lat: 31.53, lng: 35.1, date: '1165-10', kind: 'landfall' },
          { id: 'wp7', name: 'Alexandria, Egypt', lat: 31.2, lng: 29.92, date: '1165', kind: 'port' },
          { id: 'wp8', name: 'Fustat (Old Cairo), Egypt', lat: 30.01, lng: 31.23, date: '1166', kind: 'port', note: 'Journey ends; later became physician to Saladin’s court circle' },
        ],
      },
    ],
  };
