import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'amundsen',
    name: 'Roald Amundsen',
    era: 'Heroic Age of Antarctic Exploration',
    years: '1872 – 1928',
    nationality: 'Norwegian',
    blurb:
      'Norwegian polar explorer who led the first expedition to reach the South Pole, was first to sail the Northwest Passage, and later first to fly across the Arctic; he died during a rescue flight for Nobile.',
    tags: ['antarctic', 'arctic', 'polar', 'sled'],
    sources: [
      { label: 'Roald Amundsen – Wikipedia', url: 'https://en.wikipedia.org/wiki/Roald_Amundsen' },
    ],
    journeys: [
      {
        id: 'northwest-passage',
        title: 'Northwest Passage by sea',
        yearStart: 1903,
        yearEnd: 1906,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Amundsen sailed the small ship Gjøa through the Northwest Passage, the first complete transit from Atlantic to Pacific, wintering at the future site of Cambridge Bay and studying the local Inuit during a two-year stay.',
        waypoints: [
          { id: 'wp1', name: 'Oslo (Kristiania), Norway', lat: 59.91, lng: 10.75, date: '1903-06-16', kind: 'port' },
          { id: 'wp2', name: 'Gjøahavn, King William Island', lat: 68.62, lng: -95.88, date: '1903-09-09', kind: 'port', note: 'Wintered for two winters, learning Inuit survival methods' },
          { id: 'wp3', name: 'Simpson Strait', lat: 68.5, lng: -97.0, date: '1905-08-13', kind: 'discovery', note: 'Managed the shallow, icy strait' },
          { id: 'wp4', name: 'Herschel Island', lat: 69.57, lng: -139.08, date: '1905-10', kind: 'port', note: 'Third winter; heard of Nansen\'s death falsely' },
          { id: 'wp5', name: 'Nome, Alaska (Pacific)', lat: 64.5, lng: -165.4, date: '1906-08-31', kind: 'port', note: 'First complete Northwest Passage crossing' },
        ],
      },
      {
        id: 'south-pole',
        title: 'South Pole first',
        yearStart: 1910,
        yearEnd: 1912,
        mode: 'sled',
        color: '#9c3b28',
        summary:
          'Secretly redirecting his Fram expedition south, Amundsen raced the exhausted British party of Scott, pioneering depots on the Ross Ice Shelf and using dogs to reach the South Pole on 14 December 1911.',
        waypoints: [
          { id: 'wp1', name: 'Framheim, Bay of Whales', lat: -78.63, lng: -163.65, date: '1911-01-14', kind: 'port', note: 'Base on the ice shelf, uniquely close to the pole' },
          { id: 'wp2', name: 'Depot at 80° S', lat: -80.0, lng: -163.0, date: '1911-02', kind: 'discovery' },
          { id: 'wp3', name: 'Axel Heiberg Glacier', lat: -84.9, lng: -165.0, date: '1911-12-08', kind: 'landfall', note: 'Dog teams hauled to the plateau' },
          { id: 'wp4', name: 'South Pole', lat: -90.0, lng: 0.0, date: '1911-12-14', kind: 'discovery', note: 'First to reach the South Pole; planted Norwegian flag' },
          { id: 'wp5', name: 'Framheim', lat: -78.63, lng: -163.65, date: '1912-01-25', kind: 'port', note: 'Returned quickly; all reached safety' },
        ],
      },
      {
        id: 'maud-and-arctic',
        title: 'Northeast Passage and Arctic flight',
        yearStart: 1918,
        yearEnd: 1926,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Amundsen voyaged the Northeast Passage along Siberia in the Maud, then flew from Spitsbergen across the North Pole to Alaska in the airship Norge with Nobile, the first verified crossing of the Arctic Ocean.',
        waypoints: [
          { id: 'wp1', name: 'Oslo, Norway', lat: 59.91, lng: 10.75, date: '1918-06', kind: 'port' },
          { id: 'wp2', name: 'Cape Chelyuskin, Siberia', lat: 77.7, lng: 104.3, date: '1919-09', kind: 'landfall', note: 'Wrecked briefly; winters on the Siberian coast' },
          { id: 'wp3', name: 'Nome, Alaska', lat: 64.5, lng: -165.4, date: '1922-08', kind: 'port', note: 'Completed the Northeast Passage, 1918–1922' },
          { id: 'wp4', name: 'Spitsbergen (Ny-Ålesund)', lat: 78.92, lng: 11.93, date: '1926-05', kind: 'port', note: 'Airship Norge was prepared here' },
          { id: 'wp5', name: 'North Pole', lat: 90.0, lng: 0.0, date: '1926-05-12', kind: 'discovery', note: 'Flew over the pole' },
          { id: 'wp6', name: 'Teller, Alaska', lat: 65.26, lng: -166.35, date: '1926-05-14', kind: 'landfall', note: 'First crossing of the Arctic in an airship; journey ends' },
        ],
      },
    ],
  };