function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo  = saldo;
}

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`
}

const taiel = new cliente('Taiel', 500);

console.log( formatearCliente(taiel) );


/* ================================================================ */

function Empresa(nombre, saldo, categoria) {
    this.nombre    = nombre;
    this.saldo     = saldo;
    this.categoria = categoria;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} y su categoria es ${categoria}`
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en Linea');

console.log(formatearEmpresa(CCJ));