import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'barentsz',
    name: 'Willem Barentsz',
    era: 'Age of Sail',
    years: 'c. 1550 – 1597',
    nationality: 'Dutch',
    blurb:
      'Dutch navigator and cartographer who led three expeditions searching for a northeast passage to Asia, sailed the Arctic seas that now bear his name, and died on the ice of Novaya Zemlya after wintering there, famed for his accurate charts.',
    tags: ['arctic', 'polar', 'white-ice'],
    sources: [
      { label: 'Willem Barentsz – Wikipedia', url: 'https://en.wikipedia.org/wiki/Willem_Barentsz' },
    ],
    journeys: [
      {
        id: 'arctic',
        title: 'Voyages for the Northeast Passage',
        yearStart: 1594,
        yearEnd: 1597,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Across three voyages Barentsz pushed along the coasts of the Arctic seas, discovering Spitsbergen and Bear Island in 1596, and trying to round northern Russia. On his final voyage, ice trapped his ship near Novaya Zemlya, where the crew survived a bitter winter in a lodge they built, and Barentsz died shortly after abandoning the ice.',
        waypoints: [
          { id: 'wp1', name: 'Texel / Amsterdam, Netherlands', lat: 53.0, lng: 4.7, date: '1594-06-09', kind: 'port' },
          { id: 'wp2', name: 'Novaya Zemlya (west coast)', lat: 73.0, lng: 54.0, date: '1594-07', kind: 'discovery', note: 'Charted the west coast of the islands' },
          { id: 'wp3', name: 'Bear Island (Bjørnøya)', lat: 74.44, lng: 19.0, date: '1596-06', kind: 'discovery', note: 'Discovered the island on the second voyage' },
          { id: 'wp4', name: 'Spitsbergen (Svalbard)', lat: 79.0, lng: 15.0, date: '1596-06-19', kind: 'discovery', note: 'Named the Spitsbergen (sharp mountains) island in a rediscovery' },
          { id: 'wp5', name: 'Novaya Zemlya winter quarters', lat: 76.2, lng: 68.5, date: '1596-10', kind: 'turnaround', note: 'Frozen in; built the "Het Behouden Huys" (Saved House)' },
          { id: 'wp6', name: 'White Sea (boat escape)', lat: 68.0, lng: 45.0, date: '1597-06', kind: 'port', note: 'Abandoned the ship after leaving the ice in two open boats' },
          { id: 'wp7', name: 'Barentsz\'s death at sea', lat: 70.0, lng: 55.0, date: '1597-06-20', kind: 'death', note: 'Died on the open-boat journey; the Arctic sea bears his name' },
        ],
      },
    ],
  };