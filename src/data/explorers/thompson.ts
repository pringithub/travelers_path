import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'thompson',
    name: 'David Thompson',
    era: 'Age of Enlightenment',
    years: '1770 – 1857',
    nationality: 'British (Welsh)',
    blurb:
      'Surveyor and fur trader who mapped a vast portion of western North America, descended the full length of the Columbia River, and produced some of the first detailed maps of the Canadian Rockies.',
    tags: ['north-america', 'river', 'mapping'],
    sources: [
      { label: 'David Thompson (explorer) – Wikipedia', url: 'https://en.wikipedia.org/wiki/David_Thompson_(explorer)' },
    ],
    journeys: [
      {
        id: 'columbia',
        title: 'Descent of the Columbia River',
        yearStart: 1811,
        yearEnd: 1811,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Working for the North West Company, Thompson descended the entire Columbia River to its mouth at the Pacific, the first person to navigate the full course from its source to the sea.',
        waypoints: [
          { id: 'wp1', name: 'Fort Astoria base / Columbia headwaters', lat: 50.6, lng: -115.0, date: '1811', kind: 'port', note: 'Established a post at the river start' },
          { id: 'wp2', name: 'Kettle Falls, Columbia River', lat: 48.6, lng: -118.0, date: '1811', kind: 'landfall' },
          { id: 'wp3', name: 'Celilo Falls', lat: 45.6, lng: -120.9, date: '1811-07', kind: 'landfall', note: 'Rapids negotiated further downstream' },
          { id: 'wp4', name: 'Columbia gorge', lat: 45.6, lng: -121.9, date: '1811-07', kind: 'landfall' },
          { id: 'wp5', name: 'Fort Astoria, Pacific coast', lat: 46.19, lng: -123.83, date: '1811-07-15', kind: 'port', note: 'Reached the Pacific at the mouth of the Columbia' },
          { id: 'wp6', name: 'Return overland crossing west-east', lat: 50.6, lng: -115.0, date: '1811-08', kind: 'port', note: 'Back to his trading base' },
        ],
      },
    ],
  };