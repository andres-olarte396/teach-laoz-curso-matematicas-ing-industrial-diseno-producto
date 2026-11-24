# Comparar modelos y restricciones de dominio

> **Fuente interna:** RUTA_ING_realista.xlsx, Plan progresivo!D100:D106 y Progresión!E16, para tema y tiempo. El desarrollo matemático no está localizado explícitamente en el Excel: es elaboración didáctica respaldada en [Referencias](../../REFERENCIAS.md).



**Subtema 15.1.3 · semana 15 · días 5 y 6 · 30 minutos cada día.**

**Objetivo:** Interpretar funciones sencillas y seleccionar un modelo según datos. En esta clase, practica específicamente comparar modelos y restricciones de dominio.

## Intuición y conexión

Elegir un modelo exige observar cómo cambian los datos y qué entradas tienen sentido. Un gráfico suave puede sugerir una relación, pero no demuestra por sí solo una fórmula. Las diferencias constantes apuntan a un modelo lineal; en una cuadrática las segundas diferencias son constantes cuando las entradas están igualmente espaciadas. Una relación inversa conserva el producto entre entrada y salida.

## Definición y procedimiento

Compara candidatos evaluándolos en los mismos datos. Para y=mx+b, incrementos iguales de x dan primeras diferencias iguales de y. Para y=ax²+bx+c, las segundas diferencias son constantes; para y=k/x, xy=k. Un número pequeño de datos compatibles no garantiza que el proceso siga esa regla fuera del intervalo observado. Restringe el dominio según capacidad, integridad de cantidades y denominadores.

## Ejemplo resuelto paso a paso

Con x=1,2,3,4 y y=2,8,18,32, las primeras diferencias son 6,10,14; las segundas son 4 y 4. El modelo y=2x² reproduce los cuatro datos. Para una tabla q=1,2,3 con C=15,20,25, la diferencia 5 sugiere C=5q+10. Comprueba cada fila. Para n=1,2,4 con T=80,40,20, el producto nT siempre es 80 y el modelo T=80/n reproduce la tabla.

## Aplicación en producción o diseño

Un costo lineal puede servir solo hasta una capacidad de 100 piezas; después se paga otra preparación y cambia la fórmula. Escribe entonces que C(q)=5q+10 se usa para q entero entre 0 y 100, si esos son los límites del contrato. No evalúes automáticamente q=150 usando un precio que el proveedor no ofrece. La validez del modelo incluye sus condiciones.

## Error frecuente y reparación

Concluir que una tabla es cuadrática porque sus salidas aumentan ignora que también una recta creciente aumenta. Las segundas diferencias solo se comparan directamente para entradas igualmente espaciadas. También evita extrapolar: un modelo ajustado entre una y cuatro máquinas no prueba que funcione con cien máquinas sin restricciones del proceso.

## Dos microclases

- **Día A (30 min):** 2 min para responder una minipregunta de preconceptos; 6 min de lectura y reconstrucción del ejemplo sin copiarlo; 18 min para un ejercicio de la ruta elegida; 4 min para comparar con la solución y explicar un paso en voz alta.
- **Día B (30 min):** 2 min de recuerdo sin consultar; 4 min para recuperar el paso que falló; 20 min de práctica independiente en la misma ruta o una superior si ya dominas la anterior; 4 min de comprobación y registro de un error corregido. La comprobación usa el archivo de evaluación del subtema.

Trabaja una ruta por sesión. Si un ejercicio queda pendiente, continúa en el siguiente bloque de práctica; no añadas minutos fuera del plan. Conserva tus pasos para distinguir un error de cálculo de un modelo mal planteado.

## Explorar dentro del tiempo de práctica

![Funciones: comparación de modelos](../../media/funciones.svg)

Usa la [simulación de funciones](../../simulaciones/funciones.html) durante un máximo de 3 minutos del bloque de práctica, reemplazando un ejercicio. Antes de abrir, predice el vértice y los ceros de f(x)=x²−4x+3. Comprueba con una tabla antes de explorar. **Respuesta esperada:** Vértice (2,−1) y ceros 1 y 3; los ceros son simétricos respecto a x=2. Si los controles muestran otros parámetros, configura el modelo cuando sea posible o calcula los valores a mano y compara la forma de la curva.

**Fuente del temario y tiempo:** RUTA_ING_realista.xlsx, Plan progresivo!D100:D106; Progresión!E16. El Excel define la secuencia y los minutos; las explicaciones matemáticas se apoyan en [Referencias](../../REFERENCIAS.md).

<!-- NAVEGACION -->
[Anterior](tema_15.1_subtema_15.1.2_contenido.md) · [Índice](../../INDICE.md) · [Siguiente](../modulo_16/tema_16.1_subtema_16.1.1_contenido.md)
<!-- FIN NAVEGACION -->
