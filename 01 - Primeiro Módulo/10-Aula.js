// // // Aula 10 - Manipulaçãp de Strings - Métodos de String
// let nome = 'Luís Oliveira'

// console.log(nome.length) // Tamanho da string
// console.log(nome.charAt(0)) // Primeiro caractere
// console.log(nome.indexOf('O')) // Posição do caractere dentro da string
// console.log(nome.replace('Oliveira', 'Gustavo')) // Substitui o caractere
// console.log(nome.substr(5, 5)) // Pega os 5 primeiros caracteres
// console.log(nome.toUpperCase()) // Transforma em maiúsculo
// console.log(nome.toLowerCase()) // Transforma em minúsculo
// console.log("     Wesley   ".trim()) // Remove os espaços em branco (Geralmente usado para digitação de senhas)

// Façam uma função que inverta uma string
// function inverterString(str) {
// 	let reversed = ''
	
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		reversed += str[i]
// 	}
// 	return reversed
// }

// console.log(inverterString('Olá, Mundo!'))

// function reverseString(str) {
//     // Transforma a string em um array, inverte o array e transforma de volta em string
//     return str.split('').reverse().join('') 
    
// }

// console.log(reverseString('Olá, Mundo!'))

// Encontrem o número de vogais em uma string
// function contarVogal(vgl) {
// for (i = 0; i < vgl.length; i++) {
// 	let vogais = 0
	
// 	if ((vgl[i] == 'a') || (vgl[i] == 'b') || (vgl[i] == 'c') || (vgl[i] == 'd') || (vgl[i] == 'e')) {
// 		vogais += i
// 	}
	
// }
// }
// contarVogal(nome)

// function countVowels(str) {
// 	let vowels = str.match(/[aeiouáéíóúâêôãõàèìòùäëïöü]/gi)
// 	if (vowels) {
// 		return vowels.length
// 	} else {
// 		return 0
// 	}
		
// }
// console.log(countVowels('Jacques'))

// function countVowels(str) {
// 	let vowels = str.match(/[aeiouáéíóúâêôãõàèìòùäëïöü]/gi) //Expressão regular para encontrar vogais
//     return vowels ? vowels.length : 0
		
// }
// console.log(countVowels('Luís Oliveira'))

// // MATH
// console.log(Math.ceil(100.2)) // Arredonda para cima
// console.log(Math.floor(100.2)) // Arredonda para baixo
// console.log(Math.round(100.2)) // Arredonda para o inteiro mais próximo

// console.log(Math.sqrt(81)) // Raiz quadrada
// console.log(Math.cbrt(81)) // Raiz cúbica
// console.log(Math.pow(9,2)) // Potência

// console.log(Math.abs(-100.2)) // Valor absoluto

// console.log(Math.random()) // Gera um número aleatório entre 0 e 1
// console.log(Math.random() * 100) // Gera um número aleatório entre 0 e 100
// console.log(Math.floor(Math.random() * 100)) // Gera um número aleatório entre 0 e 100 e arredonda para baixo

// Gerar um número aleatório entre dois valores
// function randomBetween(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min
// }
// console.log(randomBetween(1, 10)) // Gera um número aleatório entre 1 e 10

// Manipulando datas
// let date = new Date() // Cria um objeto de data com a data e hora atuais

// console.log(date.getDate()) // Retorna o dia do mês (1-31)
// console.log(date.getMonth() + 1) // Retorna o mês (0-11) - Adiciona 1 para corrigir o mês
// console.log(date.getFullYear()) // Retorna o ano (4 dígitos)
// console.log(date.toString()) // Retorna a data como uma string

// let date1 = new Date('2015, 7, 7') // Cria um objeto de data com uma data específica
// let date2 = new Date('2025, 7, 7') // Cria um objeto de data com uma data específica

// console.log(date1.getTime()) // Retorna o timestamp (milissegundos desde 1 de janeiro de 1970)
// console.log(date2.getTime()) // Retorna o timestamp (milissegundos desde 1 de janeiro de 1970)

// // Calcula a diferença entre as duas datas em milissegundos
// let milissegundosEntreDatas = Math.abs(date2.getTime() - date1.getTime())
// console.log(milissegundosEntreDatas) // Exibe a diferença em milissegundos

// let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000) // Número de milissegundos em um dia
// console.log(`A diferença entre as datas é de: ${milissegundosEntreDatas/milissegundosPorDia}`)


//Formatar uma data
// let date = new Date(2025, 5, 12) // Cria um objeto de data com a data e hora atuais

// function formatDate(date) {
// 	let day = date.getDate().toString().padStart(2, '0') // Adiciona um zero à esquerda se o dia for menor que 10
// 	let month = (date.getMonth()).toString().padStart(2, '0') // Adiciona um zero à esquerda se o mês for menor que 10
// 	let year = date.getFullYear() // Retorna o ano (4 dígitos)

// 	return `${day}/${month}/${year}` // Retorna a data formatada
// }

// console.log(formatDate(date)) // Exibe a data formatada

// A soma de duas matrizes
let matrizA = [
  [1, 2],
  [3, 4]
]

let matrizB = [
  [5, 6],
  [7, 8]
]

function somaMatriz(m1, m2) {
  let resultado = []

  for (let i = 0; i < m1.length; i++) {
    let linha = []

    for (let j = 0; j < m1[i].length; j++) {
      linha.push(m1[i][j] + m2[i][j])
    }

    resultado.push(linha)
  }

  return resultado
}

console.table(somaMatriz(matrizA, matrizB))