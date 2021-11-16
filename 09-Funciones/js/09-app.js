const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombrePlaylist) {
        console.log(`Creando playlist ${nombrePlaylist}`);
    },
    reproducirPlaylist: function(nombrePlaylist) {
        console.log(`Reproduciendo playlist ${nombrePlaylist}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');
