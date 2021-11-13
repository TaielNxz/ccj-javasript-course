const producto = '          Monitor 20 Pulgadas          ';

console.log(producto)
console.log(producto.length);


// Eliminar del inicio...
console.log( producto.trimStart() );

// Eliminar del final...
console.log( producto.trimEnd() );

// Eliminar en ambas direcciones
console.log( producto.trim());
console.log( producto.trimStart().trimEnd() );
