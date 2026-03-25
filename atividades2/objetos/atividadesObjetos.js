// 1. Criando um objeto pessoal
const pessoa = {
    nome: ['claudin'],
    idade: 30,
    pets: ['zeus'],
    nacionalidade: 'Brasileiro'
}

// 2. Acessando propriedades
const valor = Object.values(pessoa.nome)
console.log(pessoa)


// 3. Atualizando valores
pessoa.idade = 25;

// 4. Adicionando uma nova propriedade
pessoa.cidade = ['Taboão da Serra'];

// 5. Função com objeto
pessoa.profissao = ['Programador']

function apresentar(pessoa) {
    return 'Nome: ' + pessoa.nome +
            ', Idade: ' + pessoa.idade +
            ', Profissão: ' + pessoa.profissao
}
console.log(apresentar(pessoa))


// 6. Lista de pessoas
let pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 20 },
  { nome: "Mariana", idade: 30 }
];
