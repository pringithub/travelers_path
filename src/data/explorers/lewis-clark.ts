import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'lewis-clark',
    name: 'Lewis and Clark',
    era: 'Age of Enlightenment',
    years: '1804 – 1806',
    nationality: 'American',
    blurb:
      'Meriwether Lewis and William Clark led the Corps of Discovery across the Louisiana Purchase and the Rocky Mountains to the Pacific, mapping a route to the western ocean and cataloguing a continent.',
    tags: ['overland', 'exploration'],
    sources: [
      { label: 'Lewis and Clark Expedition – Wikipedia', url: 'https://en.wikipedia.org/wiki/Lewis_and_Clark_Expedition' },
    ],
    journeys: [
      {
        id: 'corps-of-discovery',
        title: 'The Corps of Discovery',
        yearStart: 1804,
        yearEnd: 1806,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'Traveled by keelboat, canoe, horse, and foot from St. Louis up the Missouri River, over the Rocky Mountains, and down the Columbia to the Pacific, then retraced and varied the route home.',
        waypoints: [
          { id: 'wp1', name: 'Camp Dubois, Illinois', lat: 38.86, lng: -90.05, date: '1804-05-14', kind: 'port', note: 'Departure of the Corps of Discovery' },
          { id: 'wp2', name: 'St. Charles, Missouri', lat: 38.78, lng: -90.48, date: '1804-05-21', kind: 'port', note: 'Lewis rejoined the party here' },
          { id: 'wp3', name: 'Kansas City, Missouri', lat: 39.11, lng: -94.58, date: '1804-06', kind: 'landfall' },
          { id: 'wp4', name: 'Omaha, Nebraska', lat: 41.26, lng: -95.94, date: '1804-08', kind: 'landfall' },
          { id: 'wp5', name: "Floyd's Bluff, Sioux City, Iowa", lat: 42.5, lng: -96.4, date: '1804-08-20', kind: 'death', note: 'Sergeant Charles Floyd died; the only member lost on the expedition' },
          { id: 'wp6', name: 'Fort Pierre, South Dakota', lat: 44.36, lng: -100.35, date: '1804-09', kind: 'landfall', note: 'Tense standoff with the Lakota nearly turned violent' },
          { id: 'wp7', name: 'Fort Mandan, North Dakota', lat: 47.26, lng: -101.09, date: '1804-11', kind: 'port', note: 'Winter camp; met Sacagawea and Toussaint Charbonneau' },
          { id: 'wp8', name: 'Great Falls of the Missouri, Montana', lat: 47.5, lng: -111.3, date: '1805-06', kind: 'landfall', note: 'Grueling portage around the falls' },
          { id: 'wp9', name: 'Lemhi Pass, Continental Divide', lat: 44.98, lng: -113.45, date: '1805-08', kind: 'discovery', note: 'Crossed the Continental Divide' },
          { id: 'wp10', name: 'Traveler\'s Rest, Montana', lat: 46.75, lng: -114.09, date: '1805-09', kind: 'landfall' },
          { id: 'wp11', name: 'Lolo Pass', lat: 46.65, lng: -114.6, date: '1805-09', kind: 'landfall', note: 'Crossed the Bitterroot Range' },
          { id: 'wp12', name: 'Clearwater–Snake confluence, Idaho', lat: 46.42, lng: -117.03, date: '1805-10', kind: 'landfall' },
          { id: 'wp13', name: 'Celilo Falls, Columbia River', lat: 45.66, lng: -120.98, date: '1805-10', kind: 'landfall' },
          { id: 'wp14', name: 'Mouth of the Columbia River', lat: 46.28, lng: -124.05, date: '1805-11-07', kind: 'discovery', note: 'First sighting of the Pacific Ocean' },
          { id: 'wp15', name: 'Fort Clatsop, Astoria, Oregon', lat: 46.13, lng: -123.87, date: '1805-12', kind: 'port', note: 'Winter camp on the Pacific coast' },
          { id: 'wp16', name: 'Camp Chopunnish, Idaho', lat: 46.4, lng: -116.0, date: '1806-05', kind: 'landfall', note: 'Waited for mountain snow to melt' },
          { id: 'wp17', name: "Traveler's Rest, Montana", lat: 46.75, lng: -114.09, date: '1806-07', kind: 'landfall', note: 'Party split into two teams to explore separate routes' },
          { id: 'wp18', name: 'Marias River, Montana', lat: 48.63, lng: -112.32, date: '1806-07-26', kind: 'landfall', note: "Lewis's party clashed with Blackfeet warriors" },
          { id: 'wp19', name: 'Confluence of the Yellowstone and Missouri Rivers', lat: 48.0, lng: -104.05, date: '1806-08-11', kind: 'landfall', note: "Lewis and Clark's parties reunited; Lewis was accidentally shot" },
          { id: 'wp20', name: 'St. Louis, Missouri', lat: 38.63, lng: -90.2, date: '1806-09-23', kind: 'port', note: 'Journey ends' },
        ],
      },
    ],
  };
