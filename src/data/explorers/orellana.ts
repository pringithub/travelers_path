import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'orellana',
    name: 'Francisco de Orellana',
    era: 'Age of Sail',
    years: '1511 – 1546',
    nationality: 'Spanish',
    blurb:
      'Spanish conquistador and explorer who led the first descent of the entire Amazon River, from the Andes to the Atlantic, and gave the river its name after reported encounters with women warriors.',
    tags: ['south-america', 'river'],
    sources: [
      { label: 'Francisco de Orellana – Wikipedia', url: 'https://en.wikipedia.org/wiki/Francisco_de_Orellana' },
    ],
    journeys: [
      {
        id: 'amazon-descent',
        title: 'First descent of the Amazon',
        yearStart: 1541,
        yearEnd: 1542,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Split from the Gonzalo Pizarro expedition searching for cinnamon in Ecuador, Orellana and dozens of men built a boat and floated the great river from the Andes to its Atlantic mouth, first Europeans to make the descent.',
        waypoints: [
          { id: 'wp1', name: 'Quito / Coca River, Ecuador', lat: -0.3, lng: -78.5, date: '1541-12', kind: 'port', note: 'Parted from Pizarro amid famine' },
          { id: 'wp2', name: 'Napo River', lat: -0.7, lng: -76.5, date: '1542-02', kind: 'discovery', note: 'Built a brigantine to continue' },
          { id: 'wp3', name: 'Mouth of the Rio Negro', lat: -3.1, lng: -59.9, date: '1542-06', kind: 'discovery', note: 'Joined the main Amazon; named the Rio Negro' },
          { id: 'wp4', name: 'Tupinambá / women warriors region', lat: -1.9, lng: -55.0, date: '1542-06', kind: 'landfall', note: 'Fought a tribe with famed women archers — the "Amazons"' },
          { id: 'wp5', name: 'Atlantic Ocean / Amazon mouth', lat: -0.7, lng: -50.1, date: '1542-08', kind: 'discovery', note: 'Reached the sea, completing the first descent' },
          { id: 'wp6', name: 'Cubagua / Trinidad', lat: 10.7, lng: -61.6, date: '1542-09', kind: 'port', note: 'Reached the Spanish outpost of Cubagua' },
        ],
      },
    ],
  };