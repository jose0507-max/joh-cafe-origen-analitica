
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
    topProductosPorValor
} = require('./analitica');

const verificar = (valor1, valor2) => {
    return valor1 === valor2 ? 'ok' : 'diferente';
};

//console.log('Total vendido:', verificar(totalVendido(ventas), totalVendidoM(ventas)));
//console.log('Unidades vendidas:', verificar(unidadesVendidas(ventas), unidadesVendidasM(ventas)));
//console.log('Ventas por ciudad:', verificar(ventasPorCiudad(ventas, 'Bucaramanga'), ventasPorCiudadM(ventas, 'Bucaramanga')));
//console.log('Toral vendido por cada ciudad',totalPorCiudad(ventas))
console.log('Cantidad total de cada producto', unidadesPorProducto(ventas))
console.log("precios ordenados", topProductosPorValor(ventas, 3))
