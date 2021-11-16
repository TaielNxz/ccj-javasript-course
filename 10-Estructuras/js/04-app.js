// Operador Mayor que y menor que

const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta')
} else if (cheque) {
    console.log('Si puedo pagar porque tengo cheque')
} else {
    console.log('Fondos Insuficientes');
}