// // Aula 08 - Vetores Multidimensionais / Arrays

// listaFrutas.push('melancia') //adiciona no final do array
// listaFrutas.unshift('laranja') //adiciona no início do array
// listaFrutas.pop() //remove o último elemento do array
// listaFrutas.shift() //remove o primeiro elemento do array


// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.
// Use métodos de array para calcular:
// A soma de todos os elementos.
// A média dos elementos. 

// Gere um novo array chamado pares que contenha apenas os números pares de numeros.
// Imprima no console:
// O array original 'numeros'
// A soma
// A média
// O array pares

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let soma = 0
// for (i = 0; i < numeros.length; i++) {
// 	soma += numeros[i]
// }
// let media = soma / numeros.length
// console.log(`A soma de todos os elementos é ${soma}`)
// console.log(`A media de todos os elementos é ${media}`)

// // let somaPares = 0
// // let pares = []
// // for (i = 0; i < numeros.length; i++) {
// // 	if (numeros[i] % 2 === 0) {
// // 		pares.push(numeros[i]) // Adiciona apenas pares
// // 	}
// // }
// let pares = numeros.filter(num => num % 2 === 0)
// let somaPares = pares.reduce((acc, curr) => acc + curr, 0)
// let mediaPares = pares.length > 0 ? somaPares / pares.length : 0

// console.table(numeros)
// console.table(pares)
// console.log(`A média dos pares é ${mediaPares}`)

//========================
//Testar com métodos de array

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0) 
// // Reduce é um método de array que reduz o array a um único valor, nesse caso a soma dos elementos
// let pares = numeros.filter((num => num % 2 === 0)) 
// // Filter é um método de array que filtra os elementos do array com base em uma condição, nesse caso os pares
// // let media = soma / numeros.length
// // console.log(soma)
// // console.log(media)
// // console.table(pares)

// // Ordene o array 'numeros' em ordem crescente
// let numeros1 = [221, 2, 13, 4, -5, 6, 57, 28, 89, 1]
// // numeros1.sort((a, b) => a - b) // Ordenando com o método sort
// // console.table(numeros1)

// // Ordenando com FOR
// let n = numeros1.length
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - 1; j++) {
//         if (numeros1[j] > numeros1[j + 1]) {
//             // Troca os elementos
//             let temp = numeros1[j]
//             numeros1[j] = numeros1[j + 1]
//             numeros1[j + 1] = temp
//         }
//     }
// }
// console.table(numeros1)

let matriz = []

for (let i = 0; i < 3; i++) {
    matriz[i] = []

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = 10
    }
}

let mercado = []
mercado['fruteira'] = ['maca', 'abacate', 'pera']
mercado['acougue'] = ['picanha', 'alcatra', 'file']

console.table(mercado)
console.table(matriz)

// Calculem a diagonal dessa matriz
let somaDiagonal = 0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = 10
        if (i === j) {
            somaDiagonal += matriz[i][j]
        }
    }
}
console.log(somaDiagonal)