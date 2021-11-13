const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto...
// los numeros se redondean
const texto = ' en Promocion'.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!!`)


// Split, dividir un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));


const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(actividad.split(", "));


const tweet = "Aprendiendo JavaScript Moderlo #JSModernoConJuan"
console.log(tweet.split('#'))