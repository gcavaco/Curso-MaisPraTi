//1 - Escreva um programa que receba um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if
const prompt = require('prompt-sync')()

let numeroInt = Number(prompt('Digite um número inteiro: '))
if (numeroInt % 2 === 0){
	console.log(`O número ${numeroInt} é par`)
}	else {
	console.log (`O número ${numeroInt} é ímpar`)
}
//--------------------------------------------------------------------------------------------------------------------------

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) 
// com base no valor fornecido, utilizando uma estrutura de controle if-else.

let idade = Number(prompt('Digite a sua idade: '))

if (idade >= 0 && idade <= 12){
	console.log('Você é uma criança')
}	else if (idade >= 13 && idade <= 17){
	console.log('Você é um adolescente')
}	else if (idade >= 18 && idade <= 62){
	console.log('Você é um adulto')	
}	else if (idade >= 63){
	console.log('Você é um idoso')
}	else {
	console.log('Idade não identificada, verifique o valor digitado e tente novamente')
}
//--------------------------------------------------------------------------------------------------------------------------

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt('Digite a sua nota: '))

if (nota >= 6){
	console.log('Aprovado')
}	else if (nota > 5 && nota < 6) {
	console.log('Recuperação')
}	else {
	console.log('Reprovado')
}
//---------------------------------------------------------------------------------------------------------------------------

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.

let opcao = prompt('Digite a fruta desejada: uva, banana ou laranja: ')

switch(opcao){
	case 'uva':
		console.log('Você escolheu a fruta "uva".')
		break
	case 'banana':
		console.log('Você escolheu a fruta "banana".')
		break
	case 'laranja':
		console.log('Você escolheu a fruta "laranja".')
		break
	default:
		console.log('A opcão selecionada é inválida.')
		break
}
//---------------------------------------------------------------------------------------------------------------------------

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a 
// categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

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
//--------------------------------------------------------------------------------------------------------------------------

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. 
// Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

let ladoA = Number(prompt('Digite o lado A do triângulo:'))
let ladoB = Number(prompt('Digite o lado B do triângulo:'))
let ladoC = Number(prompt('Digite o lado C do triângulo:'))

if (((ladoA + ladoB) > ladoC) && ((ladoA + ladoC) > ladoB) && ((ladoB + ladoC) > ladoA)) {
	if (ladoA === ladoB && ladoA === ladoC) {
		console.log('Triângulo Equilátero')
	} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Triângulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }
} else {
	console.log('Os dados informados não formam um triângulo')
}
//--------------------------------------------------------------------------------------------------------------------------------------

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.


let qtdMaca = Number(prompt('Informe a quantidade de maças que deseja comprar: '))
let total = 0

if (qtdMaca < 12) {
	total = qtdMaca * 0.30
	console.log(`A quantidade de maças é ${qtdMaca} e o valor total a ser pago é: R$ ${total.toFixed(2)}`)
}	else {
	total = qtdMaca * 0.25
	console.log(`A quantidade de maças é ${qtdMaca} e o valor total a ser pago é: R$ ${total.toFixed(2)}`)
}
//---------------------------------------------------------------------------------------------------------------------------------------

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))

if (valor1 > valor2) {
	console.log(valor2)
	console.log(valor1)
} else {
	console.log(valor1)
	console.log(valor2)
}
//---------------------------------------------------------------------------------------------------------------------------------------

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

for (let i = 10; i > 0; i--){
	console.log(i)
}
//---------------------------------------------------------------------------------------------------------------------------------------

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numInt = parseInt(prompt('Digite um número inteiro:'))

for (let i = 1; i <= 10; i++){
	console.log(numInt)
}
//---------------------------------------------------------------------------------------------------------------------------------------

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let somatotal = 0

for (let i = 0; i < 5; i++) {
	let valores = Number(prompt('Digite um número: '))
	somatotal = somatotal + valores
}

console.log('A soma total dos números fornecidos é: ', somatotal)
//---------------------------------------------------------------------------------------------------------------------------------------

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let tabuada = Number(prompt('Informe um número para exibirmos a tabuada dele: '))

for (let i = 1; i <= 10; i++) {
	console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}
console.log('Valor inválido, um número não foi selecionado.')
//---------------------------------------------------------------------------------------------------------------------------------------

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let decimal = parseFloat(prompt('Digite valores decimais apenas. Digite 0 para saber a média aritimética: '))
let i = 0
let resposta = 0

while (decimal != 0) {	
    if (isNaN(decimal)) {
        console.log('Valor inválido! Por favor, digite um número decimal.')
    } else {
        resposta += decimal
        i++
    }

    decimal = parseFloat(prompt('Digite valores decimais apenas. Digite 0 para saber a média aritimética: '))
}

if (i === 0) {
    console.log('Nenhum número válido foi inserido para calcular a média.')
} else {
    console.log(`A média aritmética é: ${(resposta / i).toFixed(2)}`)
}
//---------------------------------------------------------------------------------------------------------------------------------------

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let fatorial = Number(prompt('Digite o número para obter o cálculo fatorial: '))
let soma = 1

for (let i = 1; i <= fatorial; i++) {
    soma = soma * i
}
console.log(`O fatorial de ${fatorial} é ${soma}`)
//---------------------------------------------------------------------------------------------------------------------------------------

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for

let f = 0
let j = 1
console.log(f)
console.log(j)

for (let i = 2; i < 10; i++) {
	let m = f + j
	console.log(m)
	f = j
	j = m
}
//---------------------------------------------------------------------------------------------------------------------------------------
