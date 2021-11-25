const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar')
    }
})

aplicarDescuento
    .then( resultado => descuento(resultado))
    .then( error => console.log(error))

// Hay 3 valores posibles...
// fulfilled  - El promise se cumplio
// rejected   - El promise no se cumplio
// pending 0  - No se ha cumplido y tampoco fue rechazado


function descuento(mensaje) {
    console.log(mensaje)
}