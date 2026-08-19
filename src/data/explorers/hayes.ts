import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'hayes',
    name: 'Isaac Israel Hayes',
    era: 'Age of Steam',
    years: '1832 – 1881',
    nationality: 'American',
    blurb:
      'American Arctic explorer and physician who searched the far north of Greenland and the Arctic in hope of an open polar sea, serving as surgeon on the Second Grinnell Expedition and leading his own expedition of 1860 \u2013 1861.',
    tags: ['arctic', 'greenland', 'polar'],
    sources: [
      { label: 'Isaac Israel Hayes – Wikipedia', url: 'https://en.wikipedia.org/wiki/Isaac_Israel_Hayes' },
      { label: 'Open Polar Sea – Wikipedia', url: 'https://en.wikipedia.org/wiki/Open_Polar_Sea' },
    ],
    journeys: [
      {
        id: 'second-grinnell-expedition',
        title: 'Surgeon on the Second Grinnell Expedition',
        yearStart: 1853,
        yearEnd: 1855,
        mode: 'ship',
        color: '#6a9edc',
        summary:
          'Hayes sailed as surgeon aboard the Advance under Elisha Kane, probing Kane Basin and the far northwest of Greenland while the party overwintered in the ice, his observations strengthening the idea of open water beyond.',
        waypoints: [
          { id: 'wp1', name: 'New York, USA', lat: 40.71, lng: -74.01, date: '1853-05-30', kind: 'port', note: 'Departure of the Advance northward' },
          { id: 'wp2', name: 'Cape York, Greenland', lat: 75.93, lng: -68.5, date: '1853-08', kind: 'landfall', note: 'Entered the ice of the northwest Greenland shores' },
          { id: 'wp3', name: 'Cape Constance, Kane Basin', lat: 78.6, lng: -72.6, date: '1853-09', kind: 'landfall', note: 'Ship frozen in for a long overwintering' },
          { id: 'wp4', name: 'Kane Basin, farthest north', lat: 78.8, lng: -75.0, date: '1854', kind: 'turnaround', note: 'Party forced back by cold and scurvy' },
          { id: 'wp5', name: 'Upernavik, Greenland', lat: 72.79, lng: -56.15, date: '1855', kind: 'landfall', note: 'Pressed on southward after abandoning the Advance' },
          { id: 'wp6', name: 'New York, USA', lat: 40.71, lng: -74.01, date: '1855-10', kind: 'port', note: 'Returned after a hazardous over-ice retreat' },
        ],
      },
      {
        id: 'hayes-expedition',
        title: 'The Hayes Arctic Expedition in search of the Open Polar Sea',
        yearStart: 1860,
        yearEnd: 1861,
        mode: 'sled',
        color: '#5f8fcf',
        summary:
          'Commanding the schooner United States from Boston, Hayes oversaw the party, then sledged by dog across the great ice fields of northern Greenland, reaching the head of Smith Sound and claiming to have seen the Open Polar Sea beyond.',
        waypoints: [
          { id: 'wp1', name: 'Boston, USA', lat: 42.36, lng: -71.06, date: '1860-07-07', kind: 'port', note: 'United States departed bound for the Arctic' },
          { id: 'wp2', name: 'Cape Isabella, Ellesmere Island', lat: 78.3, lng: -74.1, date: '1860-08', kind: 'landfall', note: 'Winter camp prepared before the sledge season' },
          { id: 'wp3', name: 'Smith Sound', lat: 79.0, lng: -76.5, date: '1861-03', kind: 'turnaround', note: 'Departed base heading north over the ice' },
          { id: 'wp4', name: 'Northern Greenland ice fields', lat: 81.2, lng: -64.0, date: '1861-05', kind: 'discovery', note: 'Sledged across the inland ice, farthest claim of his journey' },
          { id: 'wp5', name: 'Turn back over the pack', lat: 81.0, lng: -66.0, date: '1861-05', kind: 'turnaround', note: 'Forced by open leads and storms to return' },
          { id: 'wp6', name: 'Port Boston / southward retreat', lat: 42.36, lng: -71.06, date: '1861-09', kind: 'port', note: 'Brought the party home safely despite thin supplies' },
        ],
      },
    ],
  };