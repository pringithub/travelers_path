import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'de-houtman',
    name: 'Cornelis de Houtman',
    era: 'Age of Sail',
    years: 'c. 1565 – 1599',
    nationality: 'Dutch',
    blurb:
      'Dutch explorer who led the first Dutch expedition to the East Indies, opening the spice trade to the Netherlands; his pioneering voyage called at Madagascar and Bali before reaching Banten on Java.',
    tags: ['east-indies', 'age-of-sail', 'spice-trade'],
    sources: [
      { label: 'Cornelis de Houtman – Wikipedia', url: 'https://en.wikipedia.org/wiki/Cornelis_de_Houtman' },
    ],
    journeys: [
      {
        id: 'first-dutch-voyage-to-east-indies',
        title: 'First Dutch voyage to the East Indies',
        yearStart: 1595,
        yearEnd: 1597,
        mode: 'ship',
        color: '#c0392b',
        summary:
          'Sailing under the Dutch East India Companies\' precursors, de Houtman carried the first Dutch fleet around Africa to the East Indies, touching at Madagascar and Bali before reaching Banten, marking the opening of the Dutch spice trade to Java.',
        waypoints: [
          { id: 'wp1', name: 'Texel, Netherlands', lat: 53.0, lng: 4.75, date: '1595-04-02', kind: 'port' },
          { id: 'wp2', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1596-05', kind: 'landfall', note: 'Rounded the Cape during an arduous passage with much sickness' },
          { id: 'wp3', name: 'Madagascar', lat: -18.8, lng: 47.35, date: '1596-08', kind: 'landfall', note: 'Stopped to reprovision and rest the crews' },
          { id: 'wp4', name: 'Bali', lat: -8.4, lng: 115.19, date: '1597-02', kind: 'landfall', note: 'Landfall on the island, striking for rich trade' },
          { id: 'wp5', name: 'Banten, Java', lat: -6.03, lng: 106.15, date: '1597-06-27', kind: 'port', note: 'Reached the pepper port that opened Dutch trade networks' },
          { id: 'wp6', name: 'Return to Texel, Netherlands', lat: 53.0, lng: 4.75, date: '1597-08-14', kind: 'port', note: 'Returned with few survivors but success proved the route' },
        ],
      },
    ],
  };