
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
    ventaMayorI
} = require('./analitica');

const generador = require("./generador");

const ventasGeneradas = generador(20);



totalPorCiudadI(ventasGeneradas, contador)
console.log(contador)
