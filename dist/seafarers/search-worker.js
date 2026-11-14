import {preset,randomWorld,randomizedScenario,adjacency,balance,valid,islands} from './maps.js';
self.onmessage=({data:options})=>{
 let attempts=0,best=0;
 const started=performance.now(),sample=options.kind==='random'?randomWorld(Math.random,options.players):preset(options.scenario,options.players),adj=adjacency(sample);
 function step(){
  const start=performance.now();
  do {
   const cells=options.kind==='random'?randomWorld(Math.random,options.players):randomizedScenario(options.scenario,options.players);attempts++;
   if(!valid(cells,options.rules,adj,options.kind==='random'?'':options.scenario))continue;
   if(options.kind==='random'){
    const count=islands(cells,adj).length;
    if(count<options.minIslands||count>options.maxIslands)continue;
   }
   const score=balance(cells,adj);best=Math.max(best,score);
   if(score>=options.minBalance){self.postMessage({type:'found',cells,score,attempts,elapsed:performance.now()-started});return;}
  } while(performance.now()-start<45);
  self.postMessage({type:'progress',attempts,best,elapsed:performance.now()-started});setTimeout(step,0);
 }
 step();
};
