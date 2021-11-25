import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector("#artista").value;
    const cancion = document.querySelector("#cancion").value;

    // Verificar si los campos estan vacios
    if( artista === '' || cancion === '' ) {
        // Mostrar error
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        // Borrar mensaje luego de 3 segundos
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    // Consultar nuestra api
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}