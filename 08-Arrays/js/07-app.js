const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400,
}

const producto2 = {
    nombre: "Celular",
    precio: 800,
}



carrito.push(producto)
carrito.push(producto2)

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
const producto4 = {
    nombre: 'Celular',
    precio: 150
}

carrito.unshift(producto3);
console.table(carrito);


// Eliminar ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito);

// Eliminar del inicio de un arreglo

// carrito.shift();
// console.table(carrito);

carrito.splice(3, 1);
console.table(carrito);