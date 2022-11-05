const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // mostra que é um numero verdadeiro
console.log(Number.isInteger(peso2)) // mostra que é um número verdadeiro

const avaliacao1 = 9.871 // variável constante com a sigla (const)
const avaliacao2 = 6.871 // variável constante com a sigla (const)

const total = avaliacao1 * peso1 + avaliacao2 * peso2 // avaliação 1 x peso1 + avaliação 2 x peso2 
const media = total /(peso1 + peso2) // media total das notas 

console.log(media.toFixed(2)) //limita a nota a 2 números após o ponto 
console.log(media.toString(2)) // transforma o numero em um binario 
console.log(typeof media) //Mostra que (MEDIA) é  do tipo número