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

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')


console.log('Livro antes:', livro)

// Para remover a propriedade páginas, utilizamos:
delete livro.paginas

console.log('Livro depois:', livro)

// podemos usar colchetes e strings para acessar, por exemplo, o autor.
console.log('Autor do livro', livro['autor'])
// Porém, se tentarmos acessar uma propriedade que não existe, como editora, o resultado será undefined.
console.log('Editora', livro['editora'])



const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}

livro.autor = autor
console.log(livro)

// Para acessar o autor do livro, utilizamos livro.autor.nome, por exemplo, pois o autor tem um nome ou uma nacionalidade
livro.autor.nome
livro.autor.nacionalidade

livros: [livro]