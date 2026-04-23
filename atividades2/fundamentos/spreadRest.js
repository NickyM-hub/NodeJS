const camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

// Clonando o mesmo objeto e modificando a idade com Spread Operator
const camila2 = { ...camila1 };
camila2.idade = 30;

console.log(camila1);
console.log(camila2);

// Clonando o Objeto e adicionando novas parâmetros
camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}

console.log(camila1);


//Separando parâmetros com Rest Operator
// Exemplo: separando o nome do restando do objeto
const { nome, ...restante } = camila1;

console.log(nome);
console.log(restante);