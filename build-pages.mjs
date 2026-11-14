import {cp,mkdir,readdir,readFile,rm,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const repo=(process.env.GITHUB_REPOSITORY||'local/catan-board-generator').split('/').at(-1);
let base=process.env.PAGES_BASE_PATH || (repo.endsWith('.github.io')?'/':`/${repo}/`);
const inner=base.replace(/^\/+|\/+$/g,'');base=inner?`/${inner}/`:'/';
if(!base.startsWith('/')||!base.endsWith('/')||base.includes('..')||!/^\/[a-zA-Z0-9_./-]*$/.test(base))throw Error('Invalid Pages base path');
const output=path.join(root,'_site');await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});await cp(path.join(root,'dist'),output,{recursive:true});
async function rewrite(dir){for(const entry of await readdir(dir,{withFileTypes:true})){
 const target=path.join(dir,entry.name);if(entry.isDirectory()){await rewrite(target);continue;}
 if(!/\.(html|js|css)$/.test(entry.name))continue;
 let text=await readFile(target,'utf8');
 // Rewrite only known site paths and the home path; leave HTTPS URLs and JS regexes intact.
 text=text.replace(/(["'`(])\/(?!\/)(?=(?:_astro|seafarers|expansion|guides|players)\/|favicon\.svg|[?"'`)])/g,(_,prefix)=>prefix+base);
 await writeFile(target,text);
}}
await rewrite(output);await writeFile(path.join(output,'.nojekyll'),'');
console.log(`Built GitHub Pages site at ${base}`);
