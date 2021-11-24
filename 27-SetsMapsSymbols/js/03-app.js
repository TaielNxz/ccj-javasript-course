
const cliente = new Map();

//? Son listas de llave y valor
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set( true, true );
cliente.set( [0], true );


//? Retorna True o False
console.log(cliente.has('nombre'));


//? Retorna Karen
console.log(cliente.get('nombre'));


//? Eliminar valor
cliente.delete('saldo');


//? Limpiar el Map
cliente.clear();


const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Antoño');


//? Son iterables
paciente.forEach( (datos, index) => {
    console.log(datos);
    console.log(index);
})