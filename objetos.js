let pessoa = {
    nome: 'Ana',
    idade: 25,
    temCarteira: true
};

// fez aniversário!
pessoa.idade = 26;
pessoa.sobrenome = 'Paula';

console.log('Nome: ', pessoa.nome);
console.log('Sobrenome: ', pessoa.sobrenome);


const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
};  
livro.publicado = true;
livro.idiomas = ['Inglês', 'Português', 'Espanhol'];