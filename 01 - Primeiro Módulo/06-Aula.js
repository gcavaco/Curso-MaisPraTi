// // // Aula 06 - Revisão e exercícios práticos

const prompt = require('prompt-sync')()
// Exercício 01 Escreva um algorítimo que leia uma temperatura em graus Celsius e a converta para Fahrenheit
// A fórmula de conversão é: F = C * 9/5 + 32

// let celsius = Number(prompt('Digite o valor em graus Celsiusº: '))

// let fahrenheit = (celsius * 9/5) + 32
// console.log('A temperaruta em Fahrenheit é', fahrenheit)
//------------------------------------------------------------------------------------------------------------

// Exercício 02 - Escreva um algorítimo que leia o número de eleitores de um município, o número de votos brancos, 
// nulos e válidos. Calcule e escreva o percentual que cada um representa em relação ao total de eleitores.
// Obs: O percentual de votos válidos é a soma dos votos válidos e nulos.

// let numEleitores = Number(prompt('Digite o número de eleitores do Município: '))
// let votosBrancos = Number(prompt('Digite o total de votos em branco: '))
// let votosNulos = Number(prompt('Digite o total de votos nulos: '))
// let votosValidos = Number(prompt('Digite o total de votos válidos: '))

// let totalVotos = votosValidos + votosNulos
// let percentualValidos = (totalVotos / numEleitores) * 100
// let percentualBrancos = (votosBrancos / numEleitores) * 100
// let percentualNulos = (votosNulos / numEleitores) * 100

// console.log(`O percentual de votos válidos é: ${percentualValidos.toFixed(2)} %`)
// console.log(`O percentual de votos em branco é: ${percentualBrancos.toFixed(2)}%`)
// console.log(`O percentual de votos nulos é: ${percentualNulos.toFixed(2)}%`)
//------------------------------------------------------------------------------------------------------------

// Exercício 03 - A turma C é composta de 60 alunos, e a turma D de 20 alunos. 
// Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, 
// o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

// exemplo de entrada
//10 percentual de alunos reprovados na c, 85 percentual de alunos reprovados na da
// 6, 3 (quantidade), 11.25 (percentual)

// let turmaC = 60
// let turmaD = 20

// let percentualReprovadosC = Number(prompt('Digite o percentual de alunos reprovados na turma C: '))
// let percentualAprovadosD = Number(prompt('Digite o percentual de alunos aprovados na turma D: '))

// let reprovadosC = (percentualReprovadosC / 100) * turmaC
// let reprovadosD = ((100 - percentualAprovadosD) / 100) * turmaD
// let percentualReprovadosTotal = ((reprovadosC + reprovadosD) / (turmaC + turmaD)) * 100

// console.log('A quantidade de alunos reprovados na turma C é:', reprovadosC)
// console.log('A quantidade de alunos reprovados na turma D é:', reprovadosD)
// console.log('O percentual total de alunos reprovados nas duas turmas é:', percentualReprovadosTotal.toFixed(2) + '%')
//------------------------------------------------------------------------------------------------------------

// Faça um programa que leia o dia da semana (Domingo, segunda, terça, quarta, quinta, sexta ou sábado)
// Esse dia deve ser um texto. Se for Sábado ou domingo, imprima "Final de semana", senão imprima "Dia de semana"

// let dia = prompt('Digite um dia da semana: ')

// if (dia === 'sábado' || dia === 'sabado' || dia === 'domingo') {
// 	console.log("Fim de Semana")
// }  else if (dia === 'segunda' || dia === 'terça' || dia === 'quarta' || dia === 'quinta' || dia === 'sexta') {
//     console.log("Dia Útil")
// }   else {
//     console.log("Dia inválido")
// }
//------------------------------------------------------------------------------------------------------------

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. 
//Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. 
//Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

// let valor = Number(prompt('Digite um valor para saber se é negativo ou positivo, 0 para a impressão: '))

// while (valor !== 0) {
// 	if (valor > 0) {
// 		console.log(`O número ${valor} é POSITIVO`)
// 	}	else {
// 		console.log(`O número ${valor} é NEGATIVO`)		
// 	}
//     valor = Number(prompt('Digite um valor para saber se é negativo ou positivo, 0 para a impressão: '))
// }
//------------------------------------------------------------------------------------------------------------

//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida.
//Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA".
//Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado
//Considere que a senha correta é o valor 2807.

let senha = prompt('Digite a senha correta: ')

while (senha !== '2807') {
	console.log('SENHA INVÁLIDA')
	senha = prompt('Digite a senha correta: ')
}
console.log('ACESSO PERMITIDO')