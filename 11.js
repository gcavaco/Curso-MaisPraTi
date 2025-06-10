// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
const prompt = require('prompt-sync')()

let somatotal = 0

for (let i = 0; i < 5; i++) {
	let valores = Number(prompt('Digite um número: '))
	somatotal = somatotal + valores
}

console.log('A soma total dos números fornecidos é: ', somatotal)