import type { Explorer } from './types';

export const explorers: Explorer[] = [
  {
    id: 'magellan',
    name: 'Ferdinand Magellan',
    era: 'Age of Sail',
    years: 'c. 1480 – 1521',
    nationality: 'Portuguese (Spanish crown)',
    blurb:
      'Led the Spanish expedition that became the first to circumnavigate the globe, though he was killed in the Philippines before its completion; Juan Sebastián Elcano brought the surviving ship home.',
    tags: ['circumnavigation', 'age-of-sail'],
    sources: [
      { label: 'Magellan – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ferdinand_Magellan' },
    ],
    journeys: [
      {
        id: 'circumnavigation',
        title: 'First circumnavigation',
        yearStart: 1519,
        yearEnd: 1522,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Departed Spain seeking a western route to the Spice Islands, crossed the Atlantic, threaded the strait at South America\'s tip, crossed the vast Pacific, and reached the Philippines and Spice Islands before Elcano\'s ship completed the return to Spain.',
        waypoints: [
          { id: 'wp1', name: 'Sanlúcar de Barrameda, Spain', lat: 36.78, lng: -6.35, date: '1519-09-20', kind: 'port' },
          { id: 'wp2', name: 'Rio de Janeiro', lat: -22.9, lng: -43.2, date: '1519-12', kind: 'port' },
          { id: 'wp3', name: 'Strait of Magellan', lat: -52.6, lng: -70.0, date: '1520-10', kind: 'landfall' },
          { id: 'wp4', name: 'Guam', lat: 13.44, lng: 144.79, date: '1521-03', kind: 'landfall' },
          { id: 'wp5', name: 'Mactan, Philippines', lat: 10.31, lng: 123.98, date: '1521-04-27', kind: 'death', note: 'Magellan killed in battle' },
          { id: 'wp6', name: 'Moluccas (Spice Islands)', lat: -0.79, lng: 127.38, date: '1521-11', kind: 'port' },
          { id: 'wp7', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1522-05', kind: 'landfall' },
          { id: 'wp8', name: 'Sanlúcar de Barrameda, Spain', lat: 36.78, lng: -6.35, date: '1522-09-06', kind: 'port', note: 'Elcano completes the circumnavigation' },
        ],
      },
    ],
  },
  {
    id: 'zheng-he',
    name: 'Zheng He',
    era: 'Ming Treasure Voyages',
    years: '1371 – 1433',
    nationality: 'Chinese (Ming dynasty)',
    blurb:
      'Admiral who commanded seven immense treasure-fleet expeditions across the Indian Ocean, projecting Ming power and trade from China to Southeast Asia, India, Arabia, and East Africa.',
    tags: ['treasure-fleet', 'indian-ocean'],
    sources: [
      { label: 'Zheng He – Wikipedia', url: 'https://en.wikipedia.org/wiki/Zheng_He' },
    ],
    journeys: [
      {
        id: 'first-voyage',
        title: 'First treasure voyage',
        yearStart: 1405,
        yearEnd: 1407,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'The first of seven grand expeditions, sailing a massive fleet from Nanjing through Southeast Asia and across the Indian Ocean to Calicut on India\'s Malabar coast.',
        waypoints: [
          { id: 'wp1', name: 'Nanjing / Liujiagang', lat: 32.06, lng: 120.6, date: '1405-07', kind: 'port' },
          { id: 'wp2', name: 'Champa (Vietnam)', lat: 13.77, lng: 109.22, date: '1405', kind: 'port' },
          { id: 'wp3', name: 'Java', lat: -6.2, lng: 106.85, date: '1405', kind: 'port' },
          { id: 'wp4', name: 'Malacca', lat: 2.19, lng: 102.25, date: '1406', kind: 'port' },
          { id: 'wp5', name: 'Ceylon', lat: 7.29, lng: 80.63, date: '1406', kind: 'landfall' },
          { id: 'wp6', name: 'Calicut, India', lat: 11.25, lng: 75.78, date: '1407', kind: 'port', note: 'Fleet\'s westernmost destination' },
        ],
      },
    ],
  },
  {
    id: 'ibn-battuta',
    name: 'Ibn Battuta',
    era: 'Medieval Islamic Golden Age',
    years: '1304 – 1369',
    nationality: 'Moroccan',
    blurb:
      'Scholar from Tangier who spent nearly three decades wandering the Islamic world and beyond, from West Africa to China, recording his travels in the Rihla.',
    tags: ['silk-road', 'pilgrimage'],
    sources: [
      { label: 'Ibn Battuta – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ibn_Battuta' },
    ],
    journeys: [
      {
        id: 'grand-journey',
        title: 'The great Rihla',
        yearStart: 1325,
        yearEnd: 1354,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          'A decades-long wandering that began as a pilgrimage to Mecca and grew into a circuit of nearly the entire medieval Islamic world, reaching East Africa, Anatolia, Central Asia, India, and China.',
        waypoints: [
          { id: 'wp1', name: 'Tangier, Morocco', lat: 35.76, lng: -5.83, date: '1325', kind: 'port' },
          { id: 'wp2', name: 'Cairo, Egypt', lat: 30.04, lng: 31.24, date: '1326', kind: 'landfall' },
          { id: 'wp3', name: 'Mecca', lat: 21.42, lng: 39.83, date: '1326', kind: 'landfall' },
          { id: 'wp4', name: 'Baghdad', lat: 33.32, lng: 44.36, date: '1327', kind: 'landfall' },
          { id: 'wp5', name: 'Constantinople', lat: 41.01, lng: 28.98, date: '1332', kind: 'landfall' },
          { id: 'wp6', name: 'Delhi', lat: 28.65, lng: 77.23, date: '1334', kind: 'landfall' },
          { id: 'wp7', name: 'Quanzhou, China', lat: 24.87, lng: 118.68, date: '1345', kind: 'turnaround', note: 'Furthest point east' },
          { id: 'wp8', name: 'Timbuktu, Mali', lat: 16.77, lng: -3.01, date: '1352', kind: 'landfall' },
          { id: 'wp9', name: 'Fez, Morocco', lat: 34.03, lng: -5.0, date: '1354', kind: 'port', note: 'Journey ends; Rihla dictated' },
        ],
      },
    ],
  },
  {
    id: 'cook',
    name: 'James Cook',
    era: 'Age of Enlightenment',
    years: '1728 – 1779',
    nationality: 'British',
    blurb:
      'Royal Navy captain whose three Pacific voyages mapped New Zealand, Australia\'s east coast, and much of Oceania, reshaping European understanding of the Pacific world.',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'James Cook – Wikipedia', url: 'https://en.wikipedia.org/wiki/James_Cook' },
    ],
    journeys: [
      {
        id: 'first-voyage',
        title: 'First Pacific voyage',
        yearStart: 1768,
        yearEnd: 1771,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Commanding HMS Endeavour, Cook observed the transit of Venus at Tahiti, then charted New Zealand\'s coastline and became the first European to reach the east coast of Australia.',
        waypoints: [
          { id: 'wp1', name: 'Plymouth, England', lat: 50.37, lng: -4.14, date: '1768-08', kind: 'port' },
          { id: 'wp2', name: 'Rio de Janeiro', lat: -22.9, lng: -43.2, date: '1768-11', kind: 'port' },
          { id: 'wp3', name: 'Tahiti', lat: -17.65, lng: -149.43, date: '1769-04', kind: 'landfall', note: 'Transit of Venus observed' },
          { id: 'wp4', name: 'New Zealand', lat: -41.29, lng: 174.78, date: '1769-10', kind: 'discovery' },
          { id: 'wp5', name: 'Botany Bay, Australia', lat: -34.0, lng: 151.23, date: '1770-04-29', kind: 'discovery', note: 'First east-coast landfall' },
          { id: 'wp6', name: 'Batavia (Jakarta)', lat: -6.14, lng: 106.85, date: '1770-10', kind: 'port' },
          { id: 'wp7', name: 'Plymouth, England', lat: 50.37, lng: -4.14, date: '1771-07-12', kind: 'port' },
        ],
      },
    ],
  },
];

export function findExplorer(id: string): Explorer | undefined {
  return explorers.find((e) => e.id === id);
}
