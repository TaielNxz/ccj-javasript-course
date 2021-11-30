// Singleton

let instancia = null;

class Persona {
    constructor( nombre, email ) {
        if( !instancia ) {
            this.nombre = nombre;
            this.email  = email;
            instancia = this;
        }
        return instancia;
    }
}

const persona = new Persona('Taiel', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Alen', 'correo2@correo2.com');
console.log(persona2);
