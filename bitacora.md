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

Cuenta, para cada versión, cuántos recorridos completos hace y cuántos arreglos nuevos crea. Expresa ambas en notación Big O de tiempo y de espacio.

R//La versión con métodos, crea un nuevo arreglo cuando el reduce filtra segun la ciudad en Notacion de tiempo y espacio sería O(n) y O(n) respectivamente
La versión de una pasada no crea ningún nuevo arreglo, la construí para que acumule el total en una variable así que en tiempo y espacio sería O(n) y O(1) respectivamente

Explica en la bitácora por qué ambas son O(N) en tiempo aunque una recorra el arreglo cuatro veces (reglas de simplificación: se eliminan las constantes).
R//Porque las ventas son N y las ventas que coinciden con la ciudad sería N+K y las constantes en las notaciones desaparecen.

Clasifica la complejidad espacial de todas las funciones del motor: ¿cuáles usan memoria adicional constante, O(1), y cuáles proporcional a los datos, ONo?
R//
valorVenta: O(1)
totalVendido: O(1)
unidadesVendidas: O(1)
ventaMayor: O(1)
ticketPromedio: O(1)
ventasPorCiudad: O(1)
totalVendidoM: O(1)
unidadesVendidasM: O(1)
ventasPorCiudadM: O(n)
totalPorCiudad: O(n)
unidadesPorProducto: O(n)
topProductosPorValor: O(n)
ventasDelDia: O(n)
totalVendidoI: O(1)
ventaMayorI: O(1)
totalPorCiudadI: O(n)
ciudadUnaPasada: O(1)
clientesRecurrentes: O(n)   

Decide cuál versión de totalCiudad dejarás en el motor y justifica la decisión entre legibilidad y recursos. Haz commit y push.
R//Voy a dejar la que creé sin métodos (ciudadUnaPasada) ya que en espacio es más eficiente, debido a que no requiere de nueva memoria independientemente del tamaño de N