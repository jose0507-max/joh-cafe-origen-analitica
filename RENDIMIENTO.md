| Función | Qué hace | Complejidad temporal | Complejidad espacial | Justificación | Operaciones (10.000 ventas) |
|---------|----------|---------------------|---------------------|--------------|----------------------------|
|        |          |                     |                     |              |                            |


Función: clientesRecurrentes()
Qué hace: Agrupar en un objeto los clientes con más compras y mostrar su información
Complejidad Temporal: O(n^2)
Complejidad Espacial: O(n)
Justificación: La función tiene dos ciclos anidados, ya que por cada cliente en ventas recorre desde la posición del cliente hasta el final de ventas, es decir busca qué clientes se repiten, por lo cuál es exponencial a n O(n^2), y es O(n) en complejidad espacial ya que utiliza memoria adicional que depende de n (Array de recurrentes)
Operaciones(8.000 ventas): 155.159ms

Función: ciudadUnaPasada()
Qué hace: calcular el total vendido por una ciudad específica
Complejidad Temporal: O(n)
Complejidad Espacial: O(1)
Justificación: En tiempo es O(n) porque la complejidad depende del tamaño de ventas y la cantidad de iteraciones es proporcional a ventas, y en espacio independientemende de N la memora que usa es constante, ya que no usa memora adicional que dependa de N
Operaciones (8.000 ventas): 8.267ms 

Función: totalPorCiudad()
Qué hace: Agrupa las ventas por ciudad y calcula el total de dinero vendido en cada una.
Complejidad Temporal: O(n²)
Complejidad Espacial: O(n)
Justificación: La complejidad temporal es O(n²) en el peor caso, ya que primero recorre el arreglo ventas para obtener las ciudades únicas y posteriormente, por cada ciudad, vuelve a recorrer ventas mediante filter() para calcular el total vendido. En el peor escenario, donde la cantidad de ciudades únicas crece proporcionalmente a n, se realizan múltiples recorridos del arreglo. La complejidad espacial es O(n) porque crea arreglos adicionales mediante map(), Set, filter() y map(), cuyo tamaño depende de la cantidad de ventas y ciudades únicas.
Operaciones (8.000 ventas): 1.384ms