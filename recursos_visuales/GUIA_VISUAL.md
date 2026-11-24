# Guía de recursos visuales

Recursos originales, sin CDN ni conexión requerida. Abrir cada HTML directamente en un navegador. Los SVG son figuras estáticas para el contenido escrito; las simulaciones complementan la práctica y no califican el aprendizaje.

## Semanas 1–2: fracciones

- [Simulación](../simulaciones/fracciones.html) · [Figura](../media/fracciones.svg).
- Objetivo: mantener el valor al cambiar denominador y sumar piezas iguales.
- Actividad de 3 minutos: predice 1/2 + 1/3; observa denominador común 6 y resultado 5/6. Reemplaza 1/2 por 2/4: sigue 5/6. Prueba 3/4 + 3/4:6/4=3/2=1,5, supera una unidad.
- Respuesta explicada: 1/2=3/6 y 1/3=2/6; se cuentan 5 piezas de tamaño 1/6. Sumar denominadores produciría 2/5 y es incorrecto.
- Límites: fracciones no negativas, numeradores 0–12, denominadores 1–12. El máximo es 24 unidades de suma; las barras se ajustan al ancho. Un denominador común grande se representa por llenado proporcional y se mantiene el cálculo exacto escrito.

## Semanas 14–15 y 17: funciones

- [Simulación](../simulaciones/funciones.html) · [Figura](../media/funciones.svg).
- Objetivo: relacionar coeficientes, tabla y gráfica.
- Actividad de 4 minutos: lineal m=2,b=3: predice f(2)=7 y corte (0,3). Cuadrática a=1,b=−2,c=−3: vértice (1,−4); raíces −1 y 3. Cambia a=0: deja de ser cuadrática.
- Respuesta explicada: al aumentar x en 1, la recta aumenta y en 2; en la cuadrática la tasa no es constante. El vértice se calcula con x=−b/(2a), válido solo para a≠0.
- Límites: coeficientes −5 a 5; x−5 a 5; ventana y−10 a 10. La gráfica se recorta en la ventana, por lo que un punto exterior sigue existiendo aunque no sea visible. Un discriminante negativo indica ausencia de raíces reales, no inexistencia de la función.

## Semanas 16 y 19: triángulo rectángulo

- [Simulación](../simulaciones/triangulo.html) · [Figura](../media/triangulo.svg).
- Objetivo: identificar lados respecto al ángulo y separar longitud de razón.
- Actividad de 4 minutos: catetos 3 y 4 dan h=5, θ≈53,1301°, sin θ=0,8, cos θ=0,6, tan θ≈1,3333. Duplica: catetos 6 y 8, h=10; las razones y el ángulo permanecen iguales. Intercambia catetos: θ≈36,8699°, sin θ=0,6, cos θ=0,8 y tan θ=0,75.
- Respuesta explicada: duplicar ambos lados conserva cocientes. Cambiar el ángulo de referencia intercambia opuesto y adyacente. Usa DEG para comparar con la calculadora.
- Límites: catetos positivos 0,1–100 en la misma unidad. Se excluyen valores cero y negativos. En proporciones extremas el dibujo puede verse muy delgado: el resultado escrito conserva precisión. No representa triángulos oblicuángulos.

## Accesibilidad y comprobación

Controles con etiquetas, navegación de teclado, contraste claro, SVG con descripción y resultados escritos en regiones aria-live. No hay información disponible únicamente por color. Cada simulación tiene reinicio. Las entradas inválidas muestran aviso y conservan la última gráfica válida; no se interpreta esa gráfica como resultado de la entrada inválida.

Comprobaciones numéricas esperadas: 1/2+1/3=5/6;0+0=0;12/1+12/1=24; recta 2x+3 en 2 da 7; x²−2x−3 tiene vértice (1,−4) y raíces −1,3;3²+4²=25; atan2(4,3)·180/π≈53,1301°. El estado de ejecución real se registra en REPORTE_VERIFICACION.md.
