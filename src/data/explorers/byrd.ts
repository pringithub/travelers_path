import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'byrd',
    name: 'Richard E. Byrd',
    era: 'Early 20th century aviation',
    years: '1888 – 1957',
    nationality: 'American',
    blurb:
      'American naval officer, aviator and polar explorer who led major aircraft-based expeditions to Antarctica, and whose 1926 flight to the North Pole (disputed) and 1929 flight over the South Pole opened the age of aviation exploration.',
    tags: ['antarctic', 'polar', 'balloon'],
    sources: [
      { label: 'Richard E. Byrd – Wikipedia', url: 'https://en.wikipedia.org/wiki/Richard_E._Byrd' },
    ],
    journeys: [
      {
        id: 'north-pole-flight',
        title: 'Flight to the North Pole',
        yearStart: 1926,
        yearEnd: 1926,
        mode: 'balloon',
        color: '#4a72a8',
        summary:
          'With pilot Floyd Bennett, Byrd claimed to have flown from Spitsbergen to the North Pole and back in the Fokker tri-motor Josephine Ford, a feat whose authenticity remains debated.',
        waypoints: [
          { id: 'wp1', name: 'Kings Bay, Spitsbergen', lat: 78.92, lng: 11.93, date: '1926-05-09', kind: 'port' },
          { id: 'wp2', name: 'North Pole (claimed)', lat: 90.0, lng: 0.0, date: '1926-05-09', kind: 'discovery', note: 'Reached the pole by air, turning around in the same flight — accuracy disputed' },
          { id: 'wp3', name: 'Kings Bay, Spitsbergen', lat: 78.92, lng: 11.93, date: '1926-05-09', kind: 'port', note: 'Returned after a round trip of ~15.5 hours' },
        ],
      },
      {
        id: 'antarctic-flights',
        title: 'Antarctic expeditions and South Pole flight',
        yearStart: 1928,
        yearEnd: 1930,
        mode: 'balloon',
        color: '#9c3b28',
        summary:
          'As a result of his first over-winter Antarctic expedition, Byrd built Little America near the Ross Ice Shelf and flew to the South Pole and back in the Ford Trimotor Floyd Bennett on 28–29 November 1929, the first flight over the pole.',
        waypoints: [
          { id: 'wp1', name: 'New York / Bay of Whales', lat: -78.63, lng: -163.65, date: '1928-12', kind: 'port', note: 'Established Little America base in Antarctica' },
          { id: 'wp2', name: 'Queen Maud Mountains', lat: -86.5, lng: -160.0, date: '1929-11', kind: 'landfall', note: 'Flew across the mountains toward the pole' },
          { id: 'wp3', name: 'South Pole', lat: -90.0, lng: 0.0, date: '1929-11-29', kind: 'discovery', note: 'First flight over the South Pole — dropped a flag' },
          { id: 'wp4', name: 'Little America', lat: -78.63, lng: -163.65, date: '1929-11-29', kind: 'port', note: 'Returned safely to base' },
        ],
      },
    ],
  };