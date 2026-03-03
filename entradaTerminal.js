const readline= require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

leitor.question('Qual seu nome? ' ,(nome) => {
    console.log("Olá, ", nome)
    console.log("Boas vindas ao meu sistema")

    leitor.close()
})