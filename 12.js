// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
const prompt = require('prompt-sync')()

let tabuada = Number(prompt('Informe um número para exibirmos a tabuada dele: '))

for (let i = 1; i <= 10; i++) {
	console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}
console.log('Valor inválido, um número não foi selecionado.')