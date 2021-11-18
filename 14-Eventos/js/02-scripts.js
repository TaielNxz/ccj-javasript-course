const nav = document.querySelector('.navegacion');

//? registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saluendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () => {
    console.log('entrando en la navegacion');

    nav.style.backgroundColor = 'blue';
})

//* mousedown - similar al click
//* click
//* dblclick = double click
//* mouseup = cuando sueltas el mouse 