# Reporte de trazabilidad interna — MIPD-001

Versión 1 · 2026-10-04 · Auditoría del rol 15, según el workflow del proyecto.

**Resultado: 22 de 22 temas matemáticos originales conservados, en orden, con 3920 minutos (65 h 20 min) y 154 sesiones. No se detectaron omisiones curriculares dentro del alcance de matemáticas.** Esta cobertura del temario no significa que las explicaciones nuevas aparezcan literalmente en el Excel.

## Fuente revisada y alcance

Se revisó la extracción completa de las tres hojas de [RUTA_ING_realista.xlsx](material/RUTA_ING_realista.xlsx), incluidas sus notas metodológicas y las columnas de otras materias. La lectura de celdas se conserva en [fuente_extraida.json](material/fuente_extraida.json). El archivo tiene 42448 bytes; SHA-256: ad9bd3d26d60f6c933d6a7889f82a8c7c0b47f9f4f8824a3544eabe79115620a. Hojas: Plan progresivo, Progresión y Cómo estudiar. Un libro de cálculo no tiene paginación documental estable: se citan hojas y celdas, sin inventar páginas.

El usuario aportó un temario con tiempos, no un manual de demostraciones. Los 66 subtemas semanales desarrollan los 22 rótulos del Excel. El diagnóstico 0.1.1 es una incorporación didáctica, incluida en I2:I3 y E2; no es una prueba encontrada en el archivo fuente. Las definiciones, explicaciones, ejemplos, ejercicios, rúbricas, aplicaciones industriales y simulaciones son elaboración del curso y se sustentan externamente en [REFERENCIAS.md](REFERENCIAS.md). El respaldo textual de ese desarrollo matemático **no está localizado explícitamente en el Excel**.

## Cobertura fuente → curso

| Semana | Tema original | Min/día | Min/semana | Celdas fuente | Subtemas destino |
|---:|---|---:|---:|---|---|
| 1 | Fracciones: suma y resta | 15 | 105 | Plan progresivo!D2:D8; I2:I8; Progresión!E2 | 1.1.1–1.1.3 |
| 2 | Fracciones: multiplicación y división | 15 | 105 | Plan progresivo!D9:D15; I9:I15; Progresión!E3 | 2.1.1–2.1.3 |
| 3 | Decimales y conversión entre fracciones y decimales | 15 | 105 | Plan progresivo!D16:D22; I16:I22; Progresión!E4 | 3.1.1–3.1.3 |
| 4 | Potenciación y radicación | 15 | 105 | Plan progresivo!D23:D29; I23:I29; Progresión!E5 | 4.1.1–4.1.3 |
| 5 | Notación científica y proporciones | 15 | 105 | Plan progresivo!D30:D36; I30:I36; Progresión!E6 | 5.1.1–5.1.3 |
| 6 | Regla de tres y porcentajes | 15 | 105 | Plan progresivo!D37:D43; I37:I43; Progresión!E7 | 6.1.1–6.1.3 |
| 7 | Lenguaje algebraico y expresiones algebraicas | 20 | 140 | Plan progresivo!D44:D50; I44:I50; Progresión!E8 | 7.1.1–7.1.3 |
| 8 | Operaciones con polinomios | 20 | 140 | Plan progresivo!D51:D57; I51:I57; Progresión!E9 | 8.1.1–8.1.3 |
| 9 | Factorización I (factor común, diferencia de cuadrados) | 20 | 140 | Plan progresivo!D58:D64; I58:I64; Progresión!E10 | 9.1.1–9.1.3 |
| 10 | Factorización II (trinomios) | 20 | 140 | Plan progresivo!D65:D71; I65:I71; Progresión!E11 | 10.1.1–10.1.3 |
| 11 | Ecuaciones lineales de primer grado | 25 | 175 | Plan progresivo!D72:D78; I72:I78; Progresión!E12 | 11.1.1–11.1.3 |
| 12 | Sistemas de ecuaciones lineales (2x2) | 25 | 175 | Plan progresivo!D79:D85; I79:I85; Progresión!E13 | 12.1.1–12.1.3 |
| 13 | Ecuaciones cuadráticas | 30 | 210 | Plan progresivo!D86:D92; I86:I92; Progresión!E14 | 13.1.1–13.1.3 |
| 14 | Funciones: concepto y función lineal | 30 | 210 | Plan progresivo!D93:D99; I93:I99; Progresión!E15 | 14.1.1–14.1.3 |
| 15 | Función cuadrática y otras funciones | 30 | 210 | Plan progresivo!D100:D106; I100:I106; Progresión!E16 | 15.1.1–15.1.3 |
| 16 | Trigonometría: razones trigonométricas | 30 | 210 | Plan progresivo!D107:D113; I107:I113; Progresión!E17 | 16.1.1–16.1.3 |
| 17 | Geometría analítica: plano cartesiano y rectas | 35 | 245 | Plan progresivo!D114:D120; I114:I120; Progresión!E18 | 17.1.1–17.1.3 |
| 18 | Repaso dirigido: álgebra y ecuaciones (corrige puntos débiles) | 35 | 245 | Plan progresivo!D121:D127; I121:I127; Progresión!E19 | 18.1.1–18.1.3 |
| 19 | Repaso dirigido: funciones y trigonometría | 35 | 245 | Plan progresivo!D128:D134; I128:I134; Progresión!E20 | 19.1.1–19.1.3 |
| 20 | (Opcional) Introducción a límites | 35 | 245 | Plan progresivo!D135:D141; I135:I141; Progresión!E21 | 20.1.1–20.1.3 |
| 21 | (Opcional) Introducción a derivadas | 40 | 280 | Plan progresivo!D142:D148; I142:I148; Progresión!E22 | 21.1.1–21.1.3 |
| 22 | Repaso general y puntos débiles | 40 | 280 | Plan progresivo!D149:D155; I149:I155; Progresión!E23 | 22.1.1–22.1.3 |

Cada semana usa seis microclases en tres parejas y un domingo de evaluación/corrección. La suma semanal coincide con las celdas I y con Progresión E; el total es 3920. El módulo 0 tiene cero minutos adicionales: sus veinte minutos se contabilizan dentro de 1.1.1, no se suman de nuevo. No se suprimieron fracciones, ecuaciones, geometría, repasos ni los dos opcionales del original.

## Cobertura curso → fuente y sincronización

La estructura contiene 23 módulos y 67 subtemas: uno diagnóstico más 66 semanales. Los 67 subtemas tienen una nota de fuente interna bajo su encabezado, con la aclaración explícita de que el desarrollo matemático no está localizado en el Excel; se cotejaron las 67 notas del manual con los archivos de contenido. Los 66 archivos semanales identifican su rango D y su celda E. El diagnóstico identifica I2:I3 y E2. La fuente de minutos diarios es la columna I, cotejada con Progresión E. Las citas distinguen el origen del temario y tiempo del origen de las explicaciones. El manual incluye las 22 semanas, sus 66 contenidos, bancos de práctica y comprobaciones, preguntas, respuestas y rutas alternativas. Los mismos rangos aparecen en la estructura curricular y en el manual; la integración determinista conserva las citas de los archivos individuales. [verificacion_estructura.json](material/verificacion_estructura.json) registra archivos y enlaces locales sin faltantes en la pasada de ensamblado.

Los subtemas se agrupan debajo del rótulo semanal y no se atribuyen títulos nuevos al Excel. Esto resuelve la asociación bidireccional sin fingir un respaldo literal para matemáticas que la fuente no desarrolla.

## Decisiones y adaptaciones explícitas

- La referencia metodológica 20/50/30 de Plan progresivo P2/P16 se conserva como aprender, practicar/recuperar y explicar/corregir. El curso publica los minutos concretos por actividad; sus proporciones pueden variar y la evaluación sustituye práctica, sin aumentar el bloque.
- La conversación dominical extra de 10–15 minutos de Plan progresivo Q8 y Cómo estudiar B11 se documenta como opcional y externa a los 3920 minutos. La corrección esencial está dentro del domingo.
- Cómo estudiar B7/B12/B13 distingue adherencia, cansancio y continuidad. Se conserva la regla de no compensar doblando trabajo; el mínimo por fatiga sostiene hábito y no acredita dominio. El criterio inicial 8/10 con explicación pertenece al diseño y no es una exigencia matemática del Excel.
- Límites y derivadas permanecen opcionales (Cómo estudiar B14 y semanas 20/21). La alternativa de estadística y refuerzo ocupa exactamente 245 y 280 minutos respectivamente; reemplaza esas semanas si se elige y no se acumula con ellas. Es una adición documentada para la audiencia, apoyada en referencias adicionales.
- Las fechas originales se conservan en el material fuente; el cronograma utiliza semanas relativas hasta acordar inicio. No se presentan nuevas fechas como si vinieran del Excel.

## Exclusiones deliberadas

Se excluyen Programación, Diseño/Creatividad, IA/Prompt Engineering e Inglés de Plan progresivo E:H y sus tiempos J:M en Progresión: el usuario solicitó desarrollar matemáticas, aunque su carrera también incluya diseño. El máximo de dos horas de la hoja Cómo estudiar se refiere al programa de todas las materias; no se impone como dos horas de matemáticas. Se excluye la automatización de celdas azules y fórmulas del Excel como contenido lectivo: es operación del calendario, no un tema matemático solicitado. No se omiten sus efectos al contabilizar minutos.

## Límites de esta validación

La cobertura de 100% se limita a los 22 temas matemáticos y sus presupuestos, no a todas las materias del libro. La profundidad de los 67 subtemas es una decisión didáctica. La revisión documental y aritmética no equivale a un pilotaje con el estudiante, a certificación universitaria ni a demostrar que alcanzará dominio en 22 semanas. La evaluación y la reparación deberán orientar los ajustes de carga sin añadir trabajo oculto.
