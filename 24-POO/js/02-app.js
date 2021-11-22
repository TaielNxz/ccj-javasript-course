class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}


const juan = new Cliente('Juan', 400);
console.log(juan);

console.log(juan.imprimirSaldo() );
juan.retiraSaldo(200);
console.log(juan.imprimirSaldo() );


// Ver propiedad estatica...

// juan.bienvenida(); // No va a funcionar

console.log( Cliente.bienvenida() ); // Esto si va a funcionar