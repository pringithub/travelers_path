import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'cabral',
    name: 'Pedro Álvares Cabral',
    era: 'Age of Sail',
    years: 'c. 1467 – c. 1520',
    nationality: 'Portuguese',
    blurb:
      'Portuguese commander credited with the first European discovery of Brazil, which he claimed for Portugal, before continuing around Africa to open the sea route to India.',
    tags: ['age-of-sail', 'americas'],
    sources: [
      { label: 'Pedro Álvares Cabral – Wikipedia', url: 'https://en.wikipedia.org/wiki/Pedro_%C3%81lvares_Cabral' },
    ],
    journeys: [
      {
        id: 'brazil-and-india',
        title: 'Discovery of Brazil and voyage to India',
        yearStart: 1500,
        yearEnd: 1501,
        mode: 'ship',
        color: '#3f8f6a',
        summary:
          'Commanding the Portuguese fleet of 13 ships, Cabral veered far west in the Atlantic, landing on the coast of Brazil on 22 April 1500 and claiming it for Portugal, then pressed on around Africa to India.',
        waypoints: [
          { id: 'wp1', name: 'Lisbon, Portugal', lat: 38.72, lng: -9.14, date: '1500-03-09', kind: 'port' },
          { id: 'wp2', name: 'Cape Verde Islands', lat: 15.4, lng: -23.6, date: '1500-03', kind: 'port' },
          { id: 'wp3', name: 'Porto Seguro, Brazil', lat: -16.45, lng: -39.06, date: '1500-04-22', kind: 'discovery', note: 'First landfall of the voyage — claimed Brazil for Portugal' },
          { id: 'wp4', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1500-05-24', kind: 'discovery', note: 'Rounded the Cape with heavy losses in a storm' },
          { id: 'wp5', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1500-09-13', kind: 'port', note: 'Reached India; a Portuguese factory was burned but he sailed on' },
          { id: 'wp6', name: 'Cochin, India', lat: 9.93, lng: 76.27, date: '1500-12', kind: 'port', note: 'Secured an alliance and loaded spices' },
          { id: 'wp7', name: 'Lisbon, Portugal', lat: 38.72, lng: -9.14, date: '1501-07-23', kind: 'port', note: 'Returned, though only 5 of 13 ships made it home' },
        ],
      },
    ],
  };