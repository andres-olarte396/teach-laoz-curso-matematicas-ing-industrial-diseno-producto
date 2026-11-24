// Pipeline de tres etapas del proyecto con intermediarios propios del curso.
// Conserva los scripts compartidos y corrige el mapa de páginas usando Paged.js.
const fs=require('fs'),path=require('path'),cp=require('child_process'),Module=require('module');
const {pathToFileURL}=require('url');
const base=__dirname,repo=path.resolve(base,'../..'),build=path.join(base,'material/pdf_build');
fs.mkdirSync(build,{recursive:true});
const env=Object.fromEntries(fs.readFileSync(path.join(base,'.env'),'utf8').split(/\r?\n/).filter(l=>l&&!l.startsWith('#')).map(l=>{const p=l.indexOf('=');return[l.slice(0,p),l.slice(p+1)];}));
const output=path.resolve(repo,env.PDF_OUTPUT);
if(!output.startsWith(path.join(repo,'docs')+path.sep)) throw new Error('PDF_OUTPUT debe quedar dentro de docs.');
const raw=path.join(build,'preview.html'),fixed=path.join(build,'fixed.html');
function run(name,args){cp.execFileSync(process.execPath,[path.join(repo,'scripts/pdf',name),...args],{cwd:repo,stdio:'inherit'});}
console.log('[1/3] Conversor preview del proyecto (reemplazo local del binario make-pdf).');
run('md-to-preview-html.js',[path.join(base,'CURSO_COMPLETO.md'),raw,base]);
let html=fs.readFileSync(raw,'utf8');
// Las imágenes relativas no se resolverían al imprimir desde un HTML temporal.
html=html.replace(/<img([^>]*?)src="([^":]+)"/g,(match,attrs,src)=>{
 const file=path.resolve(base,src);if(!fs.existsSync(file))throw new Error(`Imagen ausente ${src}`);
 const mime=path.extname(file)==='.svg'?'image/svg+xml':'image/png';
 return `<img${attrs}src="data:${mime};base64,${fs.readFileSync(file).toString('base64')}"`;
});
html=html.replace(/href="([^"]+)"/g,(match,href)=>{
 if(/^(https?:|mailto:|#|data:)/.test(href))return match;
 const file=path.resolve(base,href);if(!fs.existsSync(file))throw new Error(`Enlace local ausente ${href}`);
 return `href="${pathToFileURL(file).href}"`;
});
html=html.replace(/<div>[^<]*<\/div>\s*<\/section>/,'<div>4 de octubre de 2026</div>\n</section>');
// Identificador de cierre del índice para verificación posterior por DOM.
fs.writeFileSync(raw,html);
console.log('[2/3] Corrección de portada, índice, fuentes y marca.');run('fix-toc-html.js',[raw,fixed,base]);
html=fs.readFileSync(fixed,'utf8')
 .replace(/<link[^>]*href="https:\/\/fonts\.[^"]*"[^>]*>/g,'')
 .replace(/'Playfair Display'/g,"'Georgia'").replace(/'Inter'/g,"'Arial'").replace(/'JetBrains Mono'/g,"'Consolas'")
 .replace('</style>',`\n/* Fuentes locales: exportación sin dependencias de red. */\n.tl-main-title{font-size:31pt!important;}\nmain img{max-height:220px;object-fit:contain;}\nh4{break-after:avoid;}\ntd,th{overflow-wrap:anywhere;}\n</style>`);
fs.writeFileSync(fixed,html);
console.log('[3/3] Dos pasadas con numeración de Paged.js.');
const generator=path.join(repo,'scripts/pdf/generate-with-toc-pages.js');
let code=fs.readFileSync(generator,'utf8');
// Modificaciones en memoria: no se cambian archivos compartidos del usuario.
code=code.replace("headless: 'new',","headless: 'new',\n    pipe: true,");
code=code.replace('await window.PagedPolyfill.preview();','await document.fonts.ready;\n      await window.PagedPolyfill.preview();');
code=code.replace('await page.pdf({ path: pdfPath, preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });',`await page.emulateMediaType('print');
    await page.addStyleTag({content:'@media print { @page { size: A4; margin: 0; } .pagedjs_page { margin: 0 !important; box-shadow: none !important; break-after: page; } }'});
    await page.pdf({ path: pdfPath, preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
    global.courseDomPageMap = await page.evaluate(() => {
      const result = {};
      Array.from(document.querySelectorAll('.pagedjs_page')).forEach((page, index) => {
        page.querySelectorAll('[id^="toc-"]').forEach(heading => { if (!(heading.id in result)) result[heading.id] = index+1; });
      });
      return result;
    });`);
code=code.replace('const pageMap = buildPageMap(tocEntries, pageTexts, contentStartIdx);',`const pageMap = new Map(Object.entries(global.courseDomPageMap || {}));
    if(pageMap.size !== tocEntries.length) throw new Error('Mapa incompleto del índice: '+pageMap.size+'/'+tocEntries.length);
    fs.writeFileSync(${JSON.stringify(path.join(build,'paginas_indice.json'))}, JSON.stringify({entries:tocEntries,pageMap:Object.fromEntries(pageMap),pages:pageTexts.length},null,2));`);
code=code.replace('await printHtml(browser, fixedHtml, outputPdf);',`await printHtml(browser, fixedHtml, outputPdf);
    const after = global.courseDomPageMap;
    const drift = [...pageMap].filter(([id,page])=>after[id]!==page);
    if(drift.length) throw new Error('La segunda pasada cambió la paginación: '+JSON.stringify(drift));
    fs.writeFileSync(${JSON.stringify(path.join(build,'final.html'))},fixedHtml);`);
process.argv=[process.execPath,generator,fixed,output];
const moduleInstance=new Module(generator,module);moduleInstance.filename=generator;moduleInstance.paths=Module._nodeModulePaths(path.dirname(generator));moduleInstance._compile(code,generator);
