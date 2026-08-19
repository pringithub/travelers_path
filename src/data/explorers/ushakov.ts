import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'ushakov',
    name: 'Georgy Ushakov',
    era: 'Soviet era',
    years: '1901 – 1963',
    nationality: 'Soviet / Russian',
    blurb:
      'Soviet explorer and geographer who led the 1930-32 expedition to the Severnaya Zemlya archipelago, mapping the previously unattained islands of the Russian High Arctic and contributing to polar research and the creation of drifting stations.',
    tags: ['arctic', 'polar', 'sled', 'soviet'],
    sources: [
      { label: 'Georgy Ushakov – Wikipedia', url: 'https://ru.wikipedia.org/wiki/%D0%A3%D1%88%D0%B0%D0%BA%D0%BE%D0%B2,_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87' },
    ],
    journeys: [
      {
        id: 'severnaya-zemlya',
        title: 'Survey of Severnaya Zemlya',
        yearStart: 1930,
        yearEnd: 1932,
        mode: 'sled',
        color: '#2f6f7a',
        summary:
          'Ushakov led a small party that established a base on Severnaya Zemlya and over two years made sledging traverses over the ice, mapping the archipelago\'s islands for the first time and proving it a distinct landmass.',
        waypoints: [
          { id: 'wp1', name: 'Murmansk, Russia', lat: 68.98, lng: 33.09, date: '1930-07', kind: 'port', note: 'Departed for the High Arctic' },
          { id: 'wp2', name: 'Doma landfall, Severnaya Zemlya', lat: 79.9, lng: 99.0, date: '1930-08-22', kind: 'landfall', note: 'Landed on the western coast and built base Dom' },
          { id: 'wp3', name: 'Northern Franz-Josef Land traverse', lat: 81.0, lng: 99.0, date: '1931-04', kind: 'turnaround', note: 'Sledging along the coast of the main island' },
          { id: 'wp4', name: 'Kommunist Island (south)', lat: 79.6, lng: 99.0, date: '1931', kind: 'discovery', note: 'Mapped one of the southern islands' },
          { id: 'wp5', name: 'Oktyabrskaya Revolyutsiya Island', lat: 79.98, lng: 97.35, date: '1931-01-15', kind: 'discovery', note: 'Charted the large island of the group' },
          { id: 'wp6', name: 'Return to the mainland', lat: 77.4, lng: 104.3, date: '1932-09', kind: 'port', note: 'Departed the completed survey' },
        ],
      },
    ],
  };