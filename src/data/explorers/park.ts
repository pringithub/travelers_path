import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'mungo-park',
    name: 'Mungo Park',
    era: 'Age of Enlightenment',
    years: '1771 – 1806',
    nationality: 'British (Scottish)',
    blurb:
      'Scottish surgeon and explorer who made two celebrated journeys to trace the course of the Niger River in West Africa, the second of which ended in his death at the river he sought.',
    tags: ['africa', 'river', 'exploration'],
    sources: [
      { label: 'Mungo Park (explorer) – Wikipedia', url: 'https://en.wikipedia.org/wiki/Mungo_Park_(explorer)' },
    ],
    journeys: [
      {
        id: 'first-niger',
        title: 'First exploration of the Niger',
        yearStart: 1795,
        yearEnd: 1797,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Traveling almost entirely alone from the Gambia, Park crossed the Mandinka lands, survived capture and illness, and reached the Niger at Ségou, then followed and descended the river as far as Silla before returning to the coast.',
        waypoints: [
          { id: 'wp1', name: 'Pisania, Gambia', lat: 13.5, lng: -15.0, date: '1795-06-21', kind: 'port' },
          { id: 'wp2', name: 'Medina (interior, Senegal)', lat: 14.4, lng: -15.0, date: '1795', kind: 'landfall', note: 'Traveled overland through Bambarra' },
          { id: 'wp3', name: 'Ségou, Niger River', lat: 13.43, lng: -6.25, date: '1796-07-20', kind: 'discovery', note: 'First European to see the middle Niger' },
          { id: 'wp4', name: 'Silla, Niger', lat: 14.2, lng: -5.9, date: '1796-07', kind: 'turnaround', note: 'Furthest east before turning back' },
          { id: 'wp5', name: 'Kamalia', lat: 11.5, lng: -9.0, date: '1797-02', kind: 'landfall', note: 'Sheltered by a community while ill' },
          { id: 'wp6', name: 'Pisania / Gambia coast', lat: 13.5, lng: -15.0, date: '1797-06', kind: 'port', note: 'Returned to the sea, having survived a great ordeal' },
        ],
      },
      {
        id: 'second-niger',
        title: 'Second, fatal Niger expedition',
        yearStart: 1805,
        yearEnd: 1806,
        mode: 'foot',
        color: '#9c3b28',
        summary:
          'Park\'s larger, well-supplied expedition from the Gambia to descend the Niger to its mouth lost most of its men to fever and hostile peoples; Park and his remaining companions drowned in rapids the river\'s mid-course.',
        waypoints: [
          { id: 'wp1', name: 'Pisania, Gambia', lat: 13.5, lng: -15.0, date: '1805-04', kind: 'port' },
          { id: 'wp2', name: 'Bamako / Ségou, Niger', lat: 13.43, lng: -6.25, date: '1805-08', kind: 'landfall', note: 'Reached the river again with heavy loss of men' },
          { id: 'wp3', name: 'Timbuktu region (approached, not entered)', lat: 16.2, lng: -3.5, date: '1805', kind: 'landfall', note: 'Passed toward the river bend' },
          { id: 'wp4', name: 'Bussa Rapids, Niger', lat: 10.2, lng: 4.5, date: '1806-01', kind: 'death', note: 'Attacked and drowned in the rapids at Bussa' },
        ],
      },
    ],
  };