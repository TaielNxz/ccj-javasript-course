localStorage.setItem('nombre', 'Taiel');

const producto = {
    nombre : 'Monitor de 24 Pulgadas',
    precio : 300
}

const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);

const mesesString = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', stringify( mesesString ));