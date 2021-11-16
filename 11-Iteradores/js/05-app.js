let i = 1;

do {
    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ`)
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`)
    } else {
        console.log(`${i} fizz`)
    }
    
    i++ //incremento
} while ( i < 100); // Condicion