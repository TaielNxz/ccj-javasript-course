const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();


//? Agregar
weakmap.set(producto, 'Monitor');


//? Comprobar si existe
console.log( weakmap.has(producto) );
console.log( weakmap.get(producto) );
console.log( weakmap.delete(producto) );
//console.log( weakmap.size );


console.log(weakmap);