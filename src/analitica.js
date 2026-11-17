const valorVenta = (venta) => {
    return venta.cantidad * venta.precio;
}

const totalVendido = (ventas) => {
    let acum = 0;
    for (const venta of ventas) {
        acum = venta.cantidad * venta.precio + acum;
    }
    return acum;
}

const unidadesVendidas = (ventas) => {
    let acum = 0;
    for (const venta of ventas) {
        acum = acum + venta.cantidad;
    }
    return acum;
}

const ventaMayor = (ventas) => {
    let may = -Infinity;
    for (const venta of ventas) {
        if (venta.precio > may) {
            may = venta.precio;
        }
    }
    ventas.forEach(venta => {
        if (venta.precio == may) {
            console.log(venta);
        }
    });
}

const ticketPromedio = (ventas) => {
    let acum = 0;
    let cont = 0;
    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            acum = acum + venta.precio;
            cont = cont + 1; 
        }
    }
    return acum / cont;
}

const ventasPorCiudad = (ventas, ciudad) => {
    let cont = 0;
    for (const venta of ventas) {
        if (venta.ciudad.toLowerCase() == ciudad.toLowerCase()) {
            cont = cont + 1;
        }
    }
    return cont;
}

const ventas = require('./datos');
console.log(ventasPorCiudad(ventas, 'Bucaramanga'));

module.exports = { valorVenta, totalVendido, unidadesVendidas, ventaMayor, ticketPromedio, ventasPorCiudad };
