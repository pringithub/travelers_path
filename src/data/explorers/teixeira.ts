import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'teixeira',
    name: 'Pedro Teixeira',
    era: 'Age of Sail',
    years: 'c. 1587 – 1641',
    nationality: 'Portuguese (in Brazilian service)',
    blurb:
      'Portuguese explorer who led a large expedition that ascended the entire Amazon River from Belém to Quito in Ecuador and back, carrying out the first full exploration of the Amazon basin.',
    tags: ['south-america', 'amazon'],
    sources: [
      { label: 'Pedro Teixeira – Wikipedia', url: 'https://en.wikipedia.org/wiki/Pedro_Teixeira_(explorer)' },
    ],
    journeys: [
      {
        id: 'amazon-ascension',
        title: 'Ascension of the Amazon from Belém to Quito',
        yearStart: 1637,
        yearEnd: 1639,
        mode: 'foot',
        color: '#2e8b57',
        summary:
          'In 1637 Teixeira led one of the largest expeditions ever to travel the Amazon, rowing and walking upriver from Belém through the heart of the basin, trading and fighting along the way, reaching Quito in the Andes before descending the river again to Belém.',
        waypoints: [
          { id: 'wp1', name: 'Belém, Pará', lat: -1.45, lng: -48.5, date: '1637', kind: 'port', note: 'Departure up the Amazon in a fleet of canoes' },
          { id: 'wp2', name: 'Tapajós / Santarém region', lat: -2.44, lng: -54.71, date: '1638', kind: 'port', note: 'Passed the mouth of the Tapajós' },
          { id: 'wp3', name: 'Confluence of the Solimões with the Negro', lat: -3.11, lng: -60.02, date: '1638', kind: 'discovery', note: 'Passed the meeting of the waters' },
          { id: 'wp4', name: 'Tefe region, Amazonas', lat: -3.35, lng: -64.73, date: '1638', kind: 'port' },
          { id: 'wp5', name: 'Napo tributary', lat: -3.31, lng: -73.09, date: '1639', kind: 'port' },
          { id: 'wp6', name: 'Quito, Ecuador', lat: -0.18, lng: -78.47, date: '1639', kind: 'turnaround', note: 'Reached the Spanish viceregal capital in the Andes' },
        ],
      },
    ],
  };