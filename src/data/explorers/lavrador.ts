import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'lavrador',
    name: 'João Fernandes Lavrador',
    era: 'Age of Discovery',
    years: 'mid-1400s – early 1500s',
    nationality: 'Portuguese',
    blurb:
      'Portuguese navigator and landowner who in the 1490s sailed the north Atlantic under letters patent from the Portuguese crown, coasting past the Labrador shore and, with his partner, giving the region the name that became Labrador.',
    tags: ['north-atlantic', 'age-of-sail', 'canada'],
    sources: [
      { label: 'João Fernandes Lavrador – Wikipedia', url: 'https://en.wikipedia.org/wiki/Jo%C3%A3o_Fernandes_Lavrador' },
    ],
    journeys: [
      {
        id: 'north-atlantic-coasts',
        title: 'Voyages to the Labrador coast',
        yearStart: 1492,
        yearEnd: 1496,
        mode: 'ship',
        color: '#4a8aa8',
        summary:
          'Granted patent rights by King John II, Lavrador sailed the foggy North Atlantic, reaching and charting the Greenland-Labrador coasts and mapping much of the eastern shore of North America, leaving his name on the landfall region.',
        waypoints: [
          { id: 'wp1', name: 'Lisbon, Portugal', lat: 38.72, lng: -9.14, date: '1492', kind: 'port', note: 'Letters patent for Atlantic exploration issued' },
          { id: 'wp2', name: 'Greenland coast', lat: 62.2, lng: -48.5, date: '1493', kind: 'landfall', note: 'Reported and charted the southern Greenland shores' },
          { id: 'wp3', name: 'Furthest Greenland coast', lat: 65.5, lng: -39.0, date: '1493', kind: 'discovery', note: 'Sailed northernmost along the Greenland edge' },
          { id: 'wp4', name: 'Labrador coast (Davis Strait side)', lat: 58.5, lng: -62.5, date: '1494', kind: 'landfall', note: 'Reached the shore that would take the name Labrador' },
          { id: 'wp5', name: 'Newfoundland area, southeastern Labrador', lat: 54.0, lng: -59.0, date: '1495', kind: 'discovery', note: 'Charted the east coast toward the Newfoundland approaches' },
          { id: 'wp6', name: 'Return to Lisbon, Portugal', lat: 38.72, lng: -9.14, date: '1496', kind: 'port', note: 'Home after mapping the north Atlantic shores' },
        ],
      },
    ],
  };