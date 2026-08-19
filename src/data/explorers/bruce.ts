import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'bruce',
    name: 'James Bruce',
    era: 'Age of Discovery',
    years: '1730 – 1794',
    nationality: 'Scottish',
    blurb:
      'Scottish explorer who in 1768 \u2013 1773 travelled overland through Ethiopia, tracing the Blue Nile to its source in Lake Tana and describing its final rise at Gish Abay, a spring the locals regarded as the river\u2019s true head.',
    tags: ['africa', 'overland', 'source-of-the-nile'],
    sources: [
      { label: 'James Bruce – Wikipedia', url: 'https://en.wikipedia.org/wiki/James_Bruce' },
      { label: 'Lake Tana – Wikipedia', url: 'https://en.wikipedia.org/wiki/Lake_Tana' },
    ],
    journeys: [
      {
        id: 'ethiopia-and-the-blue-nile',
        title: 'Journey to Ethiopia and the source of the Blue Nile',
        yearStart: 1768,
        yearEnd: 1773,
        mode: 'caravan',
        color: '#8a5a3a',
        summary:
          'Bruce reached Cairo, travelled up the Nile and Red Sea to Massawa, and crossed into the Ethiopian highlands to the court at Gondar, from which he pressed on to Lake Tana and the spring at Gish Abay that rises into the Blue Nile.',
        waypoints: [
          { id: 'wp1', name: 'Cairo, Egypt', lat: 30.04, lng: 31.24, date: '1768-06', kind: 'port', note: 'Began his African journey up the Nile' },
          { id: 'wp2', name: 'Massawa, Red Sea', lat: 15.61, lng: 39.47, date: '1769-06', kind: 'landfall', note: 'Crossed the Red Sea to the Ethiopian coast' },
          { id: 'wp3', name: 'Gondar, Ethiopia', lat: 12.6, lng: 37.47, date: '1770-02', kind: 'landfall', note: 'Reached the imperial capital and the royal court' },
          { id: 'wp4', name: 'Lake Tana, source of the Blue Nile', lat: 11.83, lng: 37.6, date: '1770-09', kind: 'discovery', note: 'Traced the Blue Nile as it leaves the great lake' },
          { id: 'wp5', name: 'Gish Abay spring', lat: 10.96, lng: 37.2, date: '1770-11', kind: 'discovery', note: 'The spring held by locals to be the Nile\u2019s true head' },
          { id: 'wp6', name: 'Khartoum / return to Cairo', lat: 15.5, lng: 32.56, date: '1772-05', kind: 'turnaround', note: 'Retraced his route by way of the Nile toward Egypt' },
          { id: 'wp7', name: 'Cairo, Egypt', lat: 30.04, lng: 31.24, date: '1773-01', kind: 'port', note: 'Returned to Cairo with his accounts and drawings' },
        ],
      },
    ],
  };