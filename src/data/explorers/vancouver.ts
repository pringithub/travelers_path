import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'vancouver',
    name: 'George Vancouver',
    era: 'Age of Enlightenment',
    years: '1757 – 1798',
    nationality: 'British',
    blurb:
      'Royal Navy officer who surveyed the Pacific coast of North America with extraordinary thoroughness, charting the coastline from California to Alaska and giving the island of Vancouver its name.',
    tags: ['pacific', 'age-of-sail', 'mapping'],
    sources: [
      { label: 'George Vancouver – Wikipedia', url: 'https://en.wikipedia.org/wiki/George_Vancouver' },
    ],
    journeys: [
      {
        id: 'pacific-coast',
        title: 'Survey of the Pacific Northwest coast',
        yearStart: 1791,
        yearEnd: 1795,
        mode: 'ship',
        color: '#3f8f6a',
        summary:
          'Commanding HMS Discovery and Chatham, Vancouver circumnavigated the globe, producing a detailed chart of the North American west coast and proving that no Northwest Passage existed south of the Bering Strait.',
        waypoints: [
          { id: 'wp1', name: 'Falmouth, England', lat: 50.15, lng: -5.07, date: '1791-04-01', kind: 'port' },
          { id: 'wp2', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1791-08', kind: 'port' },
          { id: 'wp3', name: 'Southwest Australia coast', lat: -35.0, lng: 117.0, date: '1791-09', kind: 'landfall', note: 'Surveyed the southwest coast' },
          { id: 'wp4', name: 'Hawaiian Islands', lat: 20.0, lng: -157.0, date: '1792-03', kind: 'landfall', note: 'Winter passage; spent time in the islands' },
          { id: 'wp5', name: 'San Diego, California', lat: 32.7, lng: -117.16, date: '1792-04-18', kind: 'port', note: 'Met Spanish expeditions' },
          { id: 'wp6', name: 'Juan de Fuca Strait', lat: 48.3, lng: -124.0, date: '1792-05', kind: 'discovery', note: 'Proved it was a strait, not a passage' },
          { id: 'wp7', name: 'Burrard Inlet / Vancouver', lat: 49.28, lng: -123.1, date: '1792-06-13', kind: 'discovery', note: 'Surveyed the site of modern-day Vancouver' },
          { id: 'wp8', name: 'Cape In/Discovery, Vancouver Island', lat: 48.42, lng: -124.4, date: '1794-08', kind: 'discovery', note: 'Completed circumnavigation of the island, proving its extent' },
          { id: 'wp9', name: 'Cook Inlet, Alaska', lat: 60.5, lng: -151.5, date: '1794', kind: 'landfall' },
          { id: 'wp10', name: 'England', lat: 51.5, lng: -0.13, date: '1795-09', kind: 'port', note: 'Returned after amassing the finest charts of the coast' },
        ],
      },
    ],
  };