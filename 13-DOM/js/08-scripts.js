const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)
// console.log(navegacion.childNodes) //Los espacios en blanco son coinsiderados elementos
// console.log(navegacion.children) //Los espacios en blanco son coinsiderados elementos

// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)


const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde travesing the doom'

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);


//? Traversing the Hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement);

// console.log(card)
// console.log(card.nextElementSibling)
// console.log(card.nextElementSibling)

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling)