// Variables
const formulario   = document.querySelector('#formulario');
const listaTweets  = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit' , agregarTweet);
    formulario.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            agregarTweet(e);
        }
    });

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];
        
        crearHTML();
    });
};



// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion...
    if( tweet === '' ) {
        mostrarError('Un mensaje no puede ir vacio');

        return; // evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    
    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML 
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}


// Mostrar Mensaje de error
function mostrarError( error ) {

    const errorHTML = document.querySelector('.error');

    if( !errorHTML ) {
        // Crear mensaje de error
        const mensajeError = document.createElement('p');
        mensajeError.textContent = error;
        mensajeError.classList.add('error');

        // Insertarlo en el Contenido
        const contenido = document.querySelector('#contenido');
        contenido.appendChild(mensajeError);

        // Elimina la alerta despues de 3 segundos
        setTimeout(() => {
            mensajeError.remove();
        }, 3000);
    }
}

function crearHTML() {

    limpiarHTML();

    if( tweets.length > 0 ) {
        tweets.forEach( tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // añadir el texto
            li.innerText = tweet.tweet;

            // Asignar el boton
            li.appendChild(btnEliminar);

            // Insetarki en el html
            listaTweets.appendChild(li)
        });
    }

    sincronizarStorage();
}

// Agrega los Tweets actuales en local storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id );

    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while( listaTweets.firstChild ) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}