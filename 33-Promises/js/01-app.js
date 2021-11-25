const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];


function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}


function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback()
    }, 2000);
}



mostrarPaises()

nuevoPais('Alemania', mostrarPaises);