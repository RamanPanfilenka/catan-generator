import {SCENARIOS,TYPES,RULEBOOK,scenarioForPlayers,preset,adjacency,balance,islands,validateBoard} from './maps.js';
import {getBaseSettings} from '/_astro/index.astro_astro_type_script_index_0_lang.BAg9xp0y.js';
document.addEventListener('DOMContentLoaded',()=>{
const aliases={sfMinBalance:'minBalance',sfBalanceRange:'minBalanceRange',sfTarget:'targetReadout',sfStatus:'searchStatus',sfStop:'btnStop',sfGenerate:'btnGenerate',sfShare:'btnShare'};
const $=id=>document.getElementById(aliases[id]||id);
let active=false;
const shareField=document.createElement('input');shareField.id='sfShareUrl';shareField.className='sf-number';shareField.readOnly=true;shareField.hidden=true;shareField.setAttribute('aria-label','Ссылка на карту');shareField.style.cssText='width:100%;margin-top:10px;font-size:11px';document.getElementById('btnShare').parentElement.after(shareField);


let kind='scenario',worker=null,current=null,currentSettings=null,attempts=0;
const configControls=[...document.querySelectorAll('.game-tab,.player-btn,.mode-btn,#expansionSelect,#no68,#noSameNum,#noSameRes,#minBalance,#minBalanceRange,#btnGenerate,#sfNoGoldRed,#sfScenario,#minIslands,#maxIslands,[data-kind]')];
for(const scenario of SCENARIOS){const option=document.createElement('option');option.value=scenario.id;option.textContent=scenario.name;$('sfScenario').append(option);}
$('sfRulesLink').href=RULEBOOK;
function target(value){const v=Math.round(Math.min(10,Math.max(1,Number(value)||1))*10)/10;$('sfMinBalance').value=v;$('sfBalanceRange').value=v;$('sfTarget').value=v.toFixed(1)+' / 10';}
function readSettings(){const base=getBaseSettings();const rules=base.mode==='tournament'?{no68:true,noSameNumber:true,noSameTerrain:true,noGoldRed:$('sfNoGoldRed').checked}:base.mode==='random'?{no68:false,noSameNumber:false,noSameTerrain:false,noGoldRed:false}:{...base.rules,noGoldRed:$('sfNoGoldRed').checked};return {kind,scenario:$('sfScenario').value,players:base.players,mode:base.mode,setup:base.mode==='beginner'?'fixed':'shuffle',minBalance:base.minBalance,minIslands:Number($('minIslands').value),maxIslands:Number($('maxIslands').value),rules};}
function isFixed(options=readSettings()){return options.kind==='scenario'&&(options.setup==='fixed'||SCENARIOS.find(s=>s.id===options.scenario)?.fixedOnly);}
function sync(){
 if(!active)return;
 const options=readSettings(),scenario=SCENARIOS.find(s=>s.id===options.scenario),fixed=isFixed(options);
 $('scenarioControls').hidden=kind!=='scenario';$('worldControls').hidden=kind!=='random';
 $('sfGenerate').textContent=fixed?'📖 Показать сценарий':'🎲 Generate new board';
 $('setupHint').textContent=scenario.fixedOnly?'Пиратские острова используют фиксированную карту по книге.':fixed?'Гексы и числа как в книге. Минимальный порог не применяется.':'Форма островов и особые клетки сохраняются; ресурсы и числа перемешиваются внутри сценария.';
 document.querySelectorAll('[data-kind]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.kind===kind)));
 document.querySelectorAll('#sfScenario option').forEach(option=>{const entry=SCENARIOS.find(s=>s.id===option.value);option.textContent=scenarioForPlayers(entry,options.players).name;});
 document.getElementById('sfWorldSizeHint').textContent=options.players>=5?'63 клетки: 42 суши и 21 море. Комплект для 5–6 игроков.':'49 клеток: 30 суши и 19 моря.';

 $('sfNoGoldRed').disabled=fixed||options.mode==='random';
 $('sfMinBalance').disabled=fixed;$('sfBalanceRange').disabled=fixed;
 document.querySelector('[data-mode="beginner"]').disabled=kind==='random';
}
function lock(active){configControls.forEach(el=>el.disabled=active);$('sfStop').hidden=!active;$('sfShare').disabled=active||!current;if(!active)sync();}
function stop(message=true){if(worker){worker.terminate();worker=null;lock(false);if(message)$('sfStatus').textContent=`Поиск остановлен · ${attempts.toLocaleString('ru')} попыток. Предыдущая карта сохранена.`;}}
function svgEl(tag,attrs={}){const el=document.createElementNS('http://www.w3.org/2000/svg',tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));return el;}
function render(cells,settings){
 $('sfShareUrl').hidden=true;current=cells;currentSettings=JSON.parse(JSON.stringify(settings));const adj=adjacency(cells),score=balance(cells,adj),scenario=scenarioForPlayers(SCENARIOS.find(s=>s.id===settings.scenario),settings.players);
 $('sfScore').textContent=score.toFixed(1);$('sfRulesLink').href=scenario.rulebook;
 $('sfBoardTitle').textContent=settings.kind==='random'?'Новый мир · случайный архипелаг':scenario.name.replace(/^\d+\. /,'');
 $('sfBoardMeta').textContent=`${settings.players} ${settings.players<5?'игрока':'игроков'} · ${cells.length} клеток · ${islands(cells,adj).length} островов · ${isFixed(settings)?'По книге':'Случайная расстановка'}`;
 $('sfScenarioTitle').textContent=settings.kind==='random'?'Свой маршрут через архипелаг':`${scenario.en} · ${scenario.vp}`;
 $('sfDescription').textContent=settings.kind==='random'?'Случайное расположение всех гексов из комплекта базовой игры и «Мореходов». После генерации выберите родные острова и условия победы для своей партии.':scenario.description;
 $('sfMapNote').textContent=settings.kind==='random'?'Свободная карта: форма островов не фиксирована. Для рекомендованной расстановки портов используйте правила «Нового мира».':`Книга ${settings.players>=5?'расширения 5–6':'сценариев'}, стр. ${scenario.pages}. ${scenario.note||''} ${settings.scenario==='fog'?`${settings.players>=5?18:12} клеток остаются неизвестными; оценка относится только к открытым островам.`:settings.scenario==='cloth'?'Два числа около каждого островка обозначают деревни, а не производство ресурсов.':''}`;
 const counts={};cells.forEach(c=>counts[c.type]=(counts[c.type]||0)+1);$('sfStock').replaceChildren();Object.entries(counts).forEach(([type,n])=>{const chip=document.createElement('span');chip.textContent=`${TYPES[type].label.split(' · ')[0]}: ${n}`;$('sfStock').append(chip);});
 const maxX=Math.max(...cells.map(c=>c.x)),maxY=Math.max(...cells.map(c=>c.y));
 const svg=svgEl('svg',{viewBox:`-65 -70 ${maxX*100+130} ${maxY*100+140}`,role:'img','aria-label':`${$('sfBoardTitle').textContent}, ${cells.length} клеток, баланс ${score.toFixed(1)} из 10`});
 const defs=svgEl('defs');svg.append(defs);
 const corners=(x,y)=>Array.from({length:6},(_,i)=>{const angle=(i*60-30)*Math.PI/180;return `${x+57*Math.cos(angle)},${y+57*Math.sin(angle)}`}).join(' ');
 for(const [index,cell] of cells.entries()){
  const x=cell.x*100,y=cell.y*100,type=TYPES[cell.type],group=svgEl('g');const title=svgEl('title');title.textContent=`${type.label}${cell.number?', '+cell.number:''} (${cell.r+1}:${cell.c+1})`;group.append(title);
  const polygon=svgEl('polygon',{points:corners(x,y),class:cell.type==='s'?'sf-water':cell.type==='g'?'sf-gold':cell.type==='f'?'sf-fog':''});group.append(polygon);
  if(type.asset){const clip=svgEl('clipPath',{id:`clip-${index}`});clip.append(svgEl('polygon',{points:corners(x,y)}));defs.append(clip);group.append(svgEl('image',{href:`/_astro/${type.asset}`,x:x-57,y:y-57,width:114,height:114,preserveAspectRatio:'xMidYMid slice','clip-path':`url(#clip-${index})`}));group.append(svgEl('polygon',{points:corners(x,y),fill:'none',stroke:'#fff8e7','stroke-width':2}));}
  if(cell.type==='s'||cell.type==='f'||cell.type==='g') {const emoji=svgEl('text',{x,y:y+(cell.type==='g'?-30:5),'text-anchor':'middle','dominant-baseline':'middle',fill:cell.type==='s'?'#6bb7ce':cell.type==='g'?'#fff3ba':'#9aa9b6','font-size':cell.type==='s'?22:32,'font-weight':700});emoji.textContent=type.emoji;group.append(emoji);}
  if(cell.number){group.append(svgEl('circle',{cx:x,cy:y+2,r:23,class:'sf-chit'}));const number=svgEl('text',{x,y:y-1,class:`sf-num${[6,8].includes(cell.number)?' red':''}`});number.textContent=cell.number;group.append(number);const dots=svgEl('text',{x,y:y+17,class:'sf-dots'});dots.textContent='•'.repeat(6-Math.abs(7-cell.number));group.append(dots);}
  if(settings.kind==='scenario'&&settings.scenario==='cloth'){const village=scenario.villages.find(([id])=>id===cell.id);if(village){const label=svgEl('text',{x,y:y+13,'text-anchor':'middle','font-size':19,'font-weight':800,fill:'#664e2b',stroke:'#fff8de','stroke-width':4,'paint-order':'stroke'});label.textContent=village[1];group.append(label);}}
  svg.append(group);
 }
 $('sfMap').replaceChildren(svg);$('sfLegend').replaceChildren();
 Object.entries(TYPES).filter(([key])=>counts[key]).forEach(([key,type])=>{const item=document.createElement('span');if(type.asset){const img=document.createElement('img');img.src=`/_astro/${type.asset}`;img.alt='';item.append(img);}else item.append(type.emoji+' ');item.append(type.label.split(' · ')[0]);$('sfLegend').append(item);});
 $('sfShare').disabled=false;
}
function generate(){
 stop(false);target($('sfMinBalance').value);const options=readSettings();
 if(options.kind==='random'&&(!Number.isInteger(options.minIslands)||!Number.isInteger(options.maxIslands)||options.minIslands<2||options.maxIslands>8||options.minIslands>options.maxIslands)){$('sfStatus').textContent='Укажите целое число островов от 2 до 8; нижняя граница не может быть больше верхней.';return;}
 if(isFixed(options)){render(preset(options.scenario,options.players),options);$('sfStatus').textContent=`Фиксированная карта · ${balance(current).toFixed(1)}/10. Минимальный порог не применяется.`;return;}
 try{worker=new Worker('/seafarers/search-worker.js',{type:'module'});}catch{$('sfStatus').textContent='Не удалось запустить поиск. Обновите страницу в современном браузере.';return;}
 attempts=0;lock(true);$('sfStatus').textContent='Ищем карту с нужным балансом…';
 worker.onmessage=({data})=>{attempts=data.attempts;
  if(data.type==='found'){render(data.cells,options);$('sfStatus').textContent=`Найдено ${data.score.toFixed(1)}/10 ≥ ${options.minBalance.toFixed(1)}/10 · ${attempts.toLocaleString('ru')} попыток · ${(data.elapsed/1000).toFixed(1)} с`;worker.terminate();worker=null;lock(false);}
  else $('sfStatus').textContent=`Поиск · ${attempts.toLocaleString('ru')} попыток · лучший ${data.best?data.best.toFixed(1):'—'}/10 · цель ${options.minBalance.toFixed(1)}/10`;
 };
 worker.onerror=()=>{stop(false);$('sfStatus').textContent='Ошибка поиска. Предыдущая карта сохранена; попробуйте обновить страницу.';};worker.postMessage(options);
}
$('sfGenerate').addEventListener('click',()=>{if(active)generate();});$('sfStop').addEventListener('click',()=>{if(active)stop();});
$('sfMinBalance').addEventListener('change',e=>target(e.target.value));$('sfBalanceRange').addEventListener('input',e=>target(e.target.value));
document.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{kind=button.dataset.kind;if(kind==='random'&&getBaseSettings().mode==='beginner')document.querySelector('[data-mode="fair"]').click();sync();$('sfStatus').textContent='Настройки изменены. Нажмите кнопку генерации.';}));
$('sfScenario').addEventListener('change',()=>{sync();if(isFixed())generate();else $('sfStatus').textContent='Настройки изменены. Нажмите кнопку генерации.';});
document.querySelectorAll('.player-btn,.mode-btn').forEach(button=>button.addEventListener('click',()=>{if(active){sync();if(isFixed())generate();else $('sfStatus').textContent='Настройки изменены. Нажмите кнопку генерации.';}}));
$('sfShare').addEventListener('click',async()=>{
 if(!active||!current)return;const url=new URL('/',location.origin);url.searchParams.set('game','seafarers');const payload={v:1,settings:currentSettings,cells:current};url.hash='map='+encodeURIComponent(btoa(JSON.stringify(payload)));
 $('sfShareUrl').value=url.href;$('sfShareUrl').hidden=false;
 try{await navigator.clipboard.writeText(url.href);$('sfStatus').textContent='Ссылка скопирована: карта и настройки сохранены.';}catch{$('sfStatus').textContent='Скопируйте ссылку из поля под кнопкой.';$('sfShareUrl').focus();$('sfShareUrl').select();}
});
function restore(){
 try{
  if(!location.hash.startsWith('#map='))return false;const encoded=decodeURIComponent(location.hash.slice(5));if(encoded.length>18000)throw Error('Too large');const data=JSON.parse(atob(encoded)),s=data.settings;
  if(data.v!==1||!s||!['random','scenario'].includes(s.kind)||![3,4,5,6].includes(s.players)||!['fixed','shuffle'].includes(s.setup)||!SCENARIOS.some(x=>x.id===s.scenario)||!validateBoard(data.cells)||!Number.isFinite(s.minBalance)||s.minBalance<1||s.minBalance>10||!s.rules||typeof s.rules!=='object'||(s.mode&&!['fair','random','beginner','tournament'].includes(s.mode)))throw Error('Invalid board');
  kind=s.kind;$('sfScenario').value=s.scenario;document.querySelector(`[data-players="${s.players}"]`).click();document.querySelector(`[data-mode="${s.mode|| (s.setup==='fixed'?'beginner':'fair')}"]`)?.click();target(s.minBalance);$('minIslands').value=s.minIslands;$('maxIslands').value=s.maxIslands;
  for(const [id,key] of [['no68','no68'],['noSameNum','noSameNumber'],['noSameRes','noSameTerrain'],['sfNoGoldRed','noGoldRed']])$(id).checked=Boolean(s.rules[key]);sync();render(data.cells,s);$('sfStatus').textContent='Карта восстановлена из ссылки.';return true;
 }catch{$('sfStatus').textContent='Ссылка повреждена. Показана стандартная карта.';return false;}
}

const settingsPanel=document.getElementById('seafarersSettings'),boardPanel=document.getElementById('seafarersBoard');
const baseBoard=document.getElementById('boardWrapper');
const sizePanel=document.getElementById('expansionSelect').parentElement;
const baseLegend=document.getElementById('balanceStats').nextElementSibling;
const beginner=document.querySelector('[data-mode="beginner"]');
const originalBeginner={text:beginner.textContent,title:beginner.title};
const statusByTab={base:$('sfStatus').textContent,seafarers:'Выберите сценарий или случайный архипелаг.'};
let seafarersReady=false;
function selectGame(next,{updateUrl=true}={}){
 const nextActive=next==='seafarers';if(nextActive===active&&seafarersReady)return;
 const previous=active?'seafarers':'base';statusByTab[previous]=$('sfStatus').textContent;
 stop(false);active=nextActive;document.documentElement.dataset.game=next;
 settingsPanel.hidden=!active;boardPanel.hidden=!active;baseBoard.hidden=active;sizePanel.hidden=active;baseLegend.hidden=active;
 document.getElementById('balanceStats').classList.toggle('seafarers-hidden',active);
 document.getElementById('generatorSettings').setAttribute('aria-labelledby',active?'seafarersTab':'baseGameTab');
 document.querySelectorAll('.game-tab').forEach(tab=>{const selected=tab.dataset.game===next;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
 beginner.textContent=active?'📖 По книге':originalBeginner.text;beginner.title=active?'Фиксированная раскладка сценария':originalBeginner.title;
 document.querySelectorAll('.player-btn').forEach(button=>button.disabled=false);
 $('sfMinBalance').disabled=false;$('sfBalanceRange').disabled=false;beginner.disabled=false;
 $('sfGenerate').textContent='🎲 Generate new board';$('sfShare').disabled=false;$('sfShareUrl').hidden=true;
 if(active){

  sync();
  if(!seafarersReady){seafarersReady=true;if(!restore())generate();}
  else $('sfStatus').textContent=statusByTab.seafarers;
 }else $('sfStatus').textContent=statusByTab.base;
 if(updateUrl){const url=new URL(location.href);if(active)url.searchParams.set('game','seafarers');else {url.searchParams.delete('game');url.hash='';}history.replaceState({},'',url);}
}
document.querySelectorAll('.game-tab').forEach(tab=>{
 tab.addEventListener('click',()=>selectGame(tab.dataset.game));
 tab.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const selected=event.key==='Home'?'base':event.key==='End'?'seafarers':active?'base':'seafarers';selectGame(selected);document.querySelector(`.game-tab[data-game="${selected}"]`).focus();}});
});
// Header and footer expansion links select the same embedded tab without navigation.
document.querySelectorAll('a[href="/expansion/seafarers/"]').forEach(link=>{link.href='/?game=seafarers';link.addEventListener('click',event=>{event.preventDefault();selectGame('seafarers');document.getElementById('seafarersTab').scrollIntoView({block:'start',behavior:'smooth'});});});
if(new URLSearchParams(location.search).get('game')==='seafarers'||location.hash.startsWith('#map='))selectGame('seafarers',{updateUrl:false});
else {document.documentElement.dataset.game='base';active=false;}
window.addEventListener('pagehide',()=>stop(false));
window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#map=')){selectGame('seafarers');restore();}});

});
