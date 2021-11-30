
const obtenerCliente = () => {
    const nombre = 'Taiel';

    function muestraNombre() {
        console.log(nombre)
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();