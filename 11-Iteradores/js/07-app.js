const prendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

for( let pendiente of prendientes){
    console.log(pendiente);
}

for( let producto of carrito) {
    console.log(producto.nombre)
}