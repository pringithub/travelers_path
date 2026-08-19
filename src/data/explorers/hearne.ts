import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'hearne',
    name: 'Samuel Hearne',
    era: 'Age of Enlightenment',
    years: '1745 – 1792',
    nationality: 'British',
    blurb:
      'English explorer, fur trader and naturalist who made the first European overland crossing to the Arctic at the Coppermine River and monumentally surveyed the northern interior of Canada for the Hudson\'s Bay Company.',
    tags: ['north-america', 'arctic', 'river'],
    sources: [
      { label: 'Samuel Hearne – Wikipedia', url: 'https://en.wikipedia.org/wiki/Samuel_Hearne' },
    ],
    journeys: [
      {
        id: 'coppermine',
        title: 'Overland journey to the Coppermine',
        yearStart: 1770,
        yearEnd: 1772,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Sent by the Hudson\'s Bay Company to find the legendary Coppermine mine, Hearne, accompanied by the Chipewyan guide Matonabbee, trekked from Fort Prince of Wales across the barren lands to the Arctic Ocean at an outlet of the river, proving the region\'s geography.',
        waypoints: [
          { id: 'wp1', name: 'Prince of Wales\'s Fort, Hudson Bay', lat: 58.8, lng: -94.2, date: '1769-11-06', kind: 'port' },
          { id: 'wp2', name: 'Lake Athabasca / Churchill River', lat: 59.0, lng: -110.0, date: '1770', kind: 'landfall', note: 'Long overland trek with Chipewyan guides' },
          { id: 'wp3', name: 'Coppermine River', lat: 67.5, lng: -115.5, date: '1771-07-13', kind: 'discovery', note: 'Reached the river and followed it north' },
          { id: 'wp4', name: 'Arctic Ocean (Coronation Gulf)', lat: 68.0, lng: -115.0, date: '1771-07', kind: 'discovery', note: 'First European to reach the Arctic by land in Canada' },
          { id: 'wp5', name: 'Prince of Wales\'s Fort', lat: 58.8, lng: -94.2, date: '1772-06', kind: 'port', note: 'Returned after a remarkable survival trek' },
        ],
      },
    ],
  };