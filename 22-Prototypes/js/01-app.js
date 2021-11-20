const cliente = {
    nombre : 'Juan',
    saldo  : 500
}

console.log(cliente);


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo  = saldo;
}

const taiel = new cliente('Taiel', 500);

console.log(taiel);