// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
const prompt = require('prompt-sync')()

let peso = Number(prompt('Digite o seu peso: '))
let altura = Number(prompt('Digite a sua altura: '))
let imc = peso / (altura ** 2)
console.log('O seu IMC é:', imc.toFixed(2))

if (imc < 18.5) {
		console.log('Você está na categoria baixo peso.')	
}	else if (imc >= 18.5 && imc <= 24.99) {
		console.log('Você está na categoria peso normal.')
}	else if (imc >= 25 && imc <= 29.99) {
		console.log('Você está na categoria sobrepeso.')
}	else if (imc >= 30 && imc <= 34.99) {
		console.log('Você está na categoria obesidade grau I.')
}   else if (imc >= 35 && imc <= 39.99) {
        console.log('Você está na categoria obesidade grau II.')
}	else if (imc >= 40) {
        console.log('Você está na categoria obesidade mórbida grau III.')
}   else {
        console.log('Valor inválido.')
}