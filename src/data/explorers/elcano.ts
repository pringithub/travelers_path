import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'elcano',
    name: 'Juan Sebastián Elcano',
    era: 'Age of Sail',
    years: 'c. 1476 – 1526',
    nationality: 'Basque (Spanish service)',
    blurb:
      'Basque navigator who completed the first circumnavigation of the Earth, taking command of the Victoria after Magellan\'s death and bringing the lone ship home to Spain.',
    tags: ['circumnavigation', 'age-of-sail'],
    sources: [
      { label: 'Juan Sebastián Elcano – Wikipedia', url: 'https://en.wikipedia.org/wiki/Juan_Sebasti%C3%A1n_Elcano' },
    ],
    journeys: [
      {
        id: 'circumnavigation',
        title: 'Completion of the first circumnavigation',
        yearStart: 1519,
        yearEnd: 1522,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'As a master on the doomed Magellan expedition, Elcano led the mutiny that removed a rival and, after Magellan\'s death, took command of the Victoria, sailing from the Spice Islands to Spain to complete humanity\'s first global circuit.',
        waypoints: [
          { id: 'wp1', name: 'Seville, Spain', lat: 37.39, lng: -5.98, date: '1519-08-10', kind: 'port' },
          { id: 'wp2', name: 'Strait of Magellan', lat: -52.9, lng: -70.6, date: '1520-11', kind: 'discovery', note: 'Elcano commanded the ship against mutiny at Puerto San Julián' },
          { id: 'wp3', name: 'Mactan, Philippines', lat: 10.31, lng: 123.98, date: '1521-04-27', kind: 'death', note: 'After Magellan died here, Elcano became a captain for the onward voyage' },
          { id: 'wp4', name: 'Tidore, Moluccas', lat: 0.66, lng: 127.4, date: '1521-11-08', kind: 'port', note: 'Loaded cloves aboard the Victoria' },
          { id: 'wp5', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1522-05-06', kind: 'discovery', note: 'Chose the dangerous route home around the Cape' },
          { id: 'wp6', name: 'Sanlúcar de Barrameda, Spain', lat: 36.78, lng: -6.35, date: '1522-09-06', kind: 'port', note: 'Victoria completes the first circumnavigation with only 18 survivors' },
        ],
      },
    ],
  };