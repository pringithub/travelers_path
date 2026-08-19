import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'nansen',
    name: 'Fridtjof Nansen',
    era: 'Heroic Age of Polar Exploration',
    years: '1861 – 1930',
    nationality: 'Norwegian',
    blurb:
      'Polar explorer, scientist and humanitarian who made the first crossing of Greenland, then attempted to reach the North Pole by drifting in sea ice aboard the Fram, setting a record latitude and nearly perishing before a remarkable return.',
    tags: ['arctic', 'polar', 'sled'],
    sources: [
      { label: 'Fridtjof Nansen – Wikipedia', url: 'https://en.wikipedia.org/wiki/Fridtjof_Nansen' },
    ],
    journeys: [
      {
        id: 'greenland',
        title: 'First crossing of Greenland',
        yearStart: 1888,
        yearEnd: 1888,
        mode: 'foot',
        color: '#8fa8c8',
        summary:
          'With five companions, Nansen skied across the Greenland ice cap from the uninhabited east coast to the western settlements, completing the first crossing of the great ice sheet.',
        waypoints: [
          { id: 'wp1', name: 'Unartok, west Greenland', lat: 66.9, lng: -53.6, date: '1888-07', kind: 'landfall' },
          { id: 'wp2', name: 'East coast near Angmagssalik', lat: 65.6, lng: -37.6, date: '1888-07-29', kind: 'landfall', note: 'Landed from a drifting ice floe' },
          { id: 'wp3', name: 'Summit of the ice cap', lat: 66.0, lng: -40.0, date: '1888-09-11', kind: 'discovery', note: 'Highest point, ~2,700 m, in a storm' },
          { id: 'wp4', name: 'Godthaab (Nuuk), west Greenland', lat: 64.18, lng: -51.72, date: '1888-10-02', kind: 'port', note: 'Reached the Danish settlement; first crossing complete' },
        ],
      },
      {
        id: 'fram-drift',
        title: 'Fram drift toward the North Pole',
        yearStart: 1893,
        yearEnd: 1896,
        mode: 'ship',
        color: '#3f556e',
        summary:
          'Nansen deliberately froze his ship Fram into the pack ice to drift poleward across the Arctic, then left the drifting ship by dogsled to push toward the pole, reaching a record furthest north before escaping to Franz Josef Land and back.',
        waypoints: [
          { id: 'wp1', name: 'Norway', lat: 59.9, lng: 10.75, date: '1893-06', kind: 'port' },
          { id: 'wp2', name: 'Cape Chelyuskin, Siberia', lat: 77.7, lng: 104.3, date: '1893-09', kind: 'landfall', note: 'Turned north into the pack ice' },
          { id: 'wp3', name: 'Frozen into the pack, began drift', lat: 78.5, lng: 133.0, date: '1893-09-25', kind: 'turnaround', note: 'Dog the drift began' },
          { id: 'wp4', name: 'Farthest drift point of the ship', lat: 83.9, lng: 102.0, date: '1895-03', kind: 'turnaround' },
          { id: 'wp5', name: 'Furthest north on the ice', lat: 86.14, lng: 95.0, date: '1895-04-08', kind: 'discovery', note: 'Record latitude 86°14\' N, still short of the pole' },
          { id: 'wp6', name: 'Franz Josef Land', lat: 81.0, lng: 55.0, date: '1895-08', kind: 'landfall', note: 'Escape from the ice to the archipelago' },
          { id: 'wp7', name: 'Cape Flora, Franz Josef Land', lat: 79.95, lng: 50.2, date: '1896-06', kind: 'port', note: 'Met the Jackson-Harmsworth expedition' },
          { id: 'wp8', name: 'Vardø, Norway', lat: 70.37, lng: 31.11, date: '1896-08-13', kind: 'port', note: 'Returned to Norway; Fram also arrived safely' },
        ],
      },
    ],
  };