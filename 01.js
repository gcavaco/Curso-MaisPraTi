//1 - Escreva um programa que receba um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if
const prompt = require('prompt-sync')()

let numeroInt = Number(prompt('Digite um número inteiro: '))
if (numeroInt % 2 === 0){
	console.log(`O número ${numeroInt} é par`)
}	else {
	console.log (`O número ${numeroInt} é ímpar`)
}
