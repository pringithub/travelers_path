import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'speke',
    name: 'John Hanning Speke',
    era: 'Victorian',
    years: '1827 – 1864',
    nationality: 'British',
    blurb:
      'British explorer who first reached and named Lake Victoria as the likely source of the Nile, and whose rival theories with Richard Burton divided the Victorian geographic establishment.',
    tags: ['africa', 'exploration'],
    sources: [
      { label: 'John Hanning Speke – Wikipedia', url: 'https://en.wikipedia.org/wiki/John_Hanning_Speke' },
    ],
    journeys: [
      {
        id: 'source-of-nile',
        title: 'Journey to Lake Victoria',
        yearStart: 1857,
        yearEnd: 1863,
        mode: 'foot',
        color: '#3f8f6a',
        summary:
          'First traveling with Burton, Speke continued alone after illnesses separated them to reach the southern shore of a vast lake he named Lake Victoria, and later returned to trace the Nile flowing out of it at Ripon Falls.',
        waypoints: [
          { id: 'wp1', name: 'Bagamoyo, Tanzania', lat: -6.43, lng: 38.9, date: '1857-06', kind: 'port' },
          { id: 'wp2', name: 'Lake Tanganyika (with Burton)', lat: -6.0, lng: 29.5, date: '1858', kind: 'landfall', note: 'Both explorers explored the lake' },
          { id: 'wp3', name: 'Lake Victoria (southern shore)', lat: -2.0, lng: 33.0, date: '1858-07-03', kind: 'discovery', note: 'Speke named the lake; he was too ill to return immediately' },
          { id: 'wp4', name: 'Return to Zanzibar', lat: -6.16, lng: 39.19, date: '1859', kind: 'port' },
          { id: 'wp5', name: 'Ripon Falls, Lake Victoria', lat: 0.44, lng: 33.19, date: '1862-07-28', kind: 'discovery', note: 'Confirmed the lake as the Nile\'s source on a later expedition' },
          { id: 'wp6', name: 'Gondokoro (Juba), Sudan', lat: 4.85, lng: 31.6, date: '1863-02', kind: 'port', note: 'Met Samuel Baker descending the Nile; confirmed the route' },
        ],
      },
    ],
  };