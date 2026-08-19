import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'queiros',
    name: 'Pedro Fernandes de Queirós',
    era: 'Age of Sail',
    years: 'c. 1565 – 1614',
    nationality: 'Portuguese (Spanish service)',
    blurb:
      'Portuguese navigator in the service of Spain who commanded the great 1605–1606 Pacific voyage that discovered the northern New Hebrides, and who championed the idea of a vast southern continent (Australia del Espíritu Santo).',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'Pedro Fernandes de Queirós – Wikipedia', url: 'https://en.wikipedia.org/wiki/Pedro_Fernandes_de_Queir%C3%B3s' },
    ],
    journeys: [
      {
        id: 'oterdra',
        title: 'Pacific voyage to Espíritu Santo',
        yearStart: 1605,
        yearEnd: 1606,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Commanded a fleet seeking the southern continent and outposts, passed the Tuamotus and other Pacific islands, and landed at a large island he believed part of a great southern land, naming it Australia del Espíritu Santo, before Torres sailed on to the Philippines.',
        waypoints: [
          { id: 'wp1', name: 'Callao, Peru', lat: -12.06, lng: -77.13, date: '1605-12-21', kind: 'port' },
          { id: 'wp2', name: 'Tuamotu Islands', lat: -17.0, lng: -141.0, date: '1606-01', kind: 'landfall', note: 'Sighted and named islands in the archipelago' },
          { id: 'wp3', name: 'Espíritu Santo Island, New Hebrides (Vanuatu)', lat: -15.2, lng: 167.0, date: '1606-05-01', kind: 'discovery', note: 'Believed it part of the great southern continent' },
          { id: 'wp4', name: 'Maricón Bay, Espíritu Santo', lat: -15.3, lng: 166.9, date: '1606-05-14', kind: 'landfall', note: 'Proclaimed the "New Jerusalem" and claimed the land for Spain' },
          { id: 'wp5', name: 'Return to Manila via Santa Cruz', lat: 10.0, lng: 166.0, date: '1606-06', kind: 'port', note: 'Fleet separated; Queirós returned, the island never confirmed as a continent' },
        ],
      },
    ],
  };