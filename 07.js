// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
const prompt = require('prompt-sync')()

let qtdMaca = Number(prompt('Informe a quantidade de maças que deseja comprar: '))
let total = 0

if (qtdMaca < 12) {
	total = qtdMaca * 0.30
	console.log(`A quantidade de maças é ${qtdMaca} e o valor total a ser pago é: R$ ${total.toFixed(2)}`)
}	else {
	total = qtdMaca * 0.25
	console.log(`A quantidade de maças é ${qtdMaca} e o valor total a ser pago é: R$ ${total.toFixed(2)}`)
}
