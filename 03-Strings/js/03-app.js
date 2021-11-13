/* Concatenar strings */
const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

// concat()
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));


// variable + string + variable
console.log( producto + "Con un precio de: " + precio);


// variable, string, variable
console.log( "El producto ", producto, "tiene un precio de ", precio );


// template string `...${}...`
console.log(`El Producto ${producto} tiene un precio de ${precio}`);