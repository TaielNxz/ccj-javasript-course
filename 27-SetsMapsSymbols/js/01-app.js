// No agrega valores duplicados
const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');


//? Son iterables
carrito.forEach( (producto, index) => {
    // llave y valor muestran lo mismo
    console.log(producto);
    console.log(index);
})


//? Vacia todos los elementos
carrito.clear();


//? Retorna false si no puede eliminarlo

console.log( carrito.delete('Disco #4'));


//? .has  nos permite revisar si existe un valor
console.log( carrito.has('Camisa'))


//? .size nos permite conocer cuanto mide como el .lenght
console.log(carrito.size)


console.log(carrito);


// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);