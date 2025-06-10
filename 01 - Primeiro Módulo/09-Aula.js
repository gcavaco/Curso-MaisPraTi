// Aula 09 - Funções
// // Função é um bloco de código que pode ser chamado em qualquer parte do programa,
// // evitando a repetição de código e facilitando a manutenção do mesmo.
// // Uma função pode receber parâmetros e retornar um valor.
// // Uma função pode ser chamada em qualquer parte do programa, desde que tenha sido declarada antes.
// // Uma função pode ser chamada várias vezes, com diferentes parâmetros, retornando diferentes valores.
// // Uma função pode ser chamada dentro de outra função, criando uma hierarquia de chamadas.

// let listaCoisas = Array()
// listaCoisas['hardware'] = ['Placa de Vídeo']
// listaCoisas['hardware'][1] = 'Smartwatch'
// listaCoisas['games'] = ['GTA VI']
// listaCoisas['games'][1] = 'The Witcher'

// console.table(listaCoisas)
// console.table(listaCoisas['hardware'])
// console.table(listaCoisas['games'])

//FUNÇÃO
// function RetornaParOuImpar(valor) { // Declaração da função
//     // Parâmetro valor é o valor que será passado para a função
//     // A função irá retornar 'Par' ou 'Ímpar' dependendo do valor passado

//     let resultado // a variável resultado irá armazenar o resultado da função
//     // A variável resultado é declarada, mas não inicializada, pois o valor será atribuído dentro da função

//     if (valor % 2 == 0) {
//         resultado = 'Par'
//     } else {
//         resultado = 'Ímpar'
//     }

//     return resultado // Retorna o resultado da função
//     // A função pode retornar qualquer tipo de dado, como string, número, array, objeto, etc.
// }

// let numero = 10
// let resultado = RetornaParOuImpar(10)
// console.log(resultado)
// resultado = RetornaParOuImpar(11)
// console.log(resultado)
// console.log(RetornaParOuImpar(12))
// console.log(RetornaParOuImpar(numero))

// // // PROCEDIMENTO - não retorna valor
// // // A função não retorna valor, apenas executa um bloco de código
// function RetornaParOuImpar(valor) {
//     let resultado 

//     if (valor % 2 == 0) {
//         resultado = 'Par'
//     } else {
//         resultado = 'Ímpar'
//     }

//     console.log(resultado)
// }

// function calculaArea(altura, largura) {
//     return altura * largura
// }

// console.log(calculaArea(10 , 10))

// Façam uma função que retorna um array ordenado
// Com o método sort
// let numSemOrdem = [10, 2, 9, -65, 233, 985, 15, 8, -1, 23, 32]
// numSemOrdem.sort((a,b) => a - b)
// console.table(numSemOrdem)

// // Com o método sort utilizando uma função
// function ordenaArray(array) {
//     return array.sort((a, b) => a - b)
// }
// console.table(ordenaArray([1, 3, 2, 10, 7])) // passando o array diretamente
// console.table(ordenaArray(numSemOrdem)) // passando o array que já foi criado

// // Função que mostra o nome com o console.log dentro da função
// function exibeNome(nome) {
//     console.log(`Olá ${nome}`)
// }
// // Chama a função exibeNome passando o parâmetro 'Luís'
// exibeNome('Luís')

// // // Mesma função, mas com retorno
// function exibeNome(nome) {
//         return(`Olá ${nome}`)
// }
// console.log(exibeNome('Luís'))

// // FUNÇÃO ANÔNIMA
// Atribuindo uma função anônima a uma variável
// let exibeNome = function(nome) {
//     console.log(nome)
// }

// exibeNome('Luís Gustavo')

// // Arrow function (Usar quando tivermos intruções muito curtas)
// let exibeNome1 = (nome) => console.log(nome)
// exibeNome1('Luís Oliveira')

// // // Função por parâmetro é um callback
// // let sucesso = () => console.log('Requisição foi um sucesso!')

// let erro = function() {
//     console.log('Requisição deu errado!')
// }

// function requisicao(sucesso, erro) {
//     if(true) {
//         sucesso('Requisição deu certo mesmo!')
//     } else {
//         erro()
//     }
// }

// requisicao((message) => console.log(message), erro)
// // Função com parâmetro de callback

// Criar uma função que soma os elementos de um array e retorna o resultado
// let numeros2 = [221, 2, 13, 4, 5, 6, 57, 28, 89, 1]
// function somaArray(arr) {
// 	let resultado = arr.reduce((acc, crr) => acc + crr ,0)
	
// 	return resultado
// }

// console.log(somaArray(numeros2))

// Criar uma função que soma os elementos de um array e retorna o resultado
// function somaArray(arr) {
// 	let soma = 0 
	
// 	for (let i = 0; i < arr.length; i++){
// 		soma += arr[i]
// 	}
// 	return soma
// }

// console.log(somaArray([1, 2, 3, 4, 5]))

// Retorna o maior número em um array
function maiorNumeroArray(arr) {
	let maiorNumero = arr[0]

	for (let i = 0; i < arr.length; i++) {
		if (maiorNumero < arr[i])
			maiorNumero = arr[i]
	}
	console.log(maiorNumero)
}
maiorNumeroArray([5, 7, 99, 1, -6, 18, 45, 2])

// function maiorNumeroArray(arr) {
// 	let maiorNumero = arr[0]
// 	for (let i = 0; i < arr.length; i++) {
// 		if (maiorNumero < arr[i])
// 			maiorNumero = arr[i]
// 	}
// 	return maiorNumero
// }
// console.log(maiorNumeroArray([5, 7, 599, 1, -6, 18]))