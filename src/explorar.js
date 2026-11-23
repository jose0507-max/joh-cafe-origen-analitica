const ventas = require('./datos');

console.log("Registros: ", ventas.length);
console.log("Primer registro: ", ventas[0]);
console.log("Último registro: ", ventas[ventas.length - 1]);
console.log("Producto en la posición 5: ", ventas[4].producto);

console.table(ventas);
