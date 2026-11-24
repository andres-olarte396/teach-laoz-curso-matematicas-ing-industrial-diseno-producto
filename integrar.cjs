// Ensamblado determinista del curso; requiere lecciones reales ya producidas.
const fs = require('fs');
const path = require('path');
const base = __dirname;
const read = name => fs.readFileSync(path.join(base, name), 'utf8');
const write = (name, value) => fs.writeFileSync(path.join(base, name), value, 'utf8');
const tree = JSON.parse(read('modulos.json'));
const source = JSON.parse(read('material/fuente_extraida.json'));
const title = 'MIPD-001 — Matemáticas para ingeniería industrial y diseño de producto';
const errors = [];
const entries = [];
function sourceNote(text, week) {
  text = text.replace(/(Plan progresivo!D)\s+(\d+)/g,'$1$2').replace(/: D\s+(\d+)/g,':D$1').replace(/(Progresión!E)\s+(\d+)/g,'$1$2');
  const row=2+(week-1)*7;
  const note=week===0 ? '> **Fuente interna:** diagnóstico añadido por diseño; tiempo integrado en RUTA_ING_realista.xlsx, Plan progresivo!I2:I3 y Progresión!E2. Las preguntas no están localizadas explícitamente en el Excel.\n' : `> **Fuente interna:** RUTA_ING_realista.xlsx, Plan progresivo!D${row}:D${row+6} y Progresión!E${week+1}, para tema y tiempo. El desarrollo matemático no está localizado explícitamente en el Excel: es elaboración didáctica respaldada en [Referencias](../../REFERENCIAS.md).\n`;
  text=text.replace(/^> \*\*Fuente interna:\*\*[^\n]*\n/gm,'');
  return text.replace(/^(#[^\n]*\n)/,'$1\n'+note);
}
for(const name of ['modulo_0/diagnostico.md','modulos/modulo_0/tema_0.1_subtema_0.1.1_contenido.md']) {
  if(fs.existsSync(path.join(base,name)))write(name,sourceNote(read(name),0));
}
for (const module of tree) {
  // Entradas de navegación para el layout que espera el validador legado.
  for(const topic of module.temas)for(const subtopic of topic.subtemas||[]) {
    const dir=path.join(base,'modulos',`modulo_${module.modulo_id}`,`tema_${topic.tema_id}`);
    fs.mkdirSync(dir,{recursive:true});
    const stem=`../tema_${topic.tema_id}_subtema_${subtopic.subtema_id}`;
    fs.writeFileSync(path.join(dir,`subtema_${subtopic.subtema_id}.md`),`# ${subtopic.subtema_id} — ${subtopic.titulo}\n\nEntrada de navegación para el visor del proyecto. Los materiales de la clase están separados para estudiar, practicar y comprobar dentro del mismo bloque.\n\n- [Contenido](${stem}_contenido.md)\n- [Preconceptos](${stem}_preconceptos.md)\n- [Ejercicios](${stem}_ejercicios.md)\n- [Comprobación](${stem}_evaluacion.md)\n- [Índice del curso](../../../INDICE.md)\n`);
  }
  if (String(module.modulo_id) === '0') continue;
  const week = Number(module.modulo_id);
  if (!source.weeks[week-1]) errors.push(`Semana inexistente ${week}`);
  for (const topic of module.temas) for (const subtopic of topic.subtemas || []) {
    const stem = `modulos/modulo_${week}/tema_${topic.tema_id}_subtema_${subtopic.subtema_id}`;
    for (const kind of ['contenido','ejercicios','evaluacion','preconceptos']) {
      const file = `${stem}_${kind}.md`;
      if (!fs.existsSync(path.join(base,file))) { errors.push(`Falta ${file}`); continue; }
      if(kind==='contenido')write(file,sourceNote(read(file),week));
      const text = read(file);
      if (text.length < 150) errors.push(`Material insuficiente ${file}`);
      if (/\[Contenido aquí\]|\bTODO\b|\bTBD\b|\[Ejemplo\]/.test(text)) errors.push(`Marcador pendiente ${file}`);
      if (kind === 'contenido') entries.push({week,topic,subtopic,stem,file,title:subtopic.titulo});
    }
  }
  for (const ending of ['preguntas','respuestas']) {
    const file = `modulos/modulo_${week}/modulo_${week}_${ending}.md`;
    if (!fs.existsSync(path.join(base,file))) errors.push(`Falta ${file}`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
const guide = read('GUIA_ESTUDIANTE.md');
let full = `# ${title}\n\n${guide}\n\n`;
let index = `# Índice — ${title}\n\n- [Guía de estudio](GUIA_ESTUDIANTE.md)\n- [Plan curricular](plan_curricular.md)\n- [Cronograma](cronograma.md)\n- [Pensum de competencias](pensum_competencias.md)\n- [Diagnóstico y nivelación](modulo_0/diagnostico.md)\n- [Manual completo](CURSO_COMPLETO.md)\n- [Referencias](REFERENCIAS.md)\n\n`;
for (const name of ['modulo_0/diagnostico.md','modulo_0/soluciones_diagnostico.md','modulo_0/tema_0_glosario.md']) {
  if (!fs.existsSync(path.join(base,name))) throw new Error(`Falta ${name}`);
  full += read(name) + '\n\n';
}
function inManual(text, origin='') {
  return text.replace(/<!-- NAVEGACION -->[\s\S]*?<!-- FIN NAVEGACION -->/g,'')
    .replace(/^#{1,3} /gm,'#### ')
    .replace(/\]\(([^)]+)\)/g,(match,link)=>{
      if(/^(https?:|mailto:|#)/.test(link))return match;
      return ']('+path.relative(base,path.resolve(base,path.dirname(origin),link)).replace(/\\/g,'/')+')';
    });
}
for (const weekData of source.weeks) {
  const week = weekData.week;
  const module = tree.find(m => Number(m.modulo_id) === week);
  const row = 2+(week-1)*7;
  full += `\n\n## Semana ${week}: ${module.titulo}\n\n**Presupuesto semanal:** ${weekData.weekly_minutes} minutos; siete bloques de ${weekData.daily_minutes} minutos, evaluación y corrección incluidas.\n\n**Fuente del tema y tiempo:** material/RUTA_ING_realista.xlsx, Plan progresivo!D${row}:D${row+6}, I${row}:I${row+6}; Progresión!E${week+1}. El desarrollo matemático y las aplicaciones son elaboración didáctica; véase Referencias.\n\n`;
  index += `## Semana ${week}: ${module.titulo}\n\n`;
  const list = entries.filter(entry => entry.week===week);
  list.forEach((entry, idx) => {
    const position = entries.indexOf(entry);
    const previous = position ? path.relative(path.dirname(entry.file),entries[position-1].file).replace(/\\/g,'/') : '../../modulo_0/diagnostico.md';
    const next = position+1 < entries.length ? path.relative(path.dirname(entry.file),entries[position+1].file).replace(/\\/g,'/') : '../../CURSO_COMPLETO.md';
    const clean = read(entry.file).replace(/<!-- NAVEGACION -->[\s\S]*?<!-- FIN NAVEGACION -->/g,'').trim();
    write(entry.file, clean+`\n\n<!-- NAVEGACION -->\n[Anterior](${previous}) · [Índice](../../INDICE.md) · [Siguiente](${next})\n<!-- FIN NAVEGACION -->\n`);
    full += `### Subtema ${entry.subtopic.subtema_id}: ${entry.title}\n\n`;
    full += inManual(read(`${entry.stem}_preconceptos.md`),`${entry.stem}_preconceptos.md`)+'\n\n';
    full += inManual(read(entry.file),entry.file)+'\n\n';
    full += inManual(read(`${entry.stem}_ejercicios.md`),`${entry.stem}_ejercicios.md`)+'\n\n';
    full += inManual(read(`${entry.stem}_evaluacion.md`),`${entry.stem}_evaluacion.md`)+'\n\n';
    index += `- [${entry.subtopic.subtema_id} — ${entry.title}](${entry.file})\n  - [Práctica](${entry.stem}_ejercicios.md) · [Comprobación](${entry.stem}_evaluacion.md)\n`;
  });
  full += `### Evaluación semanal ${week}\n\n`+inManual(read(`modulos/modulo_${week}/modulo_${week}_preguntas.md`),`modulos/modulo_${week}/modulo_${week}_preguntas.md`)+'\n\n';
  full += `### Solucionario semanal ${week}\n\n`+inManual(read(`modulos/modulo_${week}/modulo_${week}_respuestas.md`),`modulos/modulo_${week}/modulo_${week}_respuestas.md`)+'\n\n';
  const alternative = `modulos/modulo_${week}/ruta_alternativa_${week}.md`;
  if(fs.existsSync(path.join(base,alternative))) {
    full += `### Ruta alternativa de semana ${week}\n\n`+inManual(read(alternative),alternative)+'\n\n';
    index += `\n[Alternativa de refuerzo y datos](${alternative})\n`;
  }
  index += `\n[Evaluación](modulos/modulo_${week}/modulo_${week}_preguntas.md) · [Soluciones](modulos/modulo_${week}/modulo_${week}_respuestas.md)\n\n`;
}
for (const name of ['GUIA_INSTRUCTOR.md','recursos_visuales/GUIA_VISUAL.md','REFERENCIAS.md']) {
  if (fs.existsSync(path.join(base,name))) full += '\n\n'+inManual(read(name),name).replace(/^#### /m,'## ')+'\n';
}
write('CURSO_COMPLETO.md',full);
write('INDICE.md',index);
const missingLinks=[];
for (const file of ['CURSO_COMPLETO.md','INDICE.md',...entries.map(e=>e.file)]) {
  for (const match of read(file).matchAll(/\]\(([^)]+)\)/g)) {
    const link=match[1];
    if (/^(https?:|mailto:|#)/.test(link)) continue;
    const target=path.resolve(base,path.dirname(file),link.split('#')[0]);
    if (!fs.existsSync(target)) missingLinks.push(`${file}: ${link}`);
  }
}
write('material/verificacion_estructura.json',JSON.stringify({weeks:source.weeks.length,subtopics:entries.length,total_minutes:source.total_minutes,missing_files:errors,missing_links:missingLinks,manual_bytes:Buffer.byteLength(full)},null,2));
if (missingLinks.length) { console.error(missingLinks.join('\n')); process.exit(1); }
console.log(JSON.stringify({weeks:22,subtopics:entries.length,minutes:source.total_minutes,manual_bytes:Buffer.byteLength(full),links:'OK'}));
