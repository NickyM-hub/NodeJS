for (let contador = 1; contador <= 10; contador++) {
    console.log(`Número atual:`, contador);
}

// for para decobrir se o número é par, ímpar
for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 == 0) {
        console.log('O número' , numero, 'é par.');
    }
}

for (let numero = 1; numero <= 10; numero++) {
    if (numero % 3 == 0) {
        console.log('O número' , numero, 'é ímpar.');
    }
}


//percorrendo uma palavra
const palavra = 'ele tem uma calopsita';

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador]);
}