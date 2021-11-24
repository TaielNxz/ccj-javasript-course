const sym = Symbol('1');
const stm2 = Symbol('1');


//? Ningun simbol es igual
console.log( Symbol() === Symbol() );

if (sym === stm2) {
    console.log('Son Iguales!!');
} else {
    console.log('Son diferentes');
}


const nombre = Symbol();
const apellido = Symbol();

const persona = {};


//? Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Taiel';
persona[apellido] = 'Nunes';
persona.tipoCliente = 'Premium'
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);


//? Las propiedades que utilizan un symbol no son iterables
for( let i in persona ) {
    console.log(i)
}


//? Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};


cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);