// explicando o this

// o this é uma palavra reservada do JavaScript que se refere ao objeto atual em execução. Ele pode ser usado para acessar propriedades e métodos do objeto, bem como para referenciar o próprio objeto.
// o valor do this depende do contexto em que ele é usado. Por exemplo, em uma função normal, o this se refere ao objeto global (window no navegador), enquanto em um método de um objeto, o this se refere ao próprio objeto.

// exemplo de uso do this em um objeto
const pessoa = {
  nome: 'João',
  idade: 30,    
    saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.saudacao(); // Output: Olá, meu nome é João e tenho 30 anos.

// exemplo de uso do this em uma função normal
function mostrarThis() {
  console.log(this);
}
mostrarThis(); // Output: [object Window] (no navegador)

// exemplo de uso do this em uma função construtora 
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

Carro.prototype.descricao = function() {
  console.log(`Este carro é um ${this.marca} ${this.modelo}.`);
};
const meuCarro = new Carro('Toyota', 'Corolla');
meuCarro.descricao(); // Output: Este carro é um Toyota Corolla.