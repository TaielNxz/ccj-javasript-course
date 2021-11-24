// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo : 100
}

weakset.add(cliente);

console.log(weakset.has(cliente)); // true

weakset.delete(cliente);

//? Los WeakSet solo aceptan objetos
/*
const nombre = 20;
weakset.add(nombre);
*/

//? .size no existe en weakset por lo tanto no se puede conocer su extencion
/*
console.log(cliente.size);
*/

console.log(weakset);