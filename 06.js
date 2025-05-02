// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: 
//Isósceles, escaleno ou eqüilátero.
const prompt = require('prompt-sync')()

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