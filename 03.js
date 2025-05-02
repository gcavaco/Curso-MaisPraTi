// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a sua nota: '))

if (nota >= 6){
	console.log('Aprovado')
}	else if (nota > 5 && nota < 6) {
	console.log('Recuperação')
}	else {
	console.log('Reprovado')
}