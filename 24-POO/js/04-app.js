// En este video estaremos viendo los modificadores de acceso, básicamente solamente hay private, es decir que se pueda acceder desde la clase...

// Ahora en JavaScript de nueva cuenta las classes son algo nuevo, funcionan sobre prototypes, pero con una forma más sencilla, previamente la forma de hacerlo private era con un guion bajo, eso le daba a entender al programador que esa propiedad o método era privado pero aún asi no era como un private real...

class Cliente { 

    #nombre = '';

    constructor( nombre, saldo = 0) {
        // this._nombre = nombre;
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(mensaje){ // Reescribir un método...
        return `Bienvenido al cajero para empresas`;
    }
}


const juan = new Cliente('Juan', 200);
console.log(juan.mostrarInformacion());
console.log(juan.#nombre);
