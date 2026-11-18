const ventas = require('./datos');
const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM
} = require('./funciones');

const verificar = (valor1, valor2) => {
    return valor1 === valor2 ? 'ok' : 'diferente';
};

console.log('Total vendido:', verificar(totalVendido(ventas), totalVendidoM(ventas)));
console.log('Unidades vendidas:', verificar(unidadesVendidas(ventas), unidadesVendidasM(ventas)));
console.log('Ventas por ciudad:', verificar(ventasPorCiudad(ventas, 'Bucaramanga'), ventasPorCiudadM(ventas, 'Bucaramanga')));
