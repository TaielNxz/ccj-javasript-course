const producto = {
    nombre: 'Teclado',
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre
// console.log(nomber);

// Destructuring
const { disponible } = producto;

console.log(disponible);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

const [ primero, ...tercero] = numeros;

console.log(tercero);