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

const totalVendidoM = (ventas) => {
    return ventas.reduce((acum, v) => acum + (v.cantidad * v.precio), 0);
}

const unidadesVendidasM = (ventas) => {
    return ventas.reduce((acum, v) => acum + v.cantidad, 0);
}

const ventasPorCiudadM = (ventas, ciudad) => {
    return ventas.filter(v => v.ciudad.toLowerCase() === ciudad.toLowerCase()).length;
}


const totalPorciudad = (ventas) => {
    const ciudadesUnicas = [...new Set(ventas.map(v => v.ciudad))];

    return ciudadesUnicas.map(ciudad => {
        const vendido = ventas
            .filter(v => v.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase())
            .reduce((acum, v) => acum + (v.precio * v.cantidad), 0);

        return { ciudad, vendido };
    });
};

module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM
};
