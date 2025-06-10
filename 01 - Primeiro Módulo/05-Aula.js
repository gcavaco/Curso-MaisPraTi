// // // Aula 05 - Estruturas de Repetição: while, for, do while

// WHILE | Quando não sabe quantas vezes vai repetir e depende de uma condição.
// DO...WHILE | Quando precisa que o código rode pelo menos uma vez antes de checar a condição.
// FOR | Quando sabe ou controla a quantidade de repetições.

// let = contadora = 0

// while(contadora < 10){
//     console.log(contadora)
//     contadora++
// }

// console.log('Mengoooooo')

// -> Tabuada com FOR
// let resultado = 0
// let num = Number(prompt('Escolha um número: '))

// for (let contador = 1; contador <= 10; contador++){
// 	resultado = num * contador
// 	console.log(num, '*', contador, 'é igual a', resultado)
// }

const prompt = require('prompt-sync')()

// -> Tabuada com WHILE
// let contador = 1
// let resultado = 0
// let numeroT = Number(prompt('Digite um número:'))

// while(contador <= 10){
// 	resultado = contador * numeroT
// 	console.log(`${numeroT} x ${contador} = ${resultado} `)
// 	contador++
// }

// let contador = 1
// let resultado = 0
// let num = Number(prompt('Escolha um número: '))

// while(contador <= 10){
// 	resultado = num * contador
// 	console.log(num, '*', contador, 'é igual a', resultado)
// }

// -> decrementando com while
// let contadora = 10
// while (contadora >= 0){
// 	console.log(contadora)
// 	contadora--
// }

// //Estrutura do FOR -> inicialização, condição, incremento
// for (let contadora = 0; contadora <= 10; contadora++){
// 	console.log(contadora)
// }

// for (let contadora = 10; contadora >= 0; contadora--){
//} console.log(contadora)

// façam uma média aritmética de números inseridos até que o usuário digite 0

// let contador = 0
// let resposta = Number(prompt('Digite um valor, digite 0 para calcular: '))
// let soma = 0
// let mediaFinal = 0

// while(resposta !== 0){
//     soma = soma + resposta
//     contador++

//     resposta = Number(prompt('Digite um valor, digite 0 para calcular: '))
// }

// mediaFinal = soma / contador
// console.log(`A média é: ${mediaFinal}`)

// Contador de 0 a 10 incrementando e depois de 10 a 0 decrementando
// for (let contadora = 0; contadora <= 10; contadora++){
//     console.log(contadora)
// }

// for (contadora = 10; contadora >= 0; contadora--){
//     console.log(contadora)
// }

// Tabuada com For
// let x = Number(prompt('Digite o número para saber a tabuada dele: '))
// for(i = 1; i <=10; i++){
// 	console.log(`${x} x ${i} = ${i*x}`)
// }

//Média Aritmética de números inseridos até o usuário digitar 0

let contador = 0
let numero = Number(prompt('Digite quantos números quiser para saber a média e 0 para calcular: '))
let soma = 0

while(numero != 0){
	soma += numero
	contador++
	numero = Number(prompt('Digite quantos números quiser para saber a média e 0 para calcular: '))
}

let media = soma / contador
console.log(`A média é: ${media}`)

// let contador = -1
// let numero = null
// let soma = 0

// do {
//     numero = Number(prompt('Digite quantos números quiser para saber a média e 0 para calcular: '))

//     soma += numero
// 	contador++
// } while (numero != 0)

//     let mediaFinal = soma / (contador)
// console.log(`A média é: ${mediaFinal}`)