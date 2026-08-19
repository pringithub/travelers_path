import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'da-gama',
    name: 'Vasco da Gama',
    era: 'Age of Sail',
    years: 'c. 1460 – 1524',
    nationality: 'Portuguese',
    blurb:
      'Portuguese explorer who opened the sea route to India by rounding the Cape of Good Hope, founding the maritime empire that linked Europe to Asia around the world.',
    tags: ['india', 'age-of-sail'],
    sources: [
      { label: 'Vasco da Gama – Wikipedia', url: 'https://en.wikipedia.org/wiki/Vasco_da_Gama' },
    ],
    journeys: [
      {
        id: 'first-india',
        title: 'First voyage to India',
        yearStart: 1497,
        yearEnd: 1499,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Sailing around the southern tip of Africa and across the Indian Ocean, da Gama reached Calicut on the Malabar coast, returning to Portugal loaded with spices and the prestige of a new sea route.',
        waypoints: [
          { id: 'wp1', name: 'Lisbon, Portugal', lat: 38.72, lng: -9.14, date: '1497-07-08', kind: 'port' },
          { id: 'wp2', name: 'Cape Verde Islands', lat: 15.4, lng: -23.6, date: '1497-07', kind: 'port' },
          { id: 'wp3', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1497-11-22', kind: 'discovery', note: 'Rounded the Cape, entering the Indian Ocean' },
          { id: 'wp4', name: 'Malindi, East Africa', lat: -3.22, lng: 40.12, date: '1498-04', kind: 'port', note: 'Secured an Arab pilot for the crossing' },
          { id: 'wp5', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1498-05-20', kind: 'port', note: 'First European sea landing at the Indian city of spices' },
          { id: 'wp6', name: 'Cochin / Kannur, India', lat: 9.93, lng: 76.27, date: '1498-11', kind: 'port', note: 'Departed after tensions with the ruler of Calicut' },
          { id: 'wp7', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1499', kind: 'discovery', note: 'Return voyage around the Cape' },
          { id: 'wp8', name: 'Lisbon, Portugal', lat: 38.72, lng: -9.14, date: '1499-09', kind: 'port', note: 'Returned with rich cargo; a revolution in global trade' },
        ],
      },
    ],
  };