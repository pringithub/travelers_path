import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'bering',
    name: 'Vitus Bering',
    era: 'Age of Enlightenment',
    years: '1681 – 1741',
    nationality: 'Danish (Russian service)',
    blurb:
      'Danish-born captain-commodore in the Russian navy who led two great Kamchatka expeditions, helping prove the separation of Asia and America and reaching Alaska before dying stranded on the island that now bears his name.',
    tags: ['pacific', 'age-of-sail'],
    sources: [
      { label: 'Vitus Bering – Wikipedia', url: 'https://en.wikipedia.org/wiki/Vitus_Bering' },
    ],
    journeys: [
      {
        id: 'first-kamchatka',
        title: 'First Kamchatka Expedition',
        yearStart: 1725,
        yearEnd: 1730,
        mode: 'ship',
        color: '#9c3b28',
        summary:
          'Crossed all of Siberia by land and river to reach Kamchatka, then sailed north through the strait that now bears his name to test whether Asia and America were joined.',
        waypoints: [
          { id: 'wp1', name: 'St. Petersburg, Russia', lat: 59.93, lng: 30.34, date: '1725-01-24', kind: 'port' },
          { id: 'wp2', name: 'Tobolsk, Siberia', lat: 58.2, lng: 68.25, date: '1725-03-16', kind: 'landfall' },
          { id: 'wp3', name: 'Yakutsk, Siberia', lat: 62.03, lng: 129.73, date: '1726-06', kind: 'landfall' },
          { id: 'wp4', name: 'Okhotsk, Russia', lat: 59.38, lng: 143.3, date: '1726-10', kind: 'port', note: 'Small port town built up to launch the Pacific crossing' },
          { id: 'wp5', name: 'Lower Kamchatka Post', lat: 56.22, lng: 162.75, date: '1728-03', kind: 'landfall', note: 'Six thousand miles from St. Petersburg after three years overland' },
          { id: 'wp6', name: 'St. Lawrence Island', lat: 63.3, lng: -170.4, date: '1728-08', kind: 'landfall' },
          { id: 'wp7', name: 'Bering Strait', lat: 65.7, lng: -168.8, date: '1728-08-13', kind: 'discovery', note: 'Reached the strait separating Asia from America, but turned back before sighting Alaska' },
          { id: 'wp8', name: 'Mouth of the Kamchatka River', lat: 56.28, lng: 162.8, date: '1728-09', kind: 'port', note: 'Returned after fifty days at sea' },
          { id: 'wp9', name: 'St. Petersburg, Russia', lat: 59.93, lng: 30.34, date: '1730-02-28', kind: 'port', note: 'Journey ends' },
        ],
      },
      {
        id: 'second-kamchatka',
        title: 'Second Kamchatka (Great Northern) Expedition',
        yearStart: 1733,
        yearEnd: 1741,
        mode: 'ship',
        color: '#2f6f7a',
        summary:
          "A vastly larger expedition crossed Siberia again to build a Pacific fleet at Kamchatka, then sailed east to become the first Russian voyage to reach Alaska, at the cost of Bering's own life.",
        waypoints: [
          { id: 'wp1', name: 'St. Petersburg, Russia', lat: 59.93, lng: 30.34, date: '1733-04-29', kind: 'port' },
          { id: 'wp2', name: 'Tobolsk, Siberia', lat: 58.2, lng: 68.25, date: '1734', kind: 'landfall' },
          { id: 'wp3', name: 'Yakutsk, Siberia', lat: 62.03, lng: 129.73, date: '1734-08', kind: 'landfall' },
          { id: 'wp4', name: 'Okhotsk, Russia', lat: 59.38, lng: 143.3, date: '1737', kind: 'port', note: 'Fleet built here, including the St. Peter and St. Paul' },
          { id: 'wp5', name: 'Avacha Bay (Petropavlovsk-Kamchatsky)', lat: 53.02, lng: 158.65, date: '1740-10-06', kind: 'port', note: 'Named the new settlement after his ships' },
          { id: 'wp6', name: 'Mount Saint Elias, Alaska', lat: 60.29, lng: -140.93, date: '1741-07-16', kind: 'discovery', note: 'First sighting of the North American mainland by the expedition' },
          { id: 'wp7', name: 'Kayak Island, Alaska', lat: 59.9, lng: -144.4, date: '1741-07-20', kind: 'landfall' },
          { id: 'wp8', name: 'Kodiak Island, Alaska', lat: 57.5, lng: -153.5, date: '1741-08', kind: 'discovery' },
          { id: 'wp9', name: 'Shumagin Islands, Alaska', lat: 55.0, lng: -160.0, date: '1741-09', kind: 'landfall', note: 'Named for a sailor who died and was buried here' },
          { id: 'wp10', name: 'Bering Island, Commander Islands', lat: 55.28, lng: 165.85, date: '1741-11', kind: 'death', note: 'Wrecked here by a storm; Bering died on 19 December 1741' },
        ],
      },
    ],
  };
