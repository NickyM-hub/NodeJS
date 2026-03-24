const frutas = ['Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango'];

// console.log(frutas)
// console.log('Primeira fruta: ', frutas[0])
// console.log('Última fruta: ', frutas[4])
// console.log('Total de frutas: ', frutas.length)

// frutas.push('Limão')

// console.log('Total de frutas: ', frutas.length)

// console.log('Primeira fruta: ', frutas[0])

// console.log('Última fruta:', frutas[frutas.length - 1])

// Remove itens (posição, quantidade)
frutas.splice(2, 1)

console.log('Total de frutas: ', frutas.length)

for(let i = 0; i < frutas.length; i++) {
    console.log("Índice: ", i)
    console.log(frutas[1])
}

console.log('Usando forEach:')
frutas.forEach(fruta => { 
    console.log(fruta); 
}); 


console.log('usando for of:')
for (const fruta of frutas) {
    console.log('fruta da vez: ', fruta)
}

// Por que isso importa?

// Saber que existem diferentes tipos de for te dá liberdade para escolher a melhor ferramenta para cada situação. Às vezes, você precisa do controle total que o for tradicional oferece. Outras vezes, quer só percorrer os itens de um array sem complicação — e aí o for/of ou o forEach são perfeitos.

// Além disso, é importante entender esses tipos porque você vai encontrá-los em muitos códigos por aí — especialmente quando estiver lidando com projetos mais antigos ou estudando exemplos na internet.
// Resumo da evolução:

//     for** tradicional** → o mais antigo e mais detalhado

//     forEach → método moderno e direto para arrays

//     for/of → sintaxe simples e elegante, ideal para percorrer valores
