//? Seleccionar elementos por su clase...

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);


//? Si las clases existen mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


//? Si una clase no existe
const noExiste = document.getElementsByClassName('No-existe');
console.log(noExiste);