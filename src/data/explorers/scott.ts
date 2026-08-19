import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'scott',
    name: 'Robert Falcon Scott',
    era: 'Heroic Age of Antarctic Exploration',
    years: '1868 – 1912',
    nationality: 'British',
    blurb:
      'Royal Navy officer who led two Antarctic expeditions; on the second he reached the South Pole only to find Roald Amundsen had beaten him, and perished with his party on the return journey.',
    tags: ['antarctic', 'polar', 'sled'],
    sources: [
      { label: 'Robert Falcon Scott – Wikipedia', url: 'https://en.wikipedia.org/wiki/Robert_Falcon_Scott' },
    ],
    journeys: [
      {
        id: 'discovery-expedition',
        title: 'Discovery Expedition',
        yearStart: 1901,
        yearEnd: 1904,
        mode: 'sled',
        color: '#3f556e',
        summary:
          'Scott\'s first Antarctic expedition wintered on the Ross Ice Shelf, made a southern march toward the pole with Shackleton and Wilson, and carried out extensive scientific work on the continent.',
        waypoints: [
          { id: 'wp1', name: 'Cowes, England', lat: 50.76, lng: -1.3, date: '1901-08-05', kind: 'port' },
          { id: 'wp2', name: 'McMurdo Sound, Antarctica', lat: -77.85, lng: 166.68, date: '1902-02-08', kind: 'port', note: 'Established winter quarters, later called Hut Point' },
          { id: 'wp3', name: 'Ross Ice Shelf', lat: -78.0, lng: 167.0, date: '1902-11', kind: 'landfall' },
          { id: 'wp4', name: 'Furthest south on the ice shelf', lat: -82.29, lng: 162.0, date: '1902-12-30', kind: 'turnaround', note: 'Reached 82°17\' S, farthest south at the time' },
          { id: 'wp5', name: 'Hut Point, McMurdo Sound', lat: -77.85, lng: 166.68, date: '1903-02-03', kind: 'port', note: 'Expedition rescued stranded relief ship party that winter' },
          { id: 'wp6', name: 'England', lat: 51.5, lng: -0.13, date: '1904-09-10', kind: 'port', note: 'Journey ends' },
        ],
      },
      {
        id: 'terra-nova',
        title: 'Terra Nova Expedition and the South Pole',
        yearStart: 1910,
        yearEnd: 1913,
        mode: 'sled',
        color: '#9c3b28',
        summary:
          'Scott\'s attempt to be first to the South Pole. After establishing a base on Ross Island, the polar party trudged to the pole via the Beardmore Glacier, found Amundsen had arrived first, and froze to death in a blizzard on the return.',
        waypoints: [
          { id: 'wp1', name: 'Cardiff, Wales', lat: 51.48, lng: -3.18, date: '1910-06-15', kind: 'port' },
          { id: 'wp2', name: 'Cape Evans, Ross Island', lat: -77.64, lng: 166.41, date: '1911-01-04', kind: 'port', note: 'Main base established' },
          { id: 'wp3', name: 'Depot at One Ton', lat: -79.85, lng: 170.0, date: '1911-02-04', kind: 'discovery' },
          { id: 'wp4', name: 'Beardmore Glacier', lat: -84.0, lng: 172.0, date: '1911-12-10', kind: 'landfall', note: 'Started the ascent from the ice shelf' },
          { id: 'wp5', name: 'South Pole', lat: -90.0, lng: 0.0, date: '1912-01-17', kind: 'discovery', note: 'Found Amundsen had been there on 14 December 1911' },
          { id: 'wp6', name: 'Return across the Ross Ice Shelf', lat: -84.0, lng: 172.0, date: '1912-02-17', kind: 'turnaround', note: 'Petty Officer Evans died at the glacier foot' },
          { id: 'wp7', name: 'Last camp, ~11 miles from One Ton', lat: -79.6, lng: 170.0, date: '1912-03-29', kind: 'death', note: 'Scott, Wilson, Bowers and Oates died in their tent; Oates had walked out to die in a blizzard' },
        ],
      },
    ],
  };