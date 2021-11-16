// forEach

const prendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

prendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
})

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const nuevoArreglo = carrito.forEach( producto => console.log(producto.nombre));

const nuevoArreglo2 = carrito.map( producto => console.log(producto.nombre));

console.log(nuevoArreglo);
console.log(nuevoArreglo2)