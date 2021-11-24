import nuevaFuncion, { nombreCliente as clienteNombre , ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';


nuevaFuncion();


//? importar variables
console.log( clienteNombre );
console.log( ahorro );


//? importar Funciones
console.log( mostrarInformacion( clienteNombre, ahorro ) );
tieneSaldo( ahorro );


//? importar Classes
const cliente = new Cliente( clienteNombre, ahorro );
console.log( cliente )
console.log( cliente.mostrarInformacion() );


//? Importar empresa
import { Empresa } from './empresa.js';

const empresa = new Empresa('Codigo con juan', 5000, 'Aprendisaje en linea');
console.log( empresa );
console.log( empresa.mostrarInformacion );