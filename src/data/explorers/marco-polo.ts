import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'marco-polo',
    name: 'Marco Polo',
    era: 'Late Middle Ages',
    years: '1254 – 1324',
    nationality: 'Venetian',
    blurb:
      'Venetian merchant whose 24-year overland and sea journey to the court of Kublai Khan, recorded in The Travels of Marco Polo, introduced Europe to the wealth and wonders of Asia.',
    tags: ['silk-road', 'medieval'],
    sources: [
      { label: 'Marco Polo – Wikipedia', url: 'https://en.wikipedia.org/wiki/Marco_Polo' },
    ],
    journeys: [
      {
        id: 'outbound',
        title: 'Overland journey to Cathay',
        yearStart: 1271,
        yearEnd: 1275,
        mode: 'caravan',
        color: '#c8992e',
        summary:
          "Travelled with his father and uncle from Venice across Persia and Central Asia along the Silk Road to reach Kublai Khan's summer palace at Shangdu.",
        waypoints: [
          { id: 'wp1', name: 'Venice, Italy', lat: 45.44, lng: 12.32, date: '1271', kind: 'port' },
          { id: 'wp2', name: 'Acre', lat: 32.92, lng: 35.08, date: '1271', kind: 'port' },
          { id: 'wp3', name: 'Hormuz, Persia', lat: 27.13, lng: 56.45, date: '1272', kind: 'port', note: 'Turned inland after finding no seaworthy ship bound for India' },
          { id: 'wp4', name: 'Kerman, Persia', lat: 30.28, lng: 57.08, date: '1272', kind: 'landfall' },
          { id: 'wp5', name: 'Balkh, Afghanistan', lat: 36.76, lng: 66.9, date: '1273', kind: 'landfall' },
          { id: 'wp6', name: 'Pamir Mountains', lat: 37.77, lng: 75.23, date: '1273', kind: 'landfall', note: 'Crossed the high plateau later called the "Roof of the World"' },
          { id: 'wp7', name: 'Kashgar', lat: 39.47, lng: 75.99, date: '1273', kind: 'landfall' },
          { id: 'wp8', name: 'Khotan', lat: 37.11, lng: 79.93, date: '1274', kind: 'landfall' },
          { id: 'wp9', name: 'Dunhuang, edge of the Gobi Desert', lat: 40.14, lng: 94.66, date: '1274', kind: 'landfall' },
          { id: 'wp10', name: 'Shangdu (Xanadu), China', lat: 42.36, lng: 116.18, date: '1275', kind: 'landfall', note: "Reached Kublai Khan's summer palace" },
        ],
      },
      {
        id: 'cathay',
        title: 'Seventeen years in the service of the Khan',
        yearStart: 1275,
        yearEnd: 1291,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          "Served as a foreign emissary for Kublai Khan, travelling extensively across the Mongol Empire's Chinese territories and into Southeast Asia on diplomatic missions.",
        waypoints: [
          { id: 'wp1', name: 'Shangdu (Xanadu), China', lat: 42.36, lng: 116.18, date: '1275', kind: 'landfall' },
          { id: 'wp2', name: 'Khanbaliq (Beijing)', lat: 39.9, lng: 116.4, date: '1276', kind: 'landfall', note: "Kublai Khan's winter capital" },
          { id: 'wp3', name: 'Yangzhou, China', lat: 32.39, lng: 119.42, date: '1280', kind: 'port', note: 'Claimed to have governed this city for three years' },
          { id: 'wp4', name: 'Hangzhou (Kinsai), China', lat: 30.25, lng: 120.17, date: '1285', kind: 'landfall', note: 'Described as the finest and most splendid city in the world' },
          { id: 'wp5', name: 'Pagan Kingdom, Burma', lat: 21.17, lng: 94.86, date: '1287', kind: 'landfall', note: 'Diplomatic mission into Southeast Asia' },
          { id: 'wp6', name: 'Zaiton (Quanzhou), China', lat: 24.87, lng: 118.68, date: '1291', kind: 'port', note: 'Departure point for the sea voyage home' },
        ],
      },
      {
        id: 'return',
        title: 'Return voyage to Venice',
        yearStart: 1291,
        yearEnd: 1295,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          'Escorted a Mongol princess by sea to Persia via Southeast Asia and India, then travelled overland through Trebizond and Constantinople back to Venice.',
        waypoints: [
          { id: 'wp1', name: 'Zaiton (Quanzhou), China', lat: 24.87, lng: 118.68, date: '1291', kind: 'port' },
          { id: 'wp2', name: 'Sumatra', lat: 5.2, lng: 97.0, date: '1292', kind: 'landfall' },
          { id: 'wp3', name: 'Ceylon', lat: 7.29, lng: 80.63, date: '1293', kind: 'landfall' },
          { id: 'wp4', name: 'Kollam, India', lat: 8.88, lng: 76.59, date: '1293', kind: 'landfall' },
          { id: 'wp5', name: 'Hormuz, Persia', lat: 27.13, lng: 56.45, date: '1294', kind: 'port', note: 'Delivered the princess Kököchin to the Persian court' },
          { id: 'wp6', name: 'Trebizond', lat: 41.0, lng: 39.72, date: '1295', kind: 'landfall' },
          { id: 'wp7', name: 'Constantinople', lat: 41.01, lng: 28.98, date: '1295', kind: 'landfall' },
          { id: 'wp8', name: 'Venice, Italy', lat: 45.44, lng: 12.32, date: '1295', kind: 'port', note: 'Journey ends after 24 years and roughly 15,000 miles' },
        ],
      },
    ],
  };
