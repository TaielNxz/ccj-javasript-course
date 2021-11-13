const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// Convertir a numero entero
console.log(numero1)
console.log(Number.parseInt(numero1));


// Convertir a numero decimal
console.log(numero2)
console.log(Number.parseFloat(numero2));


// NaN (Not a Number)
console.log(numero3)
console.log(Number.parseFloat(numero3));


// Es un entero o no?
console.log(Number.isInteger(numero4)); /* true */
console.log(Number.isInteger(numero3)); /* false */