//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) 
// com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require('prompt-sync')()

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