import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'john-ross',
    name: 'John Ross',
    era: 'Age of Exploration',
    years: '1777 – 1856',
    nationality: 'British (Scottish)',
    blurb:
      'British rear-admiral and Arctic explorer who led two expeditions in search of the Northwest Passage, surveying the Gulf of Boothia while his nephew James Clark Ross located the North Magnetic Pole.',
    tags: ['arctic', 'polar', 'ship'],
    sources: [
      { label: 'John Ross (Royal Navy officer) – Wikipedia', url: 'https://en.wikipedia.org/wiki/John_Ross_(Royal_Navy_officer)' },
    ],
    journeys: [
      {
        id: 'baffin',
        title: 'First voyage to Baffin Bay',
        yearStart: 1818,
        yearEnd: 1818,
        mode: 'ship',
        color: '#4a72a8',
        summary:
          'Ross\'s first Arctic expedition re-surveyed Baffin Bay and, mistakenly concluding Lancaster Sound was closed by mountains, turned back — an error that contributed to the later fame of Parry\'s voyages.',
        waypoints: [
          { id: 'wp1', name: 'London, England', lat: 51.51, lng: -0.13, date: '1818-04', kind: 'port' },
          { id: 'wp2', name: 'Baffin Bay', lat: 74.0, lng: -70.0, date: '1818-08', kind: 'discovery', note: 'Re-surveyed the bay and its coasts' },
          { id: 'wp3', name: 'Lancaster Sound', lat: 74.3, lng: -84.0, date: '1818-08', kind: 'turnaround', note: 'Turned back, believing the sound blocked — incorrectly' },
          { id: 'wp4', name: 'London, England', lat: 51.51, lng: -0.13, date: '1818', kind: 'port', note: 'Returned; the perceived blockade became controversial' },
        ],
      },
      {
        id: 'boothia',
        title: 'Search for the Northwest Passage and the magnetic pole',
        yearStart: 1829,
        yearEnd: 1833,
        mode: 'ship',
        color: '#3f556e',
        summary:
          'Ross\'s second voyage, in the paddle steamer Victory, became a four-year shipwreck and icy ordeal in the Gulf of Boothia. His nephew James Clark Ross located the North Magnetic Pole, and the stranded party survived two winters before being rescued by a whaler.',
        waypoints: [
          { id: 'wp1', name: 'Bristol, England', lat: 51.45, lng: -2.59, date: '1829-05-23', kind: 'port' },
          { id: 'wp2', name: 'Gulf of Boothia', lat: 71.5, lng: -93.0, date: '1830', kind: 'discovery', note: 'Determined Boothia was a peninsula' },
          { id: 'wp3', name: 'North Magnetic Pole (J. C. Ross, 1831)', lat: 70.05, lng: -96.8, date: '1831-06-01', kind: 'discovery', note: 'James Clark Ross reached the magnetic pole' },
          { id: 'wp4', name: 'Victory stranded, abandoned', lat: 70.6, lng: -95.5, date: '1831', kind: 'death', note: 'Ship frozen in, all surviving men abandoned it' },
          { id: 'wp5', name: 'Lancaster Sound / whaler rescue', lat: 74.0, lng: -80.0, date: '1833-08', kind: 'port', note: 'Rescued by the whaler Isabella after four years' },
        ],
      },
    ],
  };