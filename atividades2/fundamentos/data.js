//Puxa a hora e a data (Padrão americano)
const agora = new Date()
console.log(agora)

console.log('Ano:', agora.getFullYear())
console.log('Mês 0-11:', agora.getMonth())
console.log('Dia do mês:', agora.getDate())

console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())

//Formatando a Data/Hora manualmente
const nascimento = new Date('2007-09-13T06:00:00.000Z')
console.log("Nascimento: ", nascimento)

// Escolhendo o formato da data
console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))