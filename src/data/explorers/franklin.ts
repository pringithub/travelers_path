import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'franklin',
    name: 'John Franklin',
    era: 'Age of Exploration',
    years: '1786 – 1847',
    nationality: 'British',
    blurb:
      'Royal Navy officer who led two overland Arctic expeditions and a final fatal attempt to find the Northwest Passage by sea, which disappeared with all hands and sparked decades of search expeditions.',
    tags: ['arctic', 'polar', 'sled'],
    sources: [
      { label: 'John Franklin – Wikipedia', url: 'https://en.wikipedia.org/wiki/John_Franklin' },
    ],
    journeys: [
      {
        id: 'coppermine',
        title: 'Coppermine Expedition',
        yearStart: 1819,
        yearEnd: 1822,
        mode: 'foot',
        color: '#4a72a8',
        summary:
          'Franklin\'s first overland expedition navigated the Coppermine and mapped the arctic coastline eastward; badly provisioned, the party suffered starvation, murder and cannibalism, and nine men died.',
        waypoints: [
          { id: 'wp1', name: 'Fort York, Hudson Bay', lat: 57.0, lng: -92.3, date: '1819-09', kind: 'landfall' },
          { id: 'wp2', name: 'Fort Enterprise', lat: 64.5, lng: -113.0, date: '1820', kind: 'landfall', note: 'Winter base built by the expedition' },
          { id: 'wp3', name: 'Coppermine River', lat: 67.8, lng: -115.0, date: '1821-07', kind: 'discovery' },
          { id: 'wp4', name: 'Arctic coast (Coronation Gulf)', lat: 68.0, lng: -110.0, date: '1821-08', kind: 'discovery', note: 'Mapped over 500 km of coastline east' },
          { id: 'wp5', name: 'Return through the barrenlands', lat: 65.0, lng: -108.0, date: '1821-09', kind: 'death', note: 'Starvation set in; men murdered and eaten; Franklin barely survived' },
          { id: 'wp6', name: 'Fort Enterprise', lat: 64.5, lng: -113.0, date: '1821-10', kind: 'landfall', note: 'Rescued by a Dene hunting party' },
        ],
      },
      {
        id: 'northwest-passage',
        title: 'Fatal Northwest Passage voyage',
        yearStart: 1845,
        yearEnd: 1848,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Franklin commanded the Erebus and Terror on his final expedition to complete the Northwest Passage. Both ships became trapped in ice in Victoria Strait, and the entire crew of 129 died; the ships and their fate were only rediscovered in the 21st century.',
        waypoints: [
          { id: 'wp1', name: 'Greenhithe, England', lat: 51.45, lng: 0.28, date: '1845-05-19', kind: 'port' },
          { id: 'wp2', name: 'Whalefish Islands, Disko Bay, Greenland', lat: 69.7, lng: -52.0, date: '1845-07', kind: 'port', note: 'Last provisioning; sent letters home' },
          { id: 'wp3', name: 'Beechey Island', lat: 74.7, lng: -91.0, date: '1845-08', kind: 'landfall', note: 'Wintered here; three men died and were buried' },
          { id: 'wp4', name: 'Victoria Strait / King William Island', lat: 68.9, lng: -98.3, date: '1846-09', kind: 'death', note: 'Trapped in pack ice; Franklin died on 11 June 1847' },
          { id: 'wp5', name: 'Crew abandon ships', lat: 68.5, lng: -99.0, date: '1848-04', kind: 'death', note: 'Survivors hauled boats south, all perishing; the Erebus was found near O\'Reilly Island and the Terror in Terror Bay' },
        ],
      },
    ],
  };