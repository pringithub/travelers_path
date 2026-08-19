import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'la-salle',
    name: 'René-Robert Cavelier',
    era: 'Age of Enlightenment',
    years: '1643 – 1687',
    nationality: 'French',
    blurb:
      'French explorer, sieur de La Salle, who descended the Mississippi River to its mouth, claiming the entire basin for France as Louisiana, then died on an ill-fated Texas colony attempt.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'René-Robert Cavelier, Sieur de La Salle – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ren%C3%A9-Robert_Cavelier,_Sieur_de_La_Salle' },
    ],
    journeys: [
      {
        id: 'mississippi',
        title: 'Descent of the Mississippi to the Gulf',
        yearStart: 1682,
        yearEnd: 1682,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'From a new post on the Illinois River, La Salle and his men canoed and walked the length of the Mississippi to its mouth, where he claimed the whole watershed for King Louis XIV and named it Louisiana.',
        waypoints: [
          { id: 'wp1', name: 'Fort Crevecoeur, Illinois', lat: 40.7, lng: -89.6, date: '1680', kind: 'port', note: 'Base on the Illinois River' },
          { id: 'wp2', name: 'Fort St. Louis (Starved Rock)', lat: 41.32, lng: -88.99, date: '1682-02', kind: 'port', note: 'Launch point for the descent' },
          { id: 'wp3', name: 'Mississippi River', lat: 38.6, lng: -90.2, date: '1682-03', kind: 'discovery', note: 'Entered the great river' },
          { id: 'wp4', name: 'Mouth of the Mississippi / Gulf of Mexico', lat: 29.15, lng: -89.25, date: '1682-04-09', kind: 'discovery', note: 'Claimed the river basin for France as Louisiana' },
          { id: 'wp5', name: 'Fort St. Louis (return)', lat: 41.32, lng: -88.99, date: '1682-04', kind: 'port', note: 'Returned upriver' },
        ],
      },
      {
        id: 'texas',
        title: 'Fateful Texas colony',
        yearStart: 1684,
        yearEnd: 1687,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Seeking the Mississippi\'s mouth by sea, La Salle\'s last expedition landed at Matagorda Bay, Texas, far from its target. The colony collapsed; an mutineer killed La Salle as he tried to walk to Canada for help.',
        waypoints: [
          { id: 'wp1', name: 'La Rochelle, France', lat: 46.16, lng: -1.15, date: '1684-07', kind: 'port' },
          { id: 'wp2', name: 'Matagorda Bay, Texas', lat: 28.65, lng: -96.4, date: '1685-02', kind: 'landfall', note: 'Mistaken landing; wiped out' },
          { id: 'wp3', name: 'Fort St. Louis on the Colorado', lat: 29.0, lng: -96.0, date: '1685-03', kind: 'landfall', note: 'Colony founded, but quickly starved and raided' },
          { id: 'wp4', name: 'East Texas (trying to walk to Canada)', lat: 31.0, lng: -95.0, date: '1687-03-19', kind: 'death', note: 'Killed by mutineers near the Brazos River' },
        ],
      },
    ],
  };