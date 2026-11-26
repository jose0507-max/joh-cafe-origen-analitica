
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
    clientesRecurrentes,
    ciudadUnaPasada
} = require('./analitica');

const generador = require("./generador");

const ventasGeneradas = generador(8000);

console.time("Timer")

console.log(ventasPorCiudadM(ventasGeneradas, "medellín"))

console.timeEnd("Timer")

console.log(ciudadUnaPasada(ventasGeneradas, "medellín"))


totalPorCiudadI(ventasGeneradas, contador)
//console.log(contador)
