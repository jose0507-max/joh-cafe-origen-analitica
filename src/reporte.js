const ventas = require("./datos");
const {
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
} = require("./analitica");

console.log(
  "Resumen general (total vendido):", totalVendido(ventas),
  "\nUnidades vendidas:", unidadesVendidas(ventas),
  "\nTicket promedio:", ticketPromedio(ventas),
  "\nUnidades por producto:", unidadesPorProducto(ventas),
  "\nVentas por ciudad", ventasPorCiudadM(ventas, "bogota"),
  "\nTop productos por valor: ", topProductosPorValor(ventas, 5)
);

