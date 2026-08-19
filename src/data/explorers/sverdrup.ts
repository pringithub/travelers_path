import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'sverdrup',
    name: 'Otto Sverdrup',
    era: 'Late 19th – early 20th century',
    years: '1854 – 1930',
    nationality: 'Norwegian',
    blurb:
      'Norwegian explorer and captain who sailed with Nansen on the first crossing of Greenland and the Fram drift, then led an expedition that charted the unknown islands of the Canadian High Arctic, which he claimed for Norway.',
    tags: ['arctic', 'polar', 'sled'],
    sources: [
      { label: 'Otto Sverdrup – Wikipedia', url: 'https://en.wikipedia.org/wiki/Otto_Sverdrup' },
    ],
    journeys: [
      {
        id: 'nansen-expeditions',
        title: 'Greenland crossing and Fram drift with Nansen',
        yearStart: 1888,
        yearEnd: 1896,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Sverdrup was a key member of Nansen\'s Greenland crossing of 1888 and captain of the Fram during its deliberate drift through the Arctic pack ice of 1893–96, proving the theory of the great polar current.',
        waypoints: [
          { id: 'wp1', name: 'Greenland ice cap crossing', lat: 64.0, lng: -40.0, date: '1888', kind: 'landfall', note: 'Sverdrup took part in Nansen\'s first crossing' },
          { id: 'wp2', name: 'Norway / Fram drift start', lat: 78.5, lng: 133.0, date: '1893-09', kind: 'turnaround', note: 'As captain, Sverdrup oversaw the ship during its drift' },
          { id: 'wp3', name: 'Fram returns to Norway', lat: 70.37, lng: 31.11, date: '1896-08', kind: 'port', note: 'Guided the Fram safely back after three years in the ice' },
        ],
      },
      {
        id: 'sverdrup-islands',
        title: 'Mapping the Canadian High Arctic islands',
        yearStart: 1898,
        yearEnd: 1902,
        mode: 'sled',
        color: '#9c3b28',
        summary:
          'Commanding the Fram south of the route to the pole, Sverdrup explored and mapped a huge area of the Canadian Arctic islands, including Ellesmere, Axel Heiberg and Amund Ringnes, producing the surveys that later shaped Canadian territorial claims.',
        waypoints: [
          { id: 'wp1', name: 'Dundas Harbour, Devon Island', lat: 74.6, lng: -82.0, date: '1898-09', kind: 'port', note: 'Wintered on Devon Island' },
          { id: 'wp2', name: 'Ellef Ringnes Island', lat: 78.0, lng: -102.0, date: '1900-04', kind: 'discovery', note: 'Sailed among the new islands' },
          { id: 'wp3', name: 'Amund Ringnes Island', lat: 78.3, lng: -96.0, date: '1900', kind: 'discovery' },
          { id: 'wp4', name: 'Axel Heiberg Island', lat: 79.4, lng: -90.0, date: '1901', kind: 'discovery', note: 'Named for a patron' },
          { id: 'wp5', name: 'Ellesmere Island coast', lat: 79.5, lng: -86.0, date: '1902', kind: 'discovery', note: 'Mapping the far reaches of the archipelago' },
          { id: 'wp6', name: 'Norway', lat: 59.91, lng: 10.75, date: '1902-10', kind: 'port', note: 'Returned with the largest uncharted islands of the Arctic' },
        ],
      },
    ],
  };