import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'von-toll',
    name: 'Eduard von Toll',
    era: 'Imperial era of Arctic exploration',
    years: '1858 – 1902',
    nationality: 'Baltic German in Russian service',
    blurb:
      'Russian geologist and Arctic explorer who led expeditions to the New Siberian Islands and searched for the elusive Sannikov Land, disappearing with his companions on the Russian Polar Expedition of 1900–1903.',
    tags: ['arctic', 'marine'],
    sources: [
      { label: 'Eduard von Toll – Wikipedia', url: 'https://en.wikipedia.org/wiki/Eduard_von_Toll' },
    ],
    journeys: [
      {
        id: 'new-siberian-islands',
        title: 'Expeditions to the New Siberian Islands',
        yearStart: 1894,
        yearEnd: 1895,
        mode: 'sled',
        color: '#5a7a9e',
        summary:
          'Travelling by ship and sledge across the Lena delta and the New Siberian Islands, Toll mapped the little-known archipelago and gathered geological and palaeontological specimens, including the carcass of a woolly mammoth.',
        waypoints: [
          { id: 'wp1', name: 'Yakutsk, Siberia', lat: 62.03, lng: 129.73, date: '1894-04', kind: 'port', note: 'Overland departure' },
          { id: 'wp2', name: 'Ust-Yansky coast of the Arctic Ocean', lat: 71.75, lng: 138.0, date: '1894', kind: 'port', note: 'Reaching the northern coast' },
          { id: 'wp3', name: 'New Siberian Islands', lat: 75.0, lng: 142.0, date: '1894', kind: 'discovery', note: 'Surveying the archipelago by sledge' },
          { id: 'wp4', name: 'Bennett Island', lat: 76.7, lng: 149.3, date: '1895', kind: 'turnaround', note: 'Searching for traces of Sannikov Land' },
        ],
      },
      {
        id: 'russian-polar-expedition',
        title: 'Russian Polar Expedition (search for Sannikov Land)',
        yearStart: 1900,
        yearEnd: 1902,
        mode: 'ship',
        color: '#8a5a5a',
        summary:
          'Commanding the schooner Zarya, Toll set sail to settle the fate of Sannikov Land north of the New Siberian Islands. Moored for two winters in the ice, he finally struck inland on a fatal sledge journey from which he never returned.',
        waypoints: [
          { id: 'wp1', name: 'Saint Petersburg, Russia', lat: 59.93, lng: 30.34, date: '1900-06', kind: 'port' },
          { id: 'wp2', name: 'Zarya moored off the Taymyr Peninsula', lat: 76.5, lng: 95.0, date: '1900', kind: 'landfall', note: 'First wintering locked in the ice' },
          { id: 'wp3', name: 'New Siberian Islands', lat: 75.0, lng: 142.0, date: '1901', kind: 'landfall', note: 'Second wintering while hunting Sannikov Land' },
          { id: 'wp4', name: 'Bennett Island', lat: 76.7, lng: 149.3, date: '1902-07', kind: 'turnaround', note: 'Landing for the fatal trek back to the floe' },
          { id: 'wp5', name: 'Last traces on Bennett Island', lat: 76.7, lng: 149.3, date: '1902-11', kind: 'death', note: 'Toll and his men lost crossing the ice toward Zarya' },
        ],
      },
    ],
  };