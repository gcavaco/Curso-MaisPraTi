// // Aula 07 - Vetores Unidimensionais / Arrays
// // Array é uma estrutura de dados que armazena uma coleção de elementos, todos do mesmo tipo.

let listaFrutas = Array()
let listaNomes = ['Giovanna', 'Augusto']

listaFrutas[0] = 10
listaFrutas[1] = 'morango'
listaFrutas['adocicadas'] = 'pera'

for(let i = 0; i < listaFrutas.length; i++){
	console.log(listaFrutas[i])
}

listaFrutas.push('melancia') //adiciona no final do array
listaFrutas.unshift('laranja') //adiciona no início do array

listaFrutas.pop() //remove o último elemento do array
listaFrutas.shift() //remove o primeiro elemento do array

console.table(listaFrutas)
console.table(listaNomes)