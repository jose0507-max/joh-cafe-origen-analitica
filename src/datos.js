/*Array antes de detectar problemas
const ventas = [
    {id: 1, cliente: "C01", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 2, precio: 42.000},
    {id: 2, cliente: "C02", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 1, precio: 26.000},
    {id: 3, cliente: "C03", producto: "Prensa Francesa", ciudad: "Cali", cantidad: 1, precio: 95.000},
    {id: 4, cliente: "C04", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 3, precio: 42.000},
    {id: 5, cliente: "C05", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 2, precio: 26.000},
    {id: 6, cliente: "C06", producto: "Prensa Francesa", ciudad: "Cali", cantidad: 1, precio: 95.000},
    {id: 7, cliente: "C07", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 1, precio: 42.000},
    {id: 8, cliente: "C08", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 0, precio: 26.000},
    {id: 9, cliente: "C09", producto: "Prensa Francesa", ciudad: "Cali", cantidad: 2, precio: 95.000},
    {id: 10, cliente: "C10", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 2, precio: 42.000},
    {id: 11, cliente: "C11", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 1, precio: 26.000},
    {id: 12, cliente: "C12", producto: "Prensa Francesa", ciudad: "Cali", cantidad: 1, precio: 95.000},

];
*/

//Array despúes de ejecutar las desiciones
const ventas = [
    {id: 1, cliente: "C01", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 2, precio: 42000},
    {id: 2, cliente: "C02", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 1, precio: 26000},
    {id: 3, cliente: "C03", producto: "Prensa Francesa", ciudad: "Cali", cantidad: 1, precio: 95000},
    {id: 4, cliente: "C01", producto: "Filtros V60 x100", ciudad: "Medellín", cantidad: 2, precio: 18000},
    {id: 5, cliente: "C04", producto: "Origen Sierra Nevada 500 g", ciudad: "Barranquilla", cantidad: 3, precio: 45000},
    {id: 6, cliente: "C02", producto: "Prensa Francesa", ciudad: "Bogotá", cantidad: 1, precio: 95000},
    {id: 7, cliente: "C05", producto: "Origen Quindío 250 g", ciudad: "Pereira", cantidad: 4, precio: 24000},
    {id: 8, cliente: "C06", producto: "Molinillo Manual", ciudad: "Bogotá", cantidad: 1, precio: 130000},
    {id: 9, cliente: "C03", producto: "Origen Huila 500 g", ciudad: "Cali", cantidad: 2, precio: 42000},
    {id: 10, cliente: "C07", producto: "Origen Nariño 250 g", ciudad: "Bucaramanga", cantidad: 3, precio: 26000},
    {id: 11, cliente: "C05", producto: "Cafetera Chemex 6 Tazas", ciudad: "Pereira", cantidad: 1, precio: 210000},
    {id: 12, cliente: "C04", producto: "Origen Quindío 250 g", ciudad: "Barranquilla", cantidad: 2, precio: 24000}
];


module.exports = ventas;