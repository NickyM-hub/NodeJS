const pessoa = {
    nome: 'Vinicios',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

// aqui o for está errado,pois o in foi feito para objetos, para arrays o certo seria usar o for of
for(const chave in pessoa) {
    console.log('Chave: ', chave);
}

// gambiarra para imprimir a chave e o valor do objeto
for(const chave in pessoa) {
    console.log('Chave: ', chave);
    console.log('Valor: ', pessoa[chave]);
}

// imprime as chaves do objeto
const chaves = Object.keys(pessoa);

// imprime os valores do objetos
const valores = Object.values(pessoa);

// imprime sd chaves e os valores do objeto
const entradas = Object.entries(pessoa);


console.log('Chaves:', chaves);
console.log('Valores:', valores);
console.log('Entradas (chave/valor):', entradas);
