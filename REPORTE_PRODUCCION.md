# Reporte de producción — MIPD-001

Fecha de diseño y cierre: 2026-10-04, America/Bogota. Flujo: `.agent/workflows/0-manager-temario.md` → validación curricular → nivelación → producción → enriquecimiento → integración → auditorías → PDF.

## Estado del proyecto

- Estrategia completada: plan curricular, JSON, CSV, pensum, cronograma y configuración.
- Fuente registrada: copia intacta del Excel, extracción de sus tres hojas, tamaño y SHA-256.
- Producción completada: diagnóstico transversal y 22 módulos semanales; 67 subtemas en el árbol curricular.
- Material semanal: 66 contenidos, 66 preconceptos, 66 bancos de práctica y 66 comprobaciones; 198 ejercicios con soluciones.
- Evaluación: 22 cuestionarios semanales con 22 solucionarios; corrección incluida en el bloque dominical.
- Adaptación: tres rutas de apoyo y dificultad; alternativas de semanas 20 y 21 dentro de sus presupuestos.
- Enriquecimiento: tres simulaciones HTML, tres SVG y dos diagramas Mermaid incorporados donde son pertinentes.
- Integración: manual completo e índice; enlaces locales comprobados sin destinos ausentes.
- Integridad matemática y trazabilidad: reportes de roles 13 y 15 finalizados; cero errores críticos pendientes en los cálculos revisados.
- Manual PDF: 314 páginas, portada separada del índice, 156 entradas con destino físico cotejado y 67 notas de fuente; sin páginas vacías. Revisión visual de portada, índice y páginas representativas de aritmética, álgebra, funciones, trigonometría, cálculo, proyecto y referencias.
- Enlaces del PDF: 291 referencias locales apuntan al material del curso, con destinos existentes; se corrigieron las rutas temporales sin modificar texto ni geometría de las páginas.

## Entregables

| Archivo | Uso |
|---|---|
| [README.md](README.md) | Punto de entrada y reproducción |
| [INDICE.md](INDICE.md) | Navegación por clases, ejercicios y evaluaciones |
| [CURSO_COMPLETO.md](CURSO_COMPLETO.md) | Manual editable integrado |
| [plan_curricular.md](plan_curricular.md) | Arquitectura y árbol curricular |
| [pensum_competencias.md](pensum_competencias.md) | Evidencias y perfil de salida |
| [cronograma.md](cronograma.md) | 154 bloques diarios |
| [GUIA_ESTUDIANTE.md](GUIA_ESTUDIANTE.md) | Rutas, tiempo y criterios de avance |
| [GUIA_INSTRUCTOR.md](GUIA_INSTRUCTOR.md) | Devolución y ajustes de refuerzo |
| [REFERENCIAS.md](REFERENCIAS.md) | Catálogo externo y excepciones bibliográficas |
| [REPORTE_VERIFICACION.md](REPORTE_VERIFICACION.md) | Revisión matemática y funcional |
| [REPORTE_VALIDACION.md](REPORTE_VALIDACION.md) | Auditoría bidireccional del Excel |
| [PDF](../../docs/cursos/matematicas/MIPD-001-Matematicas-Ingenieria-Diseno.pdf) | Manual editorial final |

## Validación y decisiones técnicas

El validador del proyecto reconoce 23 módulos, 23 temas y 67 subtemas; todos sus destinos existen. Se añadieron 67 entradas de navegación compatibles con el layout legado y se mantuvo el material completo en archivos planos de contenido/ejercicios/comprobación/preconceptos, como exige el Manager. No son lecciones duplicadas ni plantillas vacías.

El cotejo curricular compara las 22 etiquetas originales y sus minutos con la fuente. Siete bloques por semana suman exactamente 3920 minutos, incluyendo los 20 minutos del diagnóstico dentro de semana 1. Las rutas eligen actividades, sin sumar carga. El ensamblado registra sus resultados en `material/verificacion_estructura.json` y el cotejo físico del PDF en `material/pdf_build/verificacion_pdf.json`.

`scripts/generate_course.js` está mencionado en el workflow, pero no existe en este checkout. Se aplicó la alternativa de producción por agentes, con builders exclusivos del nuevo curso y un ensamblador determinista que rechaza material ausente y enlaces rotos. No se modificaron scripts compartidos ni cursos anteriores.

El pipeline PDF conserva tres etapas del proyecto: preview HTML, `fix-toc-html.js` y `generate-with-toc-pages.js` con dos pasadas. El binario original de make-pdf no está disponible; se usa su sustituto existente `md-to-preview-html.js`. El ejecutor específico evita sobreescribir los intermediarios compartidos, incorpora las imágenes locales, usa Georgia/Arial/Consolas por disponibilidad sin red y corrige la impresión física y el mapa de páginas en memoria. No se afirmó disponer de Playfair Display/Inter remotos: su carga produjo un error de maquetación y se retiró. La revisión final confirmó las 156 entradas sobre el PDF guardado.

## Resumen ejecutivo y límites

Se generó una nivelación de matemáticas aplicada a ingeniería industrial y diseño de producto, orientada a una persona adulta con formación técnica y más de diez años sin estudio formal. Conserva el orden, la carga creciente de 15 a 40 minutos y todos los temas del Excel. El proyecto final integra empaque ideal, material, porcentajes, costo y presupuesto; sus supuestos y unidades son explícitos.

Los tiempos todavía requieren pilotaje con la estudiante; se documentó autoestudio con posibilidad de acompañamiento como modalidad de diseño. No se recibió un programa de primer semestre específico. El curso no acredita equivalencia universitaria ni asegura dominio por completar el calendario. Si el refuerzo no cabe dentro de las semanas disponibles, corresponde extender la ruta.

La regla bibliográfica genérica de 70% de fuentes posteriores a 2022 no se cumplió: el mapa principal tiene 18,2%. Los reportes justifican referencias clásicas para resultados matemáticos estables y mantienen fechas verificadas; esta excepción se informa sin simular cumplimiento. Los ejercicios, definiciones y resultados sí se revisaron contra fuentes pertinentes y mediante recálculo.
