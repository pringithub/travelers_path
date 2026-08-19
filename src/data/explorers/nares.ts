import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'nares',
    name: 'George Nares',
    era: 'Age of Steam',
    years: '1831 – 1915',
    nationality: 'British',
    blurb:
      'British naval officer and Arctic explorer who commanded HMS Challenger on its pioneering oceanographic voyage and led the British Arctic Expedition of 1875 \u2013 1876, carrying his ships farther north than anyone before \u2014 to about 83\u00b020\u2032N.',
    tags: ['arctic', 'age-of-steam', 'oceanography'],
    sources: [
      { label: 'George Nares – Wikipedia', url: 'https://en.wikipedia.org/wiki/George_Nares' },
      { label: 'British Arctic Expedition – Wikipedia', url: 'https://en.wikipedia.org/wiki/British_Arctic_Expedition' },
    ],
    journeys: [
      {
        id: 'challenger-voyage',
        title: 'The HMS Challenger expedition',
        yearStart: 1872,
        yearEnd: 1876,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'As captain of HMS Challenger, Nares ran the first broad oceanographic survey of the great oceans, sounding and dredging the sea floor and laying the foundations of modern marine science.',
        waypoints: [
          { id: 'wp1', name: 'Sheerness, England', lat: 51.44, lng: 0.76, date: '1872-12-21', kind: 'port', note: 'Challenger set sail from the naval dockyard' },
          { id: 'wp2', name: 'Lisbon, Portugal', lat: 38.72, lng: -9.14, date: '1873-01', kind: 'landfall', note: 'First of the Atlantic traverse legs' },
          { id: 'wp3', name: 'Madeira', lat: 32.67, lng: -16.9, date: '1873-01', kind: 'landfall', note: 'Deep-sea trawls begun in earnest' },
          { id: 'wp4', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1873-10', kind: 'landfall', note: 'Rounded the Cape into the Indian Ocean' },
          { id: 'wp5', name: 'Tahiti', lat: -17.55, lng: -149.57, date: '1873-09', kind: 'landfall', note: 'Entered the Pacific to begin the deep-sea traverses' },
          { id: 'wp6', name: 'Mariana Trench (Challenger Deep)', lat: 11.5, lng: 142.2, date: '1875-03-23', kind: 'discovery', note: 'Sounded a depth of over 8,000 m, remarkable for the time' },
          { id: 'wp7', name: 'Spithead, England', lat: 50.79, lng: -1.11, date: '1876-05-24', kind: 'port', note: 'Return of the expedition after the homeward leg' },
        ],
      },
      {
        id: 'british-arctic-expedition',
        title: 'British Arctic Expedition to the farthest north',
        yearStart: 1875,
        yearEnd: 1876,
        mode: 'ship',
        color: '#5f7fbf',
        summary:
          'Commanding HMS Alert and Discovery, Nares forced the two ships through Smith Sound to the northern coast of Ellesmere Island, and sledging parties pushed over the pack to about 83\u00b020\u2032N \u2014 the highest latitude reached by that time.',
        waypoints: [
          { id: 'wp1', name: 'Portsmouth, England', lat: 50.8, lng: -1.09, date: '1875-05-29', kind: 'port', note: 'Departure of the Alert and Discovery' },
          { id: 'wp2', name: 'Cape Hatherton, Ellesmere Island', lat: 82.0, lng: -79.0, date: '1875-08', kind: 'landfall', note: 'Alert overwintered farther north than any vessel before' },
          { id: 'wp3', name: 'Farthest north by sled (83\u00b020\u2032N)', lat: 83.33, lng: -60.0, date: '1876-05', kind: 'turnaround', note: 'Sledging party forced back by deep snow and scurvy' },
          { id: 'wp4', name: 'Cape Joseph Henry, narrowest point', lat: 82.1, lng: -76.5, date: '1876-05', kind: 'turnaround', note: 'Turned back after exhausting the sledging endurance' },
          { id: 'wp5', name: 'Plymouth, England', lat: 50.38, lng: -4.14, date: '1876-11-02', kind: 'port', note: 'Ships broke free of the ice and returned safely' },
        ],
      },
    ],
  };