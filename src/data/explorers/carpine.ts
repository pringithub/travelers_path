import type { Explorer } from '../types';

export const explorer: Explorer = {
    id: 'carpine',
    name: 'Giovanni da Pian del Carpine',
    era: 'Medieval',
    years: 'c. 1180 – 1252',
    nationality: 'Italian',
    blurb:
      'Italian Franciscan friar who, as papal envoy in 1245–1247, made one of the earliest known European journeys to the Mongol capital of Karakorum and wrote a detailed account of the Mongols, the Historia Mongalorum.',
    tags: ['asia', 'medieval', 'overland'],
    sources: [
      { label: 'Giovanni da Pian del Carpine – Wikipedia', url: 'https://en.wikipedia.org/wiki/Giovanni_da_Pian_del_Carpine' },
    ],
    journeys: [
      {
        id: 'journey-to-karakorum',
        title: 'Journey of the papal envoy to the Mongol capital',
        yearStart: 1245,
        yearEnd: 1247,
        mode: 'caravan',
        color: '#8a6d3b',
        summary:
          'Leading a papal mission, Carpine travelled by horse and caravan across Europe and the vast steppe of central Asia to Karakorum, the seat of the Mongol khan, delivering the message of Pope Innocent IV and returning with the Mongols\' reply.',
        waypoints: [
          { id: 'wp1', name: 'Lyon, France', lat: 45.76, lng: 4.84, date: '1245-04', kind: 'port', note: 'Departure on the papal mission' },
          { id: 'wp2', name: 'Kiev', lat: 50.45, lng: 30.52, date: '1246-02', kind: 'turnaround', note: 'Wintering at the devastated Rus capital' },
          { id: 'wp3', name: 'Batu Khan\'s camp on the Volga', lat: 48.34, lng: 44.86, date: '1246-04', kind: 'landfall', note: 'Meeting with the ruler of the Golden Horde' },
          { id: 'wp4', name: 'Karakorum, Mongol capital', lat: 47.22, lng: 102.8, date: '1246-07', kind: 'discovery', note: 'Present at the election of Güyük Khan as great khan' },
          { id: 'wp5', name: 'Return to Lyon, France', lat: 45.76, lng: 4.84, date: '1247-11', kind: 'port', note: 'Delivering his account and the Mongol reply' },
        ],
      },
    ],
  };