
const contador = {
    visitas:0,
    comparaciones: 0
}
const ventas = require('./datos');
const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    totalVendidoI,
    totalPorCiudadI,
    ventaMayorI,
    clientesRecurrentes
} = require('./analitica');

const generador = require("./generador");

const ventasGeneradas = generador(1);

console.time("Timer")

console.log(clientesRecurrentes(ventasGeneradas))

console.timeEnd("Timer")


totalPorCiudadI(ventasGeneradas, contador)
//console.log(contador)
