import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'foxe',
    name: 'Luke Foxe',
    era: 'Age of Sail',
    years: '1586 – 1635',
    nationality: 'English',
    blurb:
      'English navigator who in 1631 sailed into Hudson Bay searching for the fabled Northwest Passage, charting its northern shores and giving his name to Foxe Channel and Foxe Basin before concluding no western sea passage existed.',
    tags: ['arctic', 'northwest-passage', 'age-of-sail', 'ship'],
    sources: [
      { label: 'Luke Foxe – Wikipedia', url: 'https://en.wikipedia.org/wiki/Luke_Foxe' },
    ],
    journeys: [
      {
        id: 'hudson-bay',
        title: 'Voyage to Hudson Bay for the Northwest Passage',
        yearStart: 1631,
        yearEnd: 1631,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Sailing the Charles from Deptford, Foxe pushed through Hudson Strait into the bay, probed the western and then the northern coast, and skirting the islands of his namesake basin, returned without finding a passage west.',
        waypoints: [
          { id: 'wp1', name: 'Deptford, England', lat: 51.48, lng: -0.02, date: '1631-04-28', kind: 'port' },
          { id: 'wp2', name: 'Resolution Island, Hudson Strait', lat: 61.6, lng: -64.8, date: '1631-06-24', kind: 'landfall', note: 'Entered Hudson Strait' },
          { id: 'wp3', name: 'Hudson Bay, western shore', lat: 59.5, lng: -89.0, date: '1631-08', kind: 'landfall', note: 'Probed the western coast for an outlet' },
          { id: 'wp4', name: 'Foxe Channel', lat: 63.9, lng: -80.7, date: '1631-08-22', kind: 'discovery', note: 'Charted the channel between the bay and the ocean' },
          { id: 'wp5', name: 'Farthest north in Foxe Basin', lat: 66.5, lng: -78.0, date: '1631-09-01', kind: 'turnaround', note: 'Turned back at the northern ice of the basin' },
          { id: 'wp6', name: 'Also visited Southampton Island', lat: 64.5, lng: -84.0, date: '1631-08', kind: 'landfall' },
          { id: 'wp7', name: 'Deptford, England', lat: 51.48, lng: -0.02, date: '1631-10-31', kind: 'port', note: 'Returned; reported no passage existed' },
        ],
      },
    ],
  };