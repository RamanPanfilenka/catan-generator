import {Worker} from 'node:worker_threads';
import assert from 'node:assert/strict';
import {balance,valid,validateBoard,islands} from '../dist/seafarers/maps.js';
async function search(options){
 const worker=new Worker(new URL('./worker-bridge.mjs',import.meta.url));
 return new Promise((resolve,reject)=>{
  const timer=setTimeout(()=>{worker.terminate();reject(Error('Search timed out: '+options.scenario));},30000);
  worker.on('error',err=>{clearTimeout(timer);reject(err);});
  worker.on('message',async result=>{if(result.type!=='found')return;clearTimeout(timer);await worker.terminate();assert(validateBoard(result.cells));assert(balance(result.cells)>=options.minBalance);assert(valid(result.cells,options.rules,undefined,options.kind==='random'?'':options.scenario));if(options.kind==='random'){assert(islands(result.cells).length>=2);assert(islands(result.cells).length<=6);}console.log('PASS',options.kind,options.scenario,'score',result.score,'attempts',result.attempts);resolve();});
  worker.postMessage(options);
 });
}
for(const scenario of ['shores','islands','fog','desert','tribe','cloth','wonders'])await search({kind:'scenario',scenario,players:4,setup:'shuffle',minBalance:7,rules:{no68:true,noGoldRed:true}});
await search({kind:'random',scenario:'shores',players:4,setup:'shuffle',minBalance:7,minIslands:2,maxIslands:6,rules:{no68:true,noGoldRed:true}});
for(const scenario of ['shores','islands','fog','desert','tribe','cloth','wonders'])await search({kind:'scenario',scenario,players:6,setup:'shuffle',minBalance:7,rules:{no68:true,noGoldRed:true}});
await search({kind:'random',scenario:'shores',players:6,setup:'shuffle',minBalance:7,minIslands:2,maxIslands:6,rules:{no68:true,noGoldRed:true}});
console.log('PASS: actual search worker returns maps meeting target and scenario constraints');
