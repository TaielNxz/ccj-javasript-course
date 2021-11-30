function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    },
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Crear Objetos
const taiel = new Comprador('Taiel');
const alen = new Comprador('Alen');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// Tiene que registrarlos
subasta.registrar(taiel);
subasta.registrar(alen);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

taiel.oferta(350, taiel);
alen.oferta(450, alen);
taiel.oferta(500, taiel);
alen.oferta(700, alen);

vendedor.vendido('Alen');