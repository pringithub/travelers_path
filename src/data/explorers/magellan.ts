import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'magellan',
    name: 'Ferdinand Magellan',
    era: 'Age of Sail',
    years: 'c. 1480 – 1521',
    nationality: 'Portuguese (Spanish crown)',
    blurb:
      'Led the Spanish expedition that became the first to circumnavigate the globe, though he was killed in the Philippines before its completion; Juan Sebastián Elcano brought the surviving ship home.',
    tags: ['circumnavigation', 'age-of-sail'],
    sources: [
      { label: 'Magellan – Wikipedia', url: 'https://en.wikipedia.org/wiki/Ferdinand_Magellan' },
    ],
    journeys: [
      {
        id: 'circumnavigation',
        title: 'First circumnavigation',
        yearStart: 1519,
        yearEnd: 1522,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Departed Spain seeking a western route to the Spice Islands, crossed the Atlantic, threaded the strait at South America\'s tip, crossed the vast Pacific, and reached the Philippines and Spice Islands before Elcano\'s ship completed the return to Spain.',
        waypoints: [
          { id: 'wp1', name: 'Sanlúcar de Barrameda, Spain', lat: 36.78, lng: -6.35, date: '1519-09-20', kind: 'port' },
          { id: 'wp2', name: 'Tenerife, Canary Islands', lat: 28.47, lng: -16.25, date: '1519-09-26', kind: 'port' },
          { id: 'wp3', name: 'Cape Saint Augustine, Brazil', lat: -8.34, lng: -34.98, date: '1519-11-29', kind: 'landfall' },
          { id: 'wp4', name: 'Rio de Janeiro', lat: -22.9, lng: -43.2, date: '1519-12-13', kind: 'port' },
          { id: 'wp5', name: 'Río de la Plata', lat: -34.9, lng: -56.2, date: '1520-01-11', kind: 'discovery', note: 'Mistaken at first for the sought-after strait' },
          { id: 'wp6', name: 'Puerto San Julián', lat: -49.31, lng: -67.72, date: '1520-03-31', kind: 'port', note: 'Overwintered here; site of the Easter mutiny' },
          { id: 'wp7', name: 'Santa Cruz River', lat: -50.13, lng: -68.45, date: '1520-08-24', kind: 'landfall' },
          { id: 'wp8', name: 'Cape Vírgenes', lat: -52.33, lng: -68.35, date: '1520-10-21', kind: 'discovery', note: 'Marked the eastern entrance to the strait' },
          { id: 'wp9', name: 'Strait of Magellan', lat: -52.9, lng: -70.6, date: '1520-11-01', kind: 'discovery', note: "Named the Estrecho de Todos los Santos" },
          { id: 'wp10', name: 'Cape Deseado', lat: -52.83, lng: -74.68, date: '1520-11-28', kind: 'discovery', note: 'Western mouth of the strait; named the Pacific Ocean' },
          { id: 'wp11', name: 'Puka-Puka', lat: -14.65, lng: -138.8, date: '1521-01-24', kind: 'landfall', note: 'One of the "Islas Infortunadas" sighted but not landed on' },
          { id: 'wp12', name: 'Caroline Island', lat: -9.95, lng: -150.23, date: '1521-02-21', kind: 'landfall' },
          { id: 'wp13', name: 'Guam', lat: 13.44, lng: 144.79, date: '1521-03-06', kind: 'landfall', note: 'Named Islas de los Ladrones' },
          { id: 'wp14', name: 'Homonhon, Philippines', lat: 10.73, lng: 125.65, date: '1521-03-16', kind: 'landfall' },
          { id: 'wp15', name: 'Limasawa', lat: 9.9, lng: 125.07, date: '1521-03-28', kind: 'landfall', note: 'First Mass in the Philippines celebrated here' },
          { id: 'wp16', name: 'Cebu', lat: 10.32, lng: 123.9, date: '1521-04-07', kind: 'port', note: 'Rajah Humabon baptised with 2,200 islanders' },
          { id: 'wp17', name: 'Mactan, Philippines', lat: 10.31, lng: 123.98, date: '1521-04-27', kind: 'death', note: 'Magellan killed in battle against Lapu-Lapu' },
          { id: 'wp18', name: 'Palawan', lat: 9.8, lng: 118.7, date: '1521-07', kind: 'landfall' },
          { id: 'wp19', name: 'Brunei', lat: 4.94, lng: 114.94, date: '1521-08', kind: 'port' },
          { id: 'wp20', name: 'Tidore, Moluccas', lat: 0.66, lng: 127.4, date: '1521-11-08', kind: 'port', note: 'Reached the Spice Islands and loaded cloves' },
          { id: 'wp21', name: 'Cape of Good Hope', lat: -34.36, lng: 18.47, date: '1522-05-06', kind: 'landfall', note: 'Rounded with only rice for rations' },
          { id: 'wp22', name: 'Santiago, Cape Verde', lat: 14.93, lng: -23.51, date: '1522-07-09', kind: 'port', note: 'Crew discovered they had lost a day crossing the date line' },
          { id: 'wp23', name: 'Sanlúcar de Barrameda, Spain', lat: 36.78, lng: -6.35, date: '1522-09-06', kind: 'port', note: 'Elcano completes the first circumnavigation of the Earth' },
        ],
      },
    ],
  };
