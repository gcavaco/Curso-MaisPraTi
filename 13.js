// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
const prompt = require('prompt-sync')()

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
