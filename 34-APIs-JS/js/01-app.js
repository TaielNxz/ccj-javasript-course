const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resutlado es', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {

    if( Notification.permission === 'granted' ) {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Codigo con Juan, aprede con proyectos reales'
        });

        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com')
        }
    }
});