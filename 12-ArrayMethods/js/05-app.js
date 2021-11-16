const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//? con un foreach
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
});

console.log(resultado);


//? con .find ( crea un nuevo arreglo )
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2)

const resultado3 = carrito.filter( producto => producto.precio === 100);
console.log(resultado3)