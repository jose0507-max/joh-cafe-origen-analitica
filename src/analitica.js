const valorVenta = (venta) => {
  return venta.cantidad * venta.precio;
};

const totalVendido = (ventas) => {
  let acum = 0;
  for (const venta of ventas) {
    acum = venta.cantidad * venta.precio + acum;
  }
  return acum;
};

const unidadesVendidas = (ventas) => {
  let acum = 0;
  for (const venta of ventas) {
    acum = acum + venta.cantidad;
  }
  return acum;
};

const ventaMayor = (ventas) => {
  let may = -Infinity;
  for (const venta of ventas) {
    if (venta.precio > may) {
      may = venta.precio;
    }
  }
  ventas.forEach((venta) => {
    if (venta.precio == may) {
      console.log(venta);
    }
  });
};

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
};

const ventasPorCiudad = (ventas, ciudad) => {
  let cont = 0;
  for (const venta of ventas) {
    if (venta.ciudad.toLowerCase() == ciudad.toLowerCase()) {
      cont = cont + 1;
    }
  }
  return cont;
};

const ventas = require("./datos");

const totalVendidoM = (ventas) => {
  return ventas.reduce((acum, v) => acum + v.cantidad * v.precio, 0);
};

const unidadesVendidasM = (ventas) => {
  return ventas.reduce((acum, v) => acum + v.cantidad, 0);
};

const ventasPorCiudadM = (ventas, ciudad) => {
  return ventas.filter(v => v.ciudad.toLowerCase() === ciudad.toLowerCase())
    .length;
};

const totalPorCiudad = (ventas) => {
  const ciudadesUnicas = [...new Set(ventas.map((v) => v.ciudad))];

  return ciudadesUnicas.map((ciudad) => {
    const vendido = ventas
      .filter(
        v => v.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase(),
      )
      .reduce((acum, v) => acum + v.precio * v.cantidad, 0);
    return { ciudad, vendido };
  });
};

const unidadesPorProducto = (ventas) => {
  const productosUnicos = [...new Set(ventas.map((v) => v.producto))];

  return productosUnicos.map((producto) => {
    const cantidadTotal = ventas
      .filter(v => v.producto.trim().toLowerCase() === producto.trim().toLowerCase(),
      )
      .reduce((acum, v) => acum + v.cantidad, 0);

    return { producto, cantidadTotal };
  });
};

const topProductosPorValor = (ventas, k) => {
  const productosUnicos = [...new Set(ventas.map((v) => v.producto))];
  let arrayPrecios = [];
  if (k <= productosUnicos.length && k > 0) {
    let arrayProductos = [];
    for (let i = 0; i < k; i++) {
      arrayProductos[i] = productosUnicos[i];
    }
    const precios = arrayProductos.map((producto) => {
      const productos = ventas.filter(
        v =>
          v.producto.trim().toLowerCase() === producto.trim().toLowerCase(),
      );

        arrayPrecios.push(productos[0].precio);
   
    });
    for (let i = 0; i < arrayPrecios.length - 1; i++) {
      for (let j = i + 1; j < arrayPrecios.length; j++) {
        if (arrayPrecios[i] < arrayPrecios[j]) {
          let aux = arrayPrecios[i];
          arrayPrecios[i] = arrayPrecios[j];
          arrayPrecios[j] = aux;

          aux = arrayProductos[i];
          arrayProductos[i] = arrayProductos[j];
          arrayProductos[j] = aux;
        }
      }
    }
    let preciosUnicos = [...new Set(arrayPrecios)];
    return { preciosUnicos, arrayProductos };
  } else {
    return {
      error: "La cantidad es inválida o está fuera del límite de productos",
    };
  }
};

const ventasDelDia = (ventas, fecha) =>{
  console.log("Resumen del día: ", fecha);
  const vendidoHoy = ventas
  .filter(v => v.fecha == fecha)
  .reduce((acum, v) => acum + (v.precio * v.cantidad), 0)
  console.log("Vendido hoy: ", vendidoHoy)
}



module.exports = {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
  ventasDelDia
};
