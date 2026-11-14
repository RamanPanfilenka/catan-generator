import {EXTENSION_MAPS,RULEBOOK56,WORLD56_COUNTS,WORLD56_NUMBERS} from './maps-56.js';
// Terrain and number layouts transcribed from the official CATAN Seafarers 2025 rulebook, pp. 4–19.
export const RULEBOOK = 'https://www.catan.com/sites/default/files/2025-03/CN3083%20CATAN%E2%80%93Seafarers%20Rulebook%202025%20secured%20reduced.pdf';
export const TYPES = {s:{label:'Море',emoji:'≈'},o:{label:'Горы · руда',asset:'ore.NNjSgNFN.png'},l:{label:'Лес · древесина',asset:'wood.rJtVuCnz.png'},b:{label:'Холмы · глина',asset:'brick.CZt7YMx6.png'},p:{label:'Пастбище · шерсть',asset:'sheep.pp5TIOvN.png'},w:{label:'Поля · зерно',asset:'wheat.CmOqcSEm.png'},d:{label:'Пустыня',asset:'desert.6AzPoudn.png'},g:{label:'Золотое поле',emoji:'✦'},f:{label:'Неизведанная клетка',emoji:'?'}};
export const SCENARIOS = [
 {id:'shores',name:'1. К новым берегам',en:'Heading for New Shores',vp:'14 очков',pages:'4–5',description:'Большой родной остров и небольшие острова за морем. Первое поселение на каждом новом острове приносит 2 дополнительных очка.',maps:{
  3:['b12 g5 s s','s s s p4 o9','s w4 p6 s w3 s','p2 o5 l10 s g4','b8 p10 p9 l8 s s','w11 o3 b11 s o8','w6 l5 s b10'],
  4:['o8 p11 s g4 s','s s s s b5 o2','s p5 l6 o4 s l9 s','w12 b11 w3 p9 s g10','b6 l10 d w11 l5 s s','o3 p4 b9 p8 s b3','w8 l2 o10 s w6']}},
 {id:'islands',name:'2. Четыре острова',en:'The Four Islands',vp:'13 очков',pages:'6–7',description:'Четыре отдельных острова. Начните на одном или двух островах и отправляйтесь исследовать остальные.',maps:{
  3:['s s w4 p3','o4 l9 s w9 b5','p6 o10 s l8 b11 s','s s s s s','w11 o8 l3 s b10 b6','l5 p9 s o2 w5','p12 s s s'],
  4:['p8 s l9 l11','b10 s o3 w12 p5','w5 l3 s b5 o10 s','s s l6 s s','b4 p9 s s l9 p11','w6 o4 b2 s o8','p10 w11 s w4']}},
 {id:'fog',name:'3. Туманные острова',en:'The Fog Islands',vp:'12 очков',pages:'8–9',description:'Два стартовых острова и 12 неизвестных клеток. Открывайте их во время игры. Скрытый запас: 2 моря, 2 золота, 2 глины, 1 лес, 1 пастбище, 2 поля и 2 горы.',maps:{
  3:['f f s b6 l11','f f f s l5 w3','s s s f s p8 p9','s l6 p5 s f o4','s b11 l9 s f s s','s o8 w10 s f f','s p12 s f f'],
  4:['f s b4 w10 o3','f f s p9 l6 b12','s s f s s p10 o8','s o3 s f f w11','w6 l4 s f f s l5','b9 p8 s f f s','p2 l5 s f f']}},
 {id:'desert',name:'4. Через пустыню',en:'Through the Desert',vp:'14 очков',pages:'10–11',description:'Пояс из трёх пустынь отделяет родной остров от неисследованной полосы суши. Малые острова доступны по морю.',maps:{
  3:['g4 d s o8','l3 d l4 s p12','w6 d b5 p6 s s','s o3 l10 s g5','l11 b6 w2 b9 s s','o10 w9 l8 s w9','p8 p4 s o5'],
  4:['g10 d l5 s o9','o11 d b3 p6 s w4','w8 d o8 w10 l4 s b2','s l10 b11 p9 s s','b12 b6 w5 l8 s g5 p3','p3 p11 o4 s s s','s l9 s o6 w12']}},
 {id:'tribe',name:'5. Забытое племя',en:'The Forgotten Tribe',vp:'13 очков',pages:'12–13',description:'Родной остров в центре; на внешних островах находятся порты, очки и карты развития. На внешних островах нет производственных чисел.',maps:{
  4:['g o s d o w','s s s s s s s','w6 l9 o11 b5 l6 o4 s p','p10 b8 p4 w12 l5 p2 s','l11 w9 o3 p8 b10 w3 s l','s s s s s s s','d b s b d g']},regions:{4:[[13,14,15,16,17,18,21,22,23,24,25,26,28,29,30,31,32,33]]}},
 {id:'cloth',name:'6. Ткани для Катана',en:'Cloth for Catan',vp:'14 очков',pages:'14–15',description:'Два родных острова и четыре островка с деревнями. На каждый из восьми указанных в книге номеров деревень положите по 5 жетонов ткани.',maps:{
  4:['l4 p6 b5 p11 w8','w3 l12 s s l3 o9','w12 s s g s s s','s d s s d s','s s s g s s o2','b9 w2 s s p11 o4','p10 l6 o5 w10 b8']},villages:[['2,3','11 / 8'],['3,1','10 / 9'],['3,4','4 / 5'],['4,3','6 / 3']]} ,
 {id:'pirates',name:'7. Пиратские острова',en:'The Pirate Islands',vp:'10 очков + крепость',pages:'16–17',description:'Фиксированный сценарий: восточный остров — родной; на западе — пиратские крепости. Начальные корабли, крепости и маршрут пирата расставьте по схеме книги. Перемешивание для этого сценария не рекомендовано.',fixedOnly:true,maps:{
  4:['g11 o6 s s w4 b5','b s s d s o9 l10','w4 s s d s l3 p8 l5','s s o8 s w6 b9 p12','w10 s s d s p11 l8 p9','b s s p s o5 l2','g3 o6 s s w10 b4']}},
 {id:'wonders',name:'8. Чудеса Катана',en:'The Wonders of Catan',vp:'Чудо / 10 очков',pages:'18–19',description:'Создайте чудо света. Сохраняются пустыни и малые острова. Жетоны моста и стены и запрещённые стартовые вершины отмечены в книге сценариев.',maps:{
  4:['g8 b2 s o10 s s','s s s l11 s d s','o12 w6 b11 w10 p3 l9 d s','o3 w4 o6 p5 b4 d s','b8 p9 s s b10 s s g6','s l3 s l8 w9 s l4','o5 s p11 p2 s w5']},fixedCells:['0,0','0,1','4,7','5,6','6,5'],noRedCells:['2,5','3,4']}
];
for(const scenario of SCENARIOS){scenario.extension=EXTENSION_MAPS[scenario.id];scenario.maps[6]=scenario.extension.rows;}
export function scenarioForPlayers(scenario,players){return players>=5?{...scenario,...scenario.extension,rulebook:RULEBOOK56}: {...scenario,rulebook:RULEBOOK};}
const cachedPresets=new Map();
export function parseRows(rows) {
 const split=rows.map(row=>row.split(' ')), width=Math.max(...split.map(row=>row.length));
 return split.flatMap((row,r)=>row.map((token,c)=>({id:`${r},${c}`,r,c,x:c+(width-row.length)/2,y:r*Math.sqrt(3)/2,type:token[0],number:Number(token.slice(1))||null})));
}
export const DIRECTIONS=[[1,0],[-1,0],[.5,Math.sqrt(3)/2],[-.5,Math.sqrt(3)/2],[.5,-Math.sqrt(3)/2],[-.5,-Math.sqrt(3)/2]];
export function adjacency(cells) {return cells.map((a,i)=>cells.flatMap((b,j)=>j!==i&&Math.abs(Math.hypot(a.x-b.x,a.y-b.y)-1)<.01?[j]:[]));}
export const production=c=>Boolean(c.number)&&!['s','d','f'].includes(c.type);
export function balance(cells,adj=adjacency(cells)) {
 let score=10;
 cells.forEach((a,i)=>adj[i].forEach(j=>{
  const b=cells[j];
  if(!production(a)||!production(b))return;
  if([6,8].includes(a.number)&&[6,8].includes(b.number))score-=2;
  if(a.number===b.number)score-=.5;
  if(a.type===b.type)score-=.3;
 }));
 return Number(Math.max(1,Math.min(10,score)).toFixed(1));
}
export function shuffle(values,rng=Math.random) {const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function islands(cells,adj=adjacency(cells)) {
 const visited=new Set(),groups=[];
 cells.forEach((c,i)=>{if(visited.has(i)||['s','f'].includes(c.type))return;const group=[],queue=[i];visited.add(i);while(queue.length){const k=queue.pop();group.push(k);for(const j of adj[k])if(!visited.has(j)&&!['s','f'].includes(cells[j].type)){visited.add(j);queue.push(j);}}groups.push(group);});return groups;
}
export function preset(id,players=4) {
 const scenario=SCENARIOS.find(s=>s.id===id);if(!scenario)throw Error('Unknown scenario');
 const key=id+':'+players;
 if(cachedPresets.has(key))return cachedPresets.get(key).map(c=>({...c}));
 const cells=parseRows(scenario.maps[players>=5?6:players]||scenario.maps[4]);
 // The extension rulebook leaves New Shores' mainland variable. Use a reproducible example for its book view.
 if(cells.some(c=>c.type==='m')){
  let state=562025;const rng=()=>{state=(state*1664525+1013904223)>>>0;return state/4294967296;};
  const slots=cells.flatMap((c,i)=>c.type==='m'?[i]:[]),adj=adjacency(cells);
  do {
   const terrain=shuffle([...Array(5).fill('o'),...Array(6).fill('l'),...Array(5).fill('b'),...Array(6).fill('p'),...Array(6).fill('w'),'d','d'],rng);
   const numbers=shuffle([2,2,3,3,3,4,4,4,5,5,5,6,6,6,8,8,8,9,9,9,10,10,10,11,11,11,12,12],rng);
   let number=0;slots.forEach((i,k)=>{cells[i].type=terrain[k];cells[i].number=terrain[k]==='d'?null:numbers[number++];});
  }while(!valid(cells,{no68:true,noGoldRed:true},adj)||balance(cells,adj)<7);

 }
 cachedPresets.set(key,cells);return cells.map(c=>({...c}));
}
export function randomizedScenario(id,players,rng=Math.random) {
 const scenario=scenarioForPlayers(SCENARIOS.find(s=>s.id===id),players), cells=preset(id,players);
 if(scenario.fixedOnly)return cells;
 const available=cells.flatMap((c,i)=>production(c)&&!(scenario.fixedCells||[]).includes(c.id)?[i]:[]);
 const mainland=['shores','desert'].includes(id) ? islands(cells.map(c=>c.type==='d'?{...c,type:'s'}:c)).sort((a,b)=>b.length-a.length)[0] : null;
 const specified=mainland;
 const groups=specified?[specified,available.filter(i=>!specified.includes(i))]:[available];
 for(const group of groups){
  const valid=group.filter(i=>available.includes(i)),terrains=shuffle(valid.map(i=>cells[i].type),rng),numbers=shuffle(valid.map(i=>cells[i].number),rng);
  valid.forEach((i,k)=>{cells[i].type=terrains[k];cells[i].number=numbers[k];});
 }
 return cells;
}
const allTiles=['o','o','o','o','o','l','l','l','l','l','b','b','b','b','b','p','p','p','p','p','w','w','w','w','w','g','g','d','d','d',...Array(19).fill('s')];
const allNumbers=[2,2,3,3,3,4,4,4,5,5,5,6,6,6,8,8,8,9,9,9,10,10,10,11,11,11,12];
export function randomWorld(rng=Math.random,players=4) {
 if(players>=5){const cells=parseRows([8,9,10,9,10,9,8].map(n=>Array(n).fill('s').join(' '))),tiles=shuffle(Object.entries(WORLD56_COUNTS).flatMap(([type,n])=>Array(n).fill(type)),rng),numbers=shuffle(WORLD56_NUMBERS,rng);let k=0;cells.forEach((c,i)=>{c.type=tiles[i];c.number=['s','d'].includes(c.type)?null:numbers[k++];});return cells;}

 const cells=parseRows([6,7,8,7,8,7,6].map(n=>Array(n).fill('s').join(' '))),tiles=shuffle(allTiles,rng),numbers=shuffle(allNumbers,rng);let k=0;
 cells.forEach((c,i)=>{c.type=tiles[i];c.number=['s','d'].includes(c.type)?null:numbers[k++];});return cells;
}
export function valid(cells,rules={},adj=adjacency(cells),scenarioId='') {
 const source=SCENARIOS.find(s=>s.id===scenarioId);const scenario=source?scenarioForPlayers(source,cells.length>49?6:4):undefined;
 for(let i=0;i<cells.length;i++){
  const a=cells[i];if(!production(a))continue;
  if(scenarioId==='islands'&&['l','p'].includes(a.type)&&[2,3,11,12].includes(a.number))return false;
  if(rules.noGoldRed&&a.type==='g'&&[6,8].includes(a.number)&&!(scenario?.fixedCells||[]).includes(a.id))return false;
  if((scenario?.noRedCells||[]).includes(a.id)&&[6,8].includes(a.number))return false;
  for(const j of adj[i]){if(j<=i)continue;const b=cells[j];if(!production(b))continue;
   if(rules.no68&&[6,8].includes(a.number)&&[6,8].includes(b.number))return false;
   if(rules.noSameNumber&&a.number===b.number)return false;
   if(rules.noSameTerrain&&a.type===b.type)return false;
  }
 }
 if(scenarioId==='tribe'&&cells.length<50&&cells.some(c=>['2,5','3,5','4,5'].includes(c.id)&&[5,6,8,9].includes(c.number)))return false;
 return true;
}
export function validateBoard(cells) {
 if(!Array.isArray(cells)||cells.length>70||cells.length<20)return false;
 const coords=new Set();
 return cells.every(c=>{if(!c||!TYPES[c.type]||!Number.isInteger(c.r)||c.r<0||c.r>8||!Number.isInteger(c.c)||c.c<0||c.c>9||typeof c.x!=='number'||!Number.isFinite(c.x)||Math.abs(c.x)>10||typeof c.y!=='number'||!Number.isFinite(c.y)||c.y<0||c.y>9)return false;const id=`${c.r},${c.c}`;if(coords.has(id)||c.id!==id)return false;coords.add(id);return (c.number===null||[2,3,4,5,6,8,9,10,11,12].includes(c.number))&&(!['s','d','f'].includes(c.type)||c.number===null);});
}
