const P={tiles:["ore","ore","ore","wood","wood","wood","wood","brick","brick","brick","sheep","sheep","sheep","sheep","wheat","wheat","wheat","wheat","desert"],numbers:[2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]},C={tiles:["ore","ore","ore","ore","ore","wood","wood","wood","wood","wood","wood","brick","brick","brick","brick","brick","sheep","sheep","sheep","sheep","sheep","sheep","wheat","wheat","wheat","wheat","wheat","wheat","desert","desert"],numbers:[2,3,3,3,4,4,4,5,5,5,5,6,6,6,8,8,8,9,9,9,10,10,10,11,11,11,11,12]},R={ore:{emoji:"⛰️",label:"Mountains",resource:"Ore",color:"#6b7280",gradient:["#4b5563","#9ca3af"]},wood:{emoji:"🌲",label:"Forest",resource:"Lumber",color:"#166534",gradient:["#14532d","#4ade80"]},brick:{emoji:"🧱",label:"Hills",resource:"Brick",color:"#9a3412",gradient:["#7c2d12","#f97316"]},sheep:{emoji:"🐑",label:"Pasture",resource:"Wool",color:"#4d7c0f",gradient:["#365314","#bef264"]},wheat:{emoji:"🌾",label:"Fields",resource:"Grain",color:"#a16207",gradient:["#854d0e","#fde047"]},desert:{emoji:"🏜️",label:"Desert",resource:"None",color:"#d97706",gradient:["#b45309","#fef3c7"]}},N={2:1,3:2,4:3,5:4,6:5,7:0,8:5,9:4,10:3,11:2,12:1},D={base4player:[{row:0,col:0,x:31,y:12.53249},{row:0,col:1,x:50,y:12.53249},{row:0,col:2,x:69,y:12.53249},{row:1,col:0,x:21.5,y:31.26624},{row:1,col:1,x:40.5,y:31.26624},{row:1,col:2,x:59.5,y:31.26624},{row:1,col:3,x:78.5,y:31.26624},{row:2,col:0,x:12,y:50},{row:2,col:1,x:31,y:50},{row:2,col:2,x:50,y:50},{row:2,col:3,x:69,y:50},{row:2,col:4,x:88,y:50},{row:3,col:0,x:21.5,y:68.73376},{row:3,col:1,x:40.5,y:68.73376},{row:3,col:2,x:59.5,y:68.73376},{row:3,col:3,x:78.5,y:68.73376},{row:4,col:0,x:31,y:87.46751},{row:4,col:1,x:50,y:87.46751},{row:4,col:2,x:69,y:87.46751}],expansion56:[{row:0,col:0,x:14.1224,y:63.92563},{row:0,col:1,x:14.1224,y:50},{row:0,col:2,x:14.1224,y:36.07437},{row:1,col:0,x:26.0816,y:70.88844},{row:1,col:1,x:26.0816,y:56.96281},{row:1,col:2,x:26.0816,y:43.03719},{row:1,col:3,x:26.0816,y:29.11156},{row:2,col:0,x:38.0408,y:77.85126},{row:2,col:1,x:38.0408,y:63.92563},{row:2,col:2,x:38.0408,y:50},{row:2,col:3,x:38.0408,y:36.07437},{row:2,col:4,x:38.0408,y:22.14874},{row:3,col:0,x:50,y:84.81407},{row:3,col:1,x:50,y:70.88844},{row:3,col:2,x:50,y:56.96281},{row:3,col:3,x:50,y:43.03719},{row:3,col:4,x:50,y:29.11156},{row:3,col:5,x:50,y:15.18593},{row:4,col:0,x:61.9592,y:77.85126},{row:4,col:1,x:61.9592,y:63.92563},{row:4,col:2,x:61.9592,y:50},{row:4,col:3,x:61.9592,y:36.07437},{row:4,col:4,x:61.9592,y:22.14874},{row:5,col:0,x:73.9184,y:70.88844},{row:5,col:1,x:73.9184,y:56.96281},{row:5,col:2,x:73.9184,y:43.03719},{row:5,col:3,x:73.9184,y:29.11156},{row:6,col:0,x:85.8776,y:63.92563},{row:6,col:1,x:85.8776,y:50},{row:6,col:2,x:85.8776,y:36.07437}]},O={base4player:{0:[1,3,4],1:[0,2,4,5],2:[1,5,6],3:[0,4,7,8],4:[0,1,3,5,8,9],5:[1,2,4,6,9,10],6:[2,5,10,11],7:[3,8,12],8:[3,4,7,9,12,13],9:[4,5,8,10,13,14],10:[5,6,9,11,14,15],11:[6,10,15],12:[7,8,13,16],13:[8,9,12,14,16,17],14:[9,10,13,15,17,18],15:[10,11,14,18],16:[12,13,17],17:[13,14,16,18],18:[14,15,17]},expansion56:{0:[1,3,4],1:[0,2,4,5],2:[1,5,6],3:[0,4,7,8],4:[0,1,3,5,8,9],5:[1,2,4,6,9,10],6:[2,5,10,11],7:[3,8,12,13],8:[3,4,7,9,13,14],9:[4,5,8,10,14,15],10:[5,6,9,11,15,16],11:[6,10,16,17],12:[7,13,18],13:[7,8,12,14,18,19],14:[8,9,13,15,19,20],15:[9,10,14,16,20,21],16:[10,11,15,17,21,22],17:[11,16,22],18:[12,13,19,23],19:[13,14,18,20,23,24],20:[14,15,19,21,24,25],21:[15,16,20,22,25,26],22:[16,17,21,26],23:[18,19,24,27],24:[19,20,23,25,27,28],25:[20,21,24,26,28,29],26:[21,22,25,29],27:[23,24,28],28:[24,25,27,29],29:[25,26,28]}},T={beginnerSetup:{officialLayout:{tileOrder:["mountains","pasture","forest","fields","hills","pasture","hills","fields","forest","desert","forest","mountains","forest","mountains","fields","pasture","hills","fields","pasture"],numberOrder:[10,2,9,12,6,4,10,9,11,3,8,8,3,4,5,5,6,11]}}},h={baseGame:P,expansion56:C,tileConfig:R,numberDots:N,hexPositions:D,adjacencyMap:O,guides:T},U={ore:"o",wood:"l",brick:"b",sheep:"s",wheat:"h",desert:"d"},H={o:"ore",l:"wood",b:"brick",s:"sheep",h:"wheat",d:"desert"};function S(e){const t=[...e];for(let o=t.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[t[o],t[r]]=[t[r],t[o]]}return t}function A(e,t="base4player"){const o=h.adjacencyMap[t];return o?o[String(e)]||[]:[]}function F(e,t,o="base4player",r={}){const{no68Adjacent:n=!0,noSameNumberAdjacent:s=!1,noSameResourceAdjacent:a=!1}=r;for(let c=0;c<t.length;c++){const m=A(c,o);for(const i of m)if(!(i<0||i>=t.length)&&(n&&(t[c]===6||t[c]===8)&&(t[i]===6||t[i]===8)||s&&t[c]&&t[i]&&t[c]===t[i]||a&&e[c]!=="desert"&&e[c]===e[i]))return!1}return!0}function j(e,t){const o=e.reduce((s,a,c)=>(a!=="desert"&&s.push(c),s),[]),r=S(t),n=new Array(e.length).fill(null);return o.forEach((s,a)=>{n[s]=r[a]}),n}function q(e,t,o="base4player"){let r=10;for(let n=0;n<t.length;n++){const s=A(n,o);for(const a of s)a<0||a>=t.length||((t[n]===6||t[n]===8)&&(t[a]===6||t[a]===8)&&(r-=2),t[n]&&t[a]&&t[n]===t[a]&&(r-=.5),e[n]!=="desert"&&e[n]===e[a]&&(r-=.3))}return Math.max(1,Math.min(10,r)).toFixed(1)}function $(e="fair",t="base",o={}){const r=t==="expansion56",n=r?h.expansion56:h.baseGame,s=r?"expansion56":"base4player";if(r&&(n.tiles.length!==30||n.numbers.length!==28)&&console.warn("[generator] expansion56 expects 30 terrain tiles and 28 number chits; got",n.tiles.length,n.numbers.length),e==="beginner"){const l=h.guides.beginnerSetup.officialLayout,p=l.tileOrder.map(d=>({mountains:"ore",pasture:"sheep",forest:"wood",fields:"wheat",hills:"brick",desert:"desert"})[d]||d),u=new Array(p.length).fill(null);let x=0;return p.forEach((d,I)=>{d!=="desert"&&(u[I]=l.numberOrder[x++])}),{tiles:p,numbers:u,mode:e,mapKey:"base4player"}}if(e==="random"){const l=S([...n.tiles]),p=j(l,[...n.numbers]);return{tiles:l,numbers:p,mode:e,mapKey:s}}const a=e==="tournament"?{no68Adjacent:!0,noSameNumberAdjacent:!0,noSameResourceAdjacent:!0}:{no68Adjacent:o.no68Adjacent??!0,noSameNumberAdjacent:o.noSameNumberAdjacent??!1,noSameResourceAdjacent:o.noSameResourceAdjacent??!1};let c,m,i=0;do c=S([...n.tiles]),m=j(c,[...n.numbers]),i++;while(!F(c,m,s,a)&&i<2e3);return{tiles:c,numbers:m,mode:e,mapKey:s}}function G(e,t){const o=e.map((r,n)=>`${U[r]||"d"}${t[n]??0}`).join(",");return btoa(unescape(encodeURIComponent(o)))}function K(e){try{return decodeURIComponent(escape(atob(e))).split(",").map(o=>({tile:H[o[0]]||"desert",number:parseInt(o.slice(1),10)||null}))}catch{return null}}let f=[],y=[],g="base4player",b=4,E="fair",w="base";const _=h.tileConfig,J=h.numberDots,Q=JSON.parse(document.getElementById("tile-img-src")?.textContent||"{}");function L(e,t,o="base4player"){const r=document.getElementById("hexBoard-tiles"),n=document.getElementById("boardPlaceholder");if(!r)return;n?.classList.add("hidden");const s=h.hexPositions[o]||h.hexPositions.base4player;r.innerHTML="",document.getElementById("hexBoard-inner")?.classList.toggle("hex-board-inner--expansion56",o==="expansion56"),s.forEach((c,m)=>{if(m>=e.length)return;const i=e[m]||"desert",l=t[m],p=h.tileConfig[i]||h.tileConfig.desert,u=l===6||l===8,x=l?"•".repeat(h.numberDots[String(l)]||0):"",d=document.createElement("div");d.className=`hex-tile hex-${i}`,d.style.cssText=`left:${c.x}%;top:${c.y}%;`,d.setAttribute("role","img"),d.setAttribute("aria-label",l?`${p.label}, ${l}`:`${p.label}`),d.innerHTML=`
      <div class="hex-inner">
        ${l?`
          <div class="hex-chit ${u?"high-prob":""}">${l}</div>
          <div class="hex-dots ${u?"high-prob":""}">${x}</div>
        `:""}
      </div>`,r.appendChild(d)})}function v(e,t,o="base4player"){const r=document.getElementById("balanceStats"),n=document.getElementById("balanceScore"),s=document.getElementById("balanceStars"),a=document.getElementById("resourceBars");if(!r||!n||!s||!a)return;r.classList.remove("hidden");const c=parseFloat(q(e,t,o));n.textContent=c.toFixed(1)+" / 10";const m=Math.round(c/2);s.textContent="⭐".repeat(m)+"☆".repeat(5-m);const i=["ore","wood","brick","sheep","wheat"],l={ore:0,wood:0,brick:0,sheep:0,wheat:0};e.forEach((u,x)=>{l[u]!==void 0&&t[x]&&(l[u]+=J[String(t[x])]||0)});const p=Math.max(...Object.values(l));a.innerHTML=i.map(u=>{const x=p>0?Math.round(l[u]/p*100):0,d=_[u];return`
      <div class="flex items-center gap-2">
        <img src="${Q[u]}" alt="${d.label}" title="${d.label}" class="h-5 w-5 shrink-0 object-contain" width="20" height="20" />
        <span class="w-14 text-xs">${d.label}</span>
        <div class="flex-1 rounded-full bg-gray-100 h-2">
          <div class="h-2 rounded-full bg-amber-400" style="width:${x}%"></div>
        </div>
        <span class="text-xs w-8 text-right">${l[u]}pts</span>
      </div>`}).join("")}function k(){document.querySelectorAll(".player-btn").forEach(e=>{const o=parseInt(e.getAttribute("data-players")||"0",10)===b;e.classList.toggle("border-amber-500",o),e.classList.toggle("bg-amber-50",o),e.classList.toggle("text-amber-700",o),e.classList.toggle("border-gray-200",!o),e.classList.toggle("text-gray-600",!o)})}function M(){document.querySelectorAll(".mode-btn").forEach(e=>{const o=e.getAttribute("data-mode")===E;e.classList.toggle("border-green-500",o),e.classList.toggle("bg-green-50",o),e.classList.toggle("text-green-700",o),e.classList.toggle("border-gray-200",!o),e.classList.toggle("text-gray-600",!o)})}function B(){const e=document.getElementById("expansionSelect");e&&b>=5&&(w="expansion56",e.value="expansion56")}function V(){const e=$("beginner","base",{});f=e.tiles,y=e.numbers,g=e.mapKey||"base4player",L(f,y,g),v(f,y,g)}function W(){const e=new URL(`${window.location.origin}${window.location.pathname}`),t=G(f,y);return e.searchParams.set("minBalance",String(targetValue())),e.searchParams.set("board",t),e.searchParams.set("mode",E),e.searchParams.set("exp",w),e.searchParams.set("players",String(b)),e.toString()}let searchActive = false;
let stopRequested = false;
function targetValue() {
 const input = document.getElementById('minBalance');
 return Math.round(Math.max(1, Math.min(10, Number(input?.value) || 1)) * 10) / 10;
}
function syncTarget(value) {
 const normalized = Math.round(Math.max(1, Math.min(10, Number(value) || 1)) * 10) / 10;
 document.getElementById('minBalance').value = normalized;
 document.getElementById('minBalanceRange').value = normalized;
 document.getElementById('targetReadout').textContent = normalized.toFixed(1) + ' / 10';
}
async function z() {
 if (document.documentElement.dataset.game === 'seafarers') return;
 if (searchActive) return;
 B();
 const target = targetValue(); syncTarget(target);
 const mode = E, expansion = w;
 const status = document.getElementById('searchStatus');
 const stop = document.getElementById('btnStop');
 const rules = mode === 'tournament' ? {no68Adjacent:true,noSameNumberAdjacent:true,noSameResourceAdjacent:true} : {
  no68Adjacent:document.getElementById('no68')?.checked??true,
  noSameNumberAdjacent:document.getElementById('noSameNum')?.checked??false,
  noSameResourceAdjacent:document.getElementById('noSameRes')?.checked??false
 };
 if (mode === 'beginner') {
  const fixed = $('beginner', 'base', {});
  const score = Number(q(fixed.tiles, fixed.numbers, fixed.mapKey));
  if(score < target) { status.textContent = `Beginner layout is fixed at ${score.toFixed(1)}/10. Lower the target or choose another mode.`; return; }
  f=fixed.tiles; y=fixed.numbers; g=fixed.mapKey; L(f,y,g); v(f,y,g);
  status.textContent = `Fixed beginner board · ${score.toFixed(1)}/10 ≥ ${target.toFixed(1)}/10`; return;
 }
 searchActive=true; stopRequested=false; stop.hidden=false;
 const controls = [...document.querySelectorAll('.game-tab,.player-btn,.mode-btn,#expansionSelect,#no68,#noSameNum,#noSameRes,#minBalance,#minBalanceRange,#btnGenerate,#btnShare')];
 const disabled = controls.map(el=>el.disabled); controls.forEach(el=>el.disabled=true);
 const set = expansion === 'expansion56' ? h.expansion56 : h.baseGame;
 const map = expansion === 'expansion56' ? 'expansion56' : 'base4player';
 let attempts=0, best=0;
 const started=performance.now();
 status.textContent='Searching…';
 try {
  await new Promise(resolve=>setTimeout(resolve,0));
  while(!stopRequested) {
   const slice=performance.now();
   do {
    const tiles=S(set.tiles), numbers=j(tiles,set.numbers); attempts++;
    if(mode !== 'random' && !F(tiles,numbers,map,rules)) continue;
    const score=Number(q(tiles,numbers,map)); best=Math.max(best,score);
    if(score >= target) {
     f=tiles; y=numbers; g=map; L(f,y,g); v(f,y,g);
     status.textContent=`Found ${score.toFixed(1)}/10 ≥ ${target.toFixed(1)}/10 · ${attempts.toLocaleString()} attempts · ${((performance.now()-started)/1000).toFixed(1)}s`;
     return;
    }
   } while(performance.now()-slice < 12 && !stopRequested);
   status.textContent=`Searching · ${attempts.toLocaleString()} attempts · best ${best ? best.toFixed(1) : '—'}/10 · target ${target.toFixed(1)}/10`;
   await new Promise(resolve=>setTimeout(resolve,0));
  }
  status.textContent=`Stopped · ${attempts.toLocaleString()} attempts. Previous board kept.`;
 } finally {
  searchActive=false; stop.hidden=true;
  controls.forEach((el,index)=>el.disabled=disabled[index]);
 }
}
document.addEventListener('DOMContentLoaded',()=>{
 const query = new URLSearchParams(location.search).get('minBalance');
 syncTarget(query === null ? 5 : query);
 document.getElementById('minBalance').addEventListener('change',e=>syncTarget(e.target.value));
 document.getElementById('minBalanceRange').addEventListener('input',e=>syncTarget(e.target.value));
 document.getElementById('btnStop').addEventListener('click',()=>{stopRequested=true;});
});
document.getElementById("btnGenerate")?.addEventListener("click",z);document.querySelectorAll(".player-btn").forEach(e=>{e.addEventListener("click",()=>{b=parseInt(e.getAttribute("data-players")||"4",10),k(),B()})});document.querySelectorAll(".mode-btn").forEach(e=>{e.addEventListener("click",()=>{E=e.getAttribute("data-mode")||"fair",M()})});document.getElementById("expansionSelect")?.addEventListener("change",e=>{const t=e.target;t&&"value"in t&&(w=t.value)});document.getElementById("btnShare")?.addEventListener("click",()=>{if(document.documentElement.dataset.game==="seafarers")return;navigator.clipboard.writeText(W()).then(()=>{const e=document.getElementById("toast");e&&(e.classList.remove("hidden"),setTimeout(()=>e.classList.add("hidden"),2500))})});function X(){const e=new URLSearchParams(window.location.search),t=e.get("players");if(t){const s=parseInt(t,10);s>=3&&s<=6&&(b=s)}const o=e.get("mode");o&&["fair","random","beginner","tournament"].includes(o)&&(E=o);const r=e.get("exp")||e.get("expansion");(r==="expansion56"||r==="base")&&(w=r);const n=document.getElementById("expansionSelect");n&&(n.value=w),k(),M()}window.addEventListener("DOMContentLoaded",()=>{X(),B();const t=new URLSearchParams(window.location.search).get("board");if(t){const o=K(t),r=o?.length??0;if(o&&(r===19||r===30)){f=o.map(a=>a.tile),y=o.map(a=>a.number),g=r===30?"expansion56":"base4player";const s=document.getElementById("expansionSelect");s&&(s.value=g==="expansion56"?"expansion56":"base"),w=s?.value||"base",L(f,y,g),v(f,y,g);return}const n=new URL(window.location.href);n.searchParams.delete("board"),history.replaceState({},"",n.toString())}V()});

export function getBaseSettings(){return {players:b,mode:E,minBalance:targetValue(),rules:{no68:document.getElementById("no68")?.checked??true,noSameNumber:document.getElementById("noSameNum")?.checked??false,noSameTerrain:document.getElementById("noSameRes")?.checked??false}};}
