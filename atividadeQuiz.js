const readline = require('readline');

const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

pergunta.question("1- Qual palavra usamos para criar uma função no Node.js?\n(a) def\n(b) function\n(c) class\n", (resposta1) => {
    if (resposta1 == 'b') {
        console.log('Parabéns!! Você acertou a questão');
        acertos += 1;
    } else {
        console.log('Não foi dessa vez');
    }

    pergunta.question("Qual dessas alternativas são uma estrutura de repetição?\n(a) loopar \n(b) repeat \n(c) for\n", (resposta2) => {
        if (resposta2 == 'c') {
            console.log('Parabéns!! Você acertou a questão');
            acertos += 1;
        } else {
            console.log("Não foi dessa vez");
        }

      pergunta.question("Qual valor é considerado falsy em Javascript? \n(a) 1 \n(b) 0 \n(c) 'texto'\n", (resposta3) => {
            if(resposta3 == 'b') {
                console.log('Parabéns!! Você acertou a última questão');
                acertos += 1;
            } else {
                console.log("Não foi dessa vez");
            }


                if(acertos == 3) {
                    console.log('Parabéns!! Você acertou todas as alternativas');
                    console.log('Total de acertos: ', acertos);
                }
                else if (acertos == 2) {
                    console.log("Muito bom! Continue assim");
                    console.log('Total de acertos: ', acertos);
                }
                else {
                    console.log('Não acertou nenhuma questão, continue praticando');
                    console.log('Total de acertos: ', acertos);
                }

            pergunta.close();
        })

    })
})

