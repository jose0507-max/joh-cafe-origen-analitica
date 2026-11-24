const generarVentas = (cantidad) => {
    const ventasC = [];

    const ciudades = ["Medellín", "Bogotá", "Armenia", "Pereira"];
    const productos = ["Café panelado", "Café Americano", "Café tostao", "Café de los andes"];
    const precios = [10000, 15000, 20000, 25000];

    for (let i = 0; i < cantidad; i++) {

        let numero = Math.floor(Math.random() * 4);

        const newObj = {
            id: i + 1,
            cliente: `C0${i + 1}`,
            producto: productos[numero],
            ciudad: ciudades[numero],
            cantidad: Math.floor(Math.random() * 5) + 1,
            precio: precios[numero]
        };

        ventasC.push(newObj);
    }

    return ventasC;
};

console.log(generarVentas(2));

module.exports = generarVentas;