import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'kelsey',
    name: 'Henry Kelsey',
    era: 'Age of Discovery',
    years: 'c. 1667 – 1724',
    nationality: 'English',
    blurb:
      'English fur trader and explorer of the Hudson\u2019s Bay Company, credited as the first recorded European to see the Saskatchewan grasslands and the great plains, where in 1690 he became the first white man to describe the buffalo.',
    tags: ['north-america', 'overland', 'plains'],
    sources: [
      { label: 'Henry Kelsey – Wikipedia', url: 'https://en.wikipedia.org/wiki/Henry_Kelsey' },
    ],
    journeys: [
      {
        id: 'plains-of-saskatchewan',
        title: 'Journey to the Saskatchewan plains',
        yearStart: 1690,
        yearEnd: 1692,
        mode: 'foot',
        color: '#9a8a4f',
        summary:
          'Sent inland from York Factory to encourage the Assiniboine to bring furs to the bay, Kelsey travelled by canoe and foot far up the Saskatchewan, becoming the first European to see the wandering plains and the buffalo there.',
        waypoints: [
          { id: 'wp1', name: 'York Factory, Hudson Bay', lat: 57.0, lng: -92.3, date: '1690-06', kind: 'port', note: 'Departure with the Assiniboine trading party' },
          { id: 'wp2', name: 'Deer River (deer of the plains country)', lat: 52.7, lng: -102.0, date: '1690-08', kind: 'discovery', note: 'Saw herds of deer on the grasslands' },
          { id: 'wp3', name: 'Saskatchewan River', lat: 53.15, lng: -105.5, date: '1690-09', kind: 'discovery', note: 'Reached and travelled up the great Saskatchewan' },
          { id: 'wp4', name: 'Muscow, buffalo plains', lat: 51.5, lng: -106.0, date: '1690-10', kind: 'discovery', note: 'First recorded European sighting of the plains buffalo' },
          { id: 'wp5', name: 'Winters among the plains tribes', lat: 51.2, lng: -106.5, date: '1690-12', kind: 'landfall', note: 'Spent the winter roving with the native bands' },
          { id: 'wp6', name: 'York Factory, Hudson Bay', lat: 57.0, lng: -92.3, date: '1692-06', kind: 'port', note: 'Returned overland and by canoe with a valuable map and journal' },
        ],
      },
      {
        id: 'lower-bay-postings',
        title: 'Service at the lower Hudson\u2019s Bay posts',
        yearStart: 1684,
        yearEnd: 1690,
        mode: 'foot',
        color: '#b0a265',
        summary:
          'Early in his career Kelsey served on the ships and at posts along the lower Hudson\u2019s Bay, learning the Cree and travelling overland on trading expeditions before his great inland push.',
        waypoints: [
          { id: 'wp1', name: 'Ballygarrett, England', lat: 52.55, lng: -6.25, date: '1684', kind: 'port', note: 'Likely birthplace and departure point for the bay' },
          { id: 'wp2', name: 'Fort Albany, Hudson Bay', lat: 52.25, lng: -81.5, date: '1684', kind: 'landfall', note: 'Served as a young apprentice at the post' },
          { id: 'wp3', name: 'Farther west trading ground', lat: 55.0, lng: -96.0, date: '1688', kind: 'landfall', note: 'Wandered inland with the natives on early missions' },
          { id: 'wp4', name: 'Fort Saskatchewan / York Factory', lat: 57.0, lng: -92.3, date: '1690', kind: 'port', note: 'Departure point for the plains expedition' },
        ],
      },
    ],
  };