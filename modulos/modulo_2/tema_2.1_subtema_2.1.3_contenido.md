# 2.1.3: Cantidades de material y reparto en lotes

> **Fuente interna:** RUTA_ING_realista.xlsx, Plan progresivo!D9:D15 y Progresión!E3, para tema y tiempo. El desarrollo matemático no está localizado explícitamente en el Excel: es elaboración didáctica respaldada en [Referencias](../../REFERENCIAS.md).



Tiempo: 30 min en días 5 y 6. Ruta básica predeterminada.

## Comprensión intuitiva

Un problema de material mezcla dos preguntas diferentes: cuánto usa cada unidad y cuántas unidades se pueden fabricar. Para calcular el consumo de varias piezas multiplicamos; para contar piezas desde una cantidad disponible dividimos. Antes de operar, escribir “metros por pieza” evita confundir ambos pasos. El número de unidades completas es entero: una fracción del cociente indica capacidad sobrante, no una pieza terminada.

## Regla y significado

Si hay L metros y cada pieza consume c metros, la capacidad exacta es L/c; el número de piezas completas es el entero inferior cuando L y c son positivos. Para n piezas, el consumo es nc y el sobrante es L−nc. El modelo supone cortes sin pérdida; si se da ancho de corte, debe sumarse al consumo según la situación.

## Ejemplo resuelto paso a paso

Disponemos de 5/2 m; cada pieza consume 3/8 m.
1. Capacidad:(5/2)÷(3/8)=(5/2)×(8/3)=20/3.
2. 20/3=6+2/3: se completan 6 piezas, no 7.
3. Consumo:6×3/8=18/8=9/4 m.
4. Sobrante:5/2−9/4=10/4−9/4=1/4 m.
5. El sobrante 1/4 m es menor que 3/8 m; por eso no alcanza para una séptima pieza.

## Error que conviene detectar

Redondear 6,67 a 7 permite prometer material inexistente. Para fabricar piezas completas se toma 6 y se calcula la longitud sobrante. No debe confundirse el sobrante de metros con la fracción de capacidad.

## Microclases y práctica

Día 5: 3 min para intuición y regla; 7 min para reproducir el ejemplo y realizar el ejercicio guiado; 5 min para explicar por qué cada paso conserva el significado y corregir. Día 6: 3 min para recuperar la regla sin mirar; 7 min para el ejercicio independiente, o la aplicación avanzada en su lugar; 5 min para comprobación y corrección. Total diario: 15 min, con lectura, soluciones y evaluación incluidas.

La ruta básica utiliza la pista del ejercicio 1. La intermedia resuelve el 2 sin consultar y comprueba el procedimiento. La avanzada sustituye el 2 por el 3 y justifica la decisión; no acumula ejercicios. El banco y sus soluciones están en [ejercicios](tema_2.1_subtema_2.1.3_ejercicios.md). La [comprobación](tema_2.1_subtema_2.1.3_evaluacion.md) se realiza al final del segundo día.

## Verificación visual

Consulta el [modelo de fracciones](../../media/fracciones.svg) o la [simulación](../../simulaciones/fracciones.html) durante el bloque de práctica. Predice antes: ¿3/4 y 6/8 ocupan lo mismo? Luego representa ambas; deben coincidir. Explica qué cambia al subdividir. Esta actividad sustituye el ejercicio guiado cuando se utiliza; no añade tiempo.

## Cierre activo

Pregunta sin apuntes: Dos piezas consumen 3/8 m cada una. ¿Basta una tira de 2/3 m? Conserva una línea con el resultado y otra con la razón del paso clave; después contrasta con la solución de la comprobación.

Fuente del temario y tiempo: RUTA_ING_realista.xlsx, Plan progresivo!D9:D15; Progresión!E3. El Excel fija secuencia y carga, no demuestra las reglas matemáticas. Desarrollo didáctico original; [referencias](../../REFERENCIAS.md).

<!-- NAVEGACION -->
[Anterior](tema_2.1_subtema_2.1.2_contenido.md) · [Índice](../../INDICE.md) · [Siguiente](../modulo_3/tema_3.1_subtema_3.1.1_contenido.md)
<!-- FIN NAVEGACION -->
