Problema:                    
1. Venta 8 con cantidad cero             
2. Ciudades con productos repetidos   
3. Precios redundantes    

Desición: 
1. No cuenta en el ticket
2. Eliminar productos repetidos siempre y cuando el objeto completo ya esté en el array
3. verificar que no haya redundancia, es decir qeu sea el mismo precio, más no el mismo producto


Diccionario de datos:
id: Numérico, clave primaria de cada venta
Cliente: Cadena, Identificador del cliente
Producto: Cadena, Descripción del producto
Ciudad: Cadena, Ciudad en de destino
Cantidad: Numérico, Cantidad de productos de la venta
Precio: Numérico, Precio del producto vendido



Dia-2: 
Con N ventas la funcion clientesRecurrentes() tiene una notación O(n^2)

Tiempos de ejecucíon:
n = 1.000 : 4.883ms
n = 2.000 : 10.813ms
n = 4.000 : 39.416ms
n = 8.000 : 155.159ms
n = 16.000 : 525.058ms

El tiempo es exponencial, cada vez crece más cuando se duplica O(n^2)

Con tus mediciones, estima cuánto tardaría la función con 100.000 y con 1.000.000 de ventas. Ejecuta 100.000 solo si tu estimación es menor a dos minutos.

R//Con 100.000 ya que es exponencial y viendo el comportamiento al duplicarlo pienso que se tardará 3min aprox
Con 1.000.000 se tardará masomenos 8min.    



Identifica un costo oculto: recurrentes.includes también recorre un arreglo. Explica en la bitácora cómo afecta la complejidad en el peor caso.

R//El includes entá en un condicional, el cuál esta dentro de dos condicionales anidados, lo cuál afecta la complejidad ya que en el peor caso el includes recorre el array completo buscando el parámetro y lo hace con 