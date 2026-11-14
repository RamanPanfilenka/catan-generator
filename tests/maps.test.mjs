import assert from 'node:assert/strict';
import {SCENARIOS,scenarioForPlayers,preset,adjacency,balance,islands,randomWorld,randomizedScenario,validateBoard,valid} from '../dist/seafarers/maps.js';
const expected={shores:{3:{s:13,g:2,b:4,l:3,p:5,w:4,o:4,d:0},4:{s:14,g:2,b:5,l:5,p:5,w:5,o:5,d:1}},islands:{3:{s:15,b:4,l:4,p:4,w:4,o:4},4:{s:12,b:4,l:5,p:5,w:5,o:4}},fog:{3:{s:16,f:12,b:2,l:4,p:4,w:2,o:2},4:{s:13,f:12,b:3,l:4,p:4,w:3,o:3}},desert:{3:{s:10,g:2,b:3,l:5,p:4,w:4,o:4,d:3},4:{s:12,g:2,b:5,l:5,p:5,w:5,o:5,d:3}},tribe:{4:{s:19,g:2,b:5,l:5,p:5,w:5,o:5,d:3}},cloth:{4:{s:18,g:2,b:3,l:4,p:4,w:5,o:4,d:2}},pirates:{4:{s:19,g:2,b:5,l:5,p:5,w:5,o:5,d:3}},wonders:{4:{s:19,g:2,b:5,l:5,p:5,w:5,o:5,d:3}}};
const extensionExpected={shores:{s:16,g:3,b:7,l:7,p:7,w:7,o:7,d:2},islands:{s:24,b:6,l:7,p:7,w:6,o:6},fog:{s:14,f:18,b:5,l:5,p:5,w:5,o:4},desert:{s:20,g:3,b:7,l:7,p:7,w:7,o:7,d:5},tribe:{s:22,g:3,b:7,l:7,p:7,w:7,o:6,d:4},cloth:{s:24,g:2,b:4,l:6,p:5,w:6,o:5,d:4},pirates:{s:26,g:4,b:4,l:6,p:6,w:5,o:7,d:5},wonders:{s:24,g:3,b:6,l:7,p:7,w:6,o:6,d:4}};
for(const [id,counts] of Object.entries(extensionExpected))expected[id][6]=counts;
const numberCounts56={shores:38,islands:32,fog:24,desert:38,tribe:29,cloth:26,pirates:32,wonders:35};
const numbers38=[3,4,4,4,4,4,4,4,4,3];
const numbers56={shores:numbers38,islands:[2,3,4,4,4,3,4,4,2,2],fog:[1,2,3,2,3,3,3,3,2,2],desert:numbers38,tribe:[1,4,4,4,3,3,3,3,3,1],cloth:numbers38,pirates:[1,4,4,4,4,4,3,3,4,1],wonders:[2,3,4,4,4,4,4,4,4,2]};
const counts=cells=>Object.fromEntries(Object.entries(cells.reduce((a,c)=>(a[c.type]=(a[c.type]||0)+1,a),{})).sort());
let seed=1234567;const rng=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
for(const s of SCENARIOS)for(const players of Object.keys(s.maps)){
 const cells=preset(s.id,players);assert(validateBoard(cells));const exp=Object.fromEntries(Object.entries(expected[s.id][players]).filter(([,n])=>n).sort());
 assert.deepEqual(counts(cells),exp,`${s.id} ${players}: terrain inventory`);
 const adj=adjacency(cells);adj.forEach((v,i)=>v.forEach(j=>assert(adj[j].includes(i))));
 if(s.id==='islands')assert.equal(islands(cells).length,Number(players)>=5?6:4);
 if(Number(players)>=5){
  assert.equal(cells.filter(c=>c.number).length,numberCounts56[s.id],s.id+' number inventory');
  const nums=cells.filter(c=>c.number).map(c=>c.number);
  if(s.id==='cloth')for(const [,pair] of scenarioForPlayers(s,6).villages)nums.push(...pair.split(' / ').map(Number));
  assert.deepEqual([2,3,4,5,6,8,9,10,11,12].map(n=>nums.filter(x=>x===n).length),numbers56[s.id],s.id+' printed number histogram');
  assert.deepEqual(preset(s.id,5),preset(s.id,6),'5 and 6 player maps share an official layout');
 }
 console.log(s.id,players,'cells',cells.length,'islands',islands(cells).length,'score',balance(cells));
 for(let n=0;n<10;n++){
  const shuffled=randomizedScenario(s.id,players,rng);assert.deepEqual(counts(shuffled),counts(cells));
  assert.deepEqual(shuffled.map(c=>c.number).sort(),cells.map(c=>c.number).sort());
  cells.forEach((c,i)=>{if(['s','d','f'].includes(c.type)||!c.number)assert.deepEqual(shuffled[i],c);});
 }
}
for(let n=0;n<50;n++){const cells=randomWorld(rng);assert.equal(cells.length,49);assert.equal(cells.filter(c=>c.type==='s').length,19);assert.equal(cells.filter(c=>c.number).length,27);assert(validateBoard(cells));}
for(let n=0;n<20;n++){const cells=randomWorld(rng,6);assert.equal(cells.length,63);assert.equal(cells.filter(c=>c.type==='s').length,21);assert.equal(cells.filter(c=>c.number).length,39);assert(validateBoard(cells));}
assert.equal(validateBoard([{type:'<script>'}]),false);
// Sea cells must never reduce the balance or fail terrain constraints.
const sea=preset('shores').map(c=>({...c,type:'s',number:null}));assert.equal(balance(sea),10);assert(valid(sea,{noSameTerrain:true}));
console.log('PASS: official inventories, all preset variants, four-island connectivity, shuffle preservation, 50 random worlds, sea scoring and share validation');
