//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require('prompt-sync')()

let fatorial = Number(prompt('Digite o número para obter o cálculo fatorial: '))
let soma = 1

for (let i = 1; i <= fatorial; i++) {
    soma = soma * i
}
console.log(`O fatorial de ${fatorial} é ${soma}`)