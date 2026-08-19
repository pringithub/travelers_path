import type { Explorer } from '../types';
import { explorer as magellan } from './magellan';
import { explorer as zheng_he } from './zheng-he';
import { explorer as ibn_battuta } from './ibn-battuta';
import { explorer as cook } from './cook';
import { explorer as columbus } from './columbus';
import { explorer as marco_polo } from './marco-polo';
import { explorer as hudson } from './hudson';
import { explorer as bering } from './bering';
import { explorer as lewis_clark } from './lewis-clark';
import { explorer as maimonides } from './maimonides';
import { explorer as mark_twain } from './mark-twain';
import { explorer as nachmanides } from './nachmanides';
import { explorer as benjamin_of_tudela } from './benjamin-of-tudela';
import { explorer as petachiah_of_regensburg } from './petachiah-of-regensburg';
import { explorer as obadiah_bertinoro } from './obadiah-bertinoro';
import { explorer as tasman } from './tasman';
import { explorer as livingstone } from './livingstone';
import { explorer as mackenzie } from './mackenzie';
import { explorer as cartier } from './cartier';
import { explorer as de_soto } from './de-soto';
import { explorer as scott } from './scott';
import { explorer as franklin } from './franklin';
import { explorer as stanley } from './stanley';
import { explorer as amundsen } from './amundsen';
import { explorer as thompson } from './thompson';
import { explorer as shackleton } from './shackleton';
import { explorer as nansen } from './nansen';
import { explorer as coronado } from './coronado';
import { explorer as speke } from './speke';
import { explorer as stuart } from './stuart';
import { explorer as vancouver } from './vancouver';
import { explorer as flinders } from './flinders';
import { explorer as da_gama } from './da-gama';
import { explorer as cabral } from './cabral';
import { explorer as elcano } from './elcano';
import { explorer as hedin } from './hedin';
import { explorer as cabot } from './cabot';
import { explorer as byrd } from './byrd';
import { explorer as mawson } from './mawson';
import { explorer as peary } from './peary';
import { explorer as sverdrup } from './sverdrup';
import { explorer as baffin } from './baffin';
import { explorer as baker } from './baker';
import { explorer as barentsz } from './barentsz';
import { explorer as barth } from './barth';
import { explorer as belalcazar } from './belalcazar';
import { explorer as bellinghausen } from './bellinghausen';
import { explorer as bonvalot } from './bonvalot';
import { explorer as bruce } from './bruce';
import { explorer as burke } from './burke';
import { explorer as caillie } from './caillie';
import { explorer as cameron } from './cameron';
import { explorer as carpine } from './carpine';
import { explorer as clapperton } from './clapperton';
import { explorer as de_houtman } from './de-houtman';
import { explorer as dezhnev } from './dezhnev';
import { explorer as du_tisne } from './du-tisne';
import { explorer as davis } from './davis';
import { explorer as foxe } from './foxe';
import { explorer as fraser } from './fraser';
import { explorer as frederick_cook } from './frederick-cook';
import { explorer as frobisher } from './frobisher';
import { explorer as giles } from './giles';
import { explorer as greely } from './greely';
import { explorer as gregory } from './gregory';
import { explorer as hayes } from './hayes';
import { explorer as hearne } from './hearne';
import { explorer as james } from './james';
import { explorer as janszoon } from './janszoon';
import { explorer as john_ross } from './john-ross';
import { explorer as jolliet } from './jolliet';
import { explorer as kelsey } from './kelsey';
import { explorer as kerguelen } from './kerguelen';
import { explorer as la_harpe } from './la-harpe';
import { explorer as la_perouse } from './la-perouse';
import { explorer as la_salle } from './la-salle';
import { explorer as la_verendrye } from './la-verendrye';
import { explorer as lavrador } from './lavrador';
import { explorer as malaspina } from './malaspina';
import { explorer as marion_du_fresne } from './marion-du-fresne';
import { explorer as marquette } from './marquette';
import { explorer as mcclure } from './mcclure';
import { explorer as mendana } from './mendana';
import { explorer as mitchell } from './mitchell';
import { explorer as munk } from './munk';
import { explorer as nachtigal } from './nachtigal';
import { explorer as nares } from './nares';
import { explorer as nordenskiold } from './nordenskiold';
import { explorer as ojeda } from './ojeda';
import { explorer as onate } from './onate';
import { explorer as orellana } from './orellana';
import { explorer as park } from './park';
import { explorer as parry } from './parry';
import { explorer as przhevalsky } from './przhevalsky';
import { explorer as queiros } from './queiros';
import { explorer as quesada } from './quesada';
import { explorer as rohlfs } from './rohlfs';
import { explorer as teixeira } from './teixeira';
import { explorer as ushakov } from './ushakov';
import { explorer as veniard } from './veniard';
import { explorer as vizcaino } from './vizcaino';
import { explorer as von_toll } from './von-toll';
import { explorer as weddell } from './weddell';
import { explorer as wilkes } from './wilkes';
import { explorer as ws_bruce } from './ws-bruce';

export const explorers: Explorer[] = [
  magellan,
  zheng_he,
  ibn_battuta,
  cook,
  columbus,
  marco_polo,
  hudson,
  bering,
  lewis_clark,
  maimonides,
  mark_twain,
  nachmanides,
  benjamin_of_tudela,
  petachiah_of_regensburg,
  obadiah_bertinoro,
  tasman,
  livingstone,
  mackenzie,
  cartier,
  de_soto,
  scott,
  franklin,
  stanley,
  amundsen,
  thompson,
  shackleton,
  nansen,
  coronado,
  speke,
  stuart,
  vancouver,
  flinders,
  da_gama,
  cabral,
  elcano,
  hedin,
  cabot,
  byrd,
  mawson,
  peary,
  sverdrup,
  baffin,
  baker,
  barentsz,
  barth,
  belalcazar,
  bellinghausen,
  bonvalot,
  bruce,
  burke,
  caillie,
  cameron,
  carpine,
  clapperton,
  de_houtman,
  dezhnev,
  du_tisne,
  davis,
  foxe,
  fraser,
  frederick_cook,
  frobisher,
  giles,
  greely,
  gregory,
  hayes,
  hearne,
  james,
  janszoon,
  john_ross,
  jolliet,
  kelsey,
  kerguelen,
  la_harpe,
  la_perouse,
  la_salle,
  la_verendrye,
  lavrador,
  marion_du_fresne,
  marquette,
  mcclure,
  mendana,
  mitchell,
  munk,
  malaspina,
  nachtigal,
  nares,
  nordenskiold,
  ojeda,
  onate,
  orellana,
  park,
  parry,
  przhevalsky,
  queiros,
  quesada,
  rohlfs,
  teixeira,
  ushakov,
  veniard,
  vizcaino,
  von_toll,
  weddell,
  wilkes,
  ws_bruce,
];

export function findExplorer(id: string): Explorer | undefined {
  return explorers.find((e) => e.id === id);
}