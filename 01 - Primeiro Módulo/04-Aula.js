// // // Aula 04 - Estruturas de Controle: Condicionais (if, else. switch case)

// let opcao = 1

// switch(opcao){
// 	case 1:
// 		console.log('Você escolheu a opção 1')
// 		break
// 	case 2:
// 		console.log('Você escoleh a opção 2')
// 		break
// 	default:
// 		console.log('Você não escolheu nenhuma opção válida')
// } 

// let opcao1 = 'opcao1'

// switch(opcao1){
// 	case 'opcao1':
// 		console.log('Você escolheu a opção 1')
// 		break
// 	case 'opcao2':
// 		console.log('Você escolheu a opção 2')
// 		break
// 	default:
// 		console.log('Você não escolheu nenhuma opção válida')
// }

// switch(opcao1){
// 	case (opcao1 != 'opcao2'):
// 		console.log('Você escolheu a opção 1')
// 		break
// 	case 'opcao2':
// 		console.log('Você escolheu a opção 2')
// 		break
// 	default:
// 		console.log('Você não escolheu nenhuma opção válida')
// }

// Calculadora simples com SWITCH CASE
const prompt = require('prompt-sync')()
let numero1 = Number(prompt('Digite o seu primeiro número: '))
let numero2 = Number(prompt('Digite o seu segundo número: '))
let operador = prompt('Selecione o operador lógico: +, -, *, /: ')
let resultado = undefined

switch (operador) {
  case '+':
    resultado = numero1 + numero2
    break;
  case '-':
    resultado = numero1 - numero2
    break;
  case '*':
    resultado = numero1 * numero2
    break;
  case '/':
    if (numero2 !== 0) {
      resultado = numero1 / numero2
    } else {
      console.log('Erro: divisão por zero')
    }
    break;
  default:
    console.log('Você não escolheu nenhuma opção válida')
    break
}

if (resultado !== undefined) {
  console.log('O resultado é:', resultado)
}
//-------------------------------------------------------------------------------------------------------------

// // INÍCIO DOS EXERCÍCIOS

// const prompt = require('prompt-sync')()
//Exercício2: verificar se um número é positivo, negativo ou zero
// let number1 = Number(prompt('Escolha um número: '))

// if (number1 > 0){
// 	console.log('Número Positivo')
// }	else if (number1 < 0){
// 	console.log('Número Negativo')
// }	else if (number1 === 0){
// 	console.log('O número "0" foi escolhido')
// } 	else {
// 	console.log('Nenhum número foi escolhido')
// }
//-------------------------------------------------------------------------------------------------------------

//Exercício3: verificar se um ano é bissexto

// let ano = Number(prompt("Digite o ano com 4 dígitos XXXX: "))

// if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
// 	console.log('O Ano', ano, 'é bissexto')
// }	else {
// 	console.log('O ano', ano, 'não é bissexto') 
// }
//-------------------------------------------------------------------------------------------------------------

//Exercício 4: definam faixas etárias para crianças. adolescentes e adultos. Com switch apresentem na tela se
// a pessoa informou a idade está em uma e qual a faixa etária

/* Resolução somente com IF ELSE*/
// let idade = Number(prompt('Digite a sua idade: '))

// if (idade >= 0 && idade <= 12) {
// 	console.log('Você é uma criança')
// } else if (idade >= 13 && idade <= 17) {
// 	console.log('Você é um adolescente')
// } else if (idade >= 18 && idade <= 64) {
// 	console.log('Você é um adulto')
// } else if (idade >= 65) {
// 	console.log('Você é idoso')
// } else {
// 	console.log('O valor digitado não é uma idade')
// }

/* Resolução com IF ELSE e SWITCH CASE*/
// let idade = Number(prompt('Digite a sua idade: '))
// let faixaEtaria = ' '

// if (idade >= 0 && idade <= 12) {
// 	faixaEtaria = 'criança'
// } else if (idade >= 13 && idade <= 17) {
// 	faixaEtaria = 'adolescente'
// } else if (idade >= 18 && idade <= 64) {
// 	faixaEtaria = 'adulto'
// } else if (idade >= 65) {
// 	faixaEtaria = 'idoso'
// }

// switch(faixaEtaria){
// 	case 'criança':
// 		console.log('Você é uma criança')
// 		break
//  	case 'adolescente':
// 		console.log('Você é um adolescente')
// 		break
// 	case 'adulto':
// 		console.log('Você é um adulto')
// 		break
// 	case 'idoso':
// 		console.log('Você é um idoso')
// 		break
// 	default :
// 	console.log('O valor digitado não é uma idade')
// }
//-------------------------------------------------------------------------------------------------------------