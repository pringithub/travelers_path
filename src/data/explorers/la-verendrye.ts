import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'la-verendrye',
    name: 'Pierre Gaultier de Varennes',
    era: 'Age of Enlightenment',
    years: '1685 – 1749',
    nationality: 'French-Canadian',
    blurb:
      'Canadian fur trader and explorer, sieur de La Vérendrye, who led expeditions west of the Great Lakes toward the Rockies, opening the prairies to French trade and pushing toward the mythical western sea.',
    tags: ['north-america', 'river'],
    sources: [
      { label: 'Pierre Gaultier de Varennes – Wikipedia', url: 'https://en.wikipedia.org/wiki/Pierre_Gaultier_de_Varennes,_sieur_de_La_V%C3%A9rendrye' },
    ],
    journeys: [
      {
        id: 'western-lakes',
        title: 'Voyages toward the western sea',
        yearStart: 1731,
        yearEnd: 1743,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'From the French posts on Lake Superior, La Vérendrye and his sons established trading forts across Lake of the Woods and the Saskatchewan, and pushed overland as far as the foothills near modern Wyoming on the way to the Rockies.',
        waypoints: [
          { id: 'wp1', name: 'Montreal, Canada', lat: 45.5, lng: -73.56, date: '1731-04', kind: 'port' },
          { id: 'wp2', name: 'Fort Kaministiquia (Thunder Bay)', lat: 48.38, lng: -89.25, date: '1731', kind: 'port', note: 'Fur-trade post on Lake Superior' },
          { id: 'wp3', name: 'Fort St. Pierre (Rainy Lake)', lat: 48.6, lng: -93.3, date: '1731-08', kind: 'port' },
          { id: 'wp4', name: 'Fort St. Charles (Lake of the Woods)', lat: 49.0, lng: -94.0, date: '1732', kind: 'port' },
          { id: 'wp5', name: 'Fort la Reine (Portage la Prairie)', lat: 49.97, lng: -98.29, date: '1738', kind: 'port', note: 'Base for the prairies' },
          { id: 'wp6', name: 'Missouri River (Mandans)', lat: 47.0, lng: -101.0, date: '1738-11', kind: 'landfall', note: 'Descended to the Mandan villages' },
          { id: 'wp7', name: 'Saskatchewan River', lat: 51.0, lng: -105.0, date: '1742', kind: 'landfall', note: 'Probed toward the mountains' },
          { id: 'wp8', name: 'Fort la Reine (return)', lat: 49.97, lng: -98.29, date: '1743', kind: 'port', note: 'Returned; his sons reached near the Rockies' },
        ],
      },
    ],
  };