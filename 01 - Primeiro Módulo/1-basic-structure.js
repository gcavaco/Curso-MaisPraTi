// console.log("Hello World!")
// console.log('Hello World!')

// console.log(typeof("Olá Mundo!"))
// console.log(typeof(1.5))

// console.log(1.5)
// console.log(typeof('10'), 1000, 'Geralt de Rivia')

// let name = 'Jaques'
// console.log(name)
// LET - MODERNO, pode ser reatribuído

// var anotherName = 'Hyago'
// console.log(anotherName)
// VAR - ANTIGO, pode ser reatribuído

// const CITY = "Alagoas"
// console.log(CITY)
// CITY = "Mossoró" 
// const: constantes não podem ser reatribuídos

// idade = 15 - nunca declare uma variável sem o let, var ou const
// console.log(idade) 

// let test
// console.log(typeof(test)) // undefined
// test = 'teste'
// console.log(test)

// let titulosDoInter = null
// console.log(typeof(titulosDoInter))

// let num1 = 9
// let num2 = 3
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)

// let num = "10"
// console.log(parseInt(num) + 10)

// let counter = 1

// console.log(--counter)
// console.log(counter--)
// console.log(counter)
// console.log(++counter)
// console.log(counter++)

// let step = 12

// counter += step
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step

// console.log(counter)

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 > 5)
// console.log(10 == 5)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != 10)
// console.log(10 !== '10')

// // console.log((10 < 5) && (10 > 2))
// // console.log((10 < 5) && !(10 > 2))
// // console.log((10 < 5) || (10 > 2))
// // console.log((10 > 2) || (10 < 5))

// let usuario = "jaques"
// let senha = "1234"

// let autenticacao = usuario === "jaques" && senha === "1234"

// console.log(autenticacao)

// const nota = 99
// if(nota < 60) {
//     console.log('Reprovado')
// } else if(nota > 90){
//     console.log('Bichão mesmo')
// } else {
//     console.log('Aprovado')
// }

// (nota < 60) ? console.log('Reprovado') : console.log('Aprovado')

// Exercício 1: Verificar se um número é par ou ímpar

// let numeroParImpar = 17

// if(numeroParImpar % 2 === 0) {
// 	console.log("Par")
// } else {
//    console.log("Ímpar")
// }

// numeroParImpar % 2 === 0 ? console.log("Par") : console.log("Ímpar")

// Exercício 2: Encontrar o maior entre três números.

// let num1 = 15
// let num2 = 5
// let num3 = 5

// let maiorNumero = num1
// if(num2 > maiorNumero) {
//     maiorNumero = num2
// } else if(num3 > maiorNumero) {
//     maiorNumero = num3
// }
// console.log(maiorNumero)

// if((num1 > num2) && (num1 > num3)) {
//     console.log(num1)
// } else if ((num2 > num1) && (num2 > num3)) {
//     console.log(num2)
// } else if ((num3 > num1) && (num3 > num2)) {
//     console.log(num3)
// } else {
//     console.log("Os números são iguais ou há empate entre dois ou mais números")
// }

//Exercício 3: Façam uma calculadora simples utilizando entrada de usuário.

const prompt = require('prompt-sync')()
// const prompt = require('prompt-sync')({ sigint: true }) // Para usar no terminal

// let numero1 = Number(prompt("Digite o primeiro número: "))
// let numero2 = Number(prompt("Digite o segundo número: "))
// let operador = prompt("Digite a operação desejada: +, -, *, /")
// resultado = 0

// if (operador === "+") {
//     resultado = numero1 + numero2
// } else if (operador === "-") {
//     resultado = numero1 - numero2
// } else if (operador === "*") {
//     resultado = numero1 * numero2
// } else if (operador === "/") {
//     if (numero2 !== 0) {
//         resultado = numero1 / numero2
//     } else {
//         console.log("Divisão por zero não é permitida")
//         resultado = undefined
//     }
// } else {
//     console.log("Operador desconhecido ou não válido")
//     resultado = undefined
// }

// if (resultado !== undefined) {
//     console.log("O resultado é:", resultado)
// }

// let opcao = 1

// switch (opcao) {
//     case 1:
//         console.log('Você escolheu a opção 1')
//         break
//     case 2:
//         console.log('Você escolheu a opção 2')
//         break
//     default :
//         console.log('Você não escolheu nenhuma opção válida')
//         break
// }

// const prompt = require('prompt-sync')()
// const prompt = require('prompt-sync')({ sigint: true }) // Para usar no terminal

// let numero1 = Number(prompt('Digite o seu primeiro número:'))
// let numero2 = Number(prompt('Digite o seu primeiro número:'))
// let operador = prompt('Selecione o operador lógico: +, -, *, /: ')
// let resultado = 0

// switch(operador){
// 	case '+':
// 		resultado = numero1 + numero2
// 		break
// 	case '-':
// 		resultado = numero1 - numero2
// 		break
// 	case '*':
// 		resultado = numero1 * numero2
// 		break
// 	case (operador == '/' && numero2 == 0):
// 		console.log('Erro: divisão por zero')
// 		resultado = undefined
// 		break
// 	case '/':
//         if (numero2 !== 0) {
// 		resultado = numero1 / numero2
//         }
//         break
// 	default:
// 		console.log('Você não escolheu nenhuma opção válida')
// 		resultado = undefined
// 		break
// }
// if (resultado !== undefined) {
// console.log('O resultado é:', resultado)
// }


//Exercício3: verificar se é bissexto
//Exercício 4: definam faixas etárias para crianças. adolescentes e adultos. Com switch apresentem na tela se
// a pessoa informou a idade está em uma e qual a faixa etária

//Exercício2: verificar se um número é positivo, negativo ou zero
// let number1 = Number(prompt('Escolha um número: '))

// if (number1 > 0){
// 	console.log('Número Positivo')
// }	else if (number1 < 0){
// 	console.log('Número Negativo')
// }	else if (number1 === 0){
// 	console.log('O número "0" foi escolhido')
// } 	else {
// 	console.log('Nenhum número foi escolhido')
// }
//-------------------------------------------------------------------------------------------------------------

// console.log(1982 % 4 === 0 ? 'Bissexto' : 'Não bissexto')
// console.log(2000 % 4 === 0 ? 'Bissexto' : 'Não bissexto')
// console.log(2024 % 4 === 0 ? 'Bissexto' : 'Não bissexto')

//--------------------------------------------------------------------------------------------------------------

// Aula 4 - Estruturas de Repetição

// WHILE É SEMPRE 'TRUE' - enquanto a condição for verdadeira, o loop continua

//TABUADA DO 1 A 10
// const prompt = require('prompt-sync')()
// let contador = 1
//let resultado = 0
// let num = Number(prompt('Escolha um número: '))

// while(contador <= 10){
// 	resultado = num * contador
// 	console.log(num, '*', contador, 'é igual a', resultado)

// 	contador += 1
// }

// let contador = 1
// let num = Number(prompt('Escolha um número: '))

// while(contador <= 10){
// 	console.log(`${num} x ${contador} = ${num * contador}`)
// 	contador += 1
// }



// decrementando com while
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

// tabuada com for
// let resultado = 0
// let num = Number(prompt('Escolha um número: '))
// for (let contador = 1; contador <= 10; contador++){
// 	resultado = num * contador
// 	console.log(num, '*', contador, 'é igual a', resultado)
// }

// façam uma média aritmética de números inseridos até que o usuário digite 0

// let contador = 0
// let resposta = Number(prompt('Digite um valor, digite 0 para calcular: '))
// let soma = 0

// while(resposta != 0){
// 	soma += resposta
// 	contador++

// 	resposta = Number(prompt('Digite um valor, digite 0 para calcular: '))
// }

// let mediaFinal = soma / contador
// console.log('Media é: ', mediaFinal)

//-------------------------------------------------------------------------------------------------------------

// Aula 06 - Exercícios para treinar

// Exercício 01 Escreva um algorítimo que leia uma temperatura em graus Celsius e a converta para Fahrenheit
// A fórmula de conversão é: F = C * 9/5 + 32

// let celsius = Number(prompt('Digite a temperatura em graus Celsius: '))
// let fahrenheit = (celsius * 9/5) + 32
// console.log('A temperatura em Fahrenheit é: ', fahrenheit)

// Exercício 02 - Escreva um algorítimo que leia o número de eleitores de um município, o número de votos brancos, 
// nulos e válidos. Calcule e escreva o percentual que cada um representa em relação ao total de eleitores.

// let eleitores = Number(prompt('Digite o número de eleitores: '))
// let votosBrancos = Number(prompt('Digite o número de votos brancos: '))
// let votosNulos = Number(prompt('Digite o número de votos nulos: '))
// let votosValidos = Number(prompt('Digite o número de votos válidos: '))
// let totalVotos = votosBrancos + votosNulos + votosValidos
// let perBranco = (votosBrancos / eleitores) * 100
// let perNulos = (votosNulos / eleitores) * 100
// let perValidos = (votosValidos / eleitores) * 100

// console.log(`A porcentagem de eleitores que votou em branco é ${perBranco}%`)
// console.log(`A porcentagem de eleitores que votou nulo é ${perNulos}%`)
// console.log(`A porcentagem de votos válidos é ${perValidos}%`)

// Exercício 03 - A turma C é composta de 60 alunos, e a turma D de 20 alunos. 
// Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, 
// o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

// let turmaC = 60
// let turmaD = 20

// let perreproC = Number(prompt('Escreva o percentual de alunos reprovados na Turma C: '))
// let peraprovD = Number(prompt('Escreva o percentual de alunos aprovados na Turma D: '))

// let qtdReprovadosC = (turmaC * perreproC) / 100
// let qtdreprovadosD = ((100 - peraprovD) * turmaD) / 100

// let totalAlunos = turmaC + turmaD
// let totalReprovados = ((qtdReprovadosC + qtdreprovadosD) * totalAlunos) / 100
// let percentualReprovados = (totalReprovados / totalAlunos) * 100


// console.log(`A quantidade de alunos reprovados na Turma C é: ${qtdReprovadosC}`)
// console.log(`A quantidade de alunos aprovados na Turma D é: ${qtdreprovadosD}`)
// console.log(`A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas é: ${percentualReprovados}%`)

//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). Esse dia deve ser um texto. 
//Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.

// let diaDaSemana = prompt('Digite o dia da semana: ').toLowerCase()

// if (diaDaSemana === 'sábado' || diaDaSemana === 'sabado' || diaDaSemana === 'domingo') {
// 	console.log('Final de Semana');
//   } else {
// 	console.log('Dia útil');
//   }

// let dia = prompt('Digite o dia da semana: ')

// switch(dia){
// 	case 'Sabado':
// 		console.log('Final de Semana')
// 		break
// 	case 'Domingo':
// 		console.log('Final de Semana')
// 		break
// 	default :
// 		console.log('Dia Útil')
// 		break
// }

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. 
//Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. 
//Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

// let valor

// do {
// 	valor = Number(prompt('Informe um valor: '))
	
// 	if (valor > 0){
// 		console.log('Positivo')
// 	} else if (valor == 0) {
// 		break
// 	} else {
// 		console.log('Negativo')
// 	}
	
// } while (valor !== 0)

//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. 
//Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". 
//Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado
//Considere que a senha correta é o valor 2807.

// let senhaC

// do {
// 	senhaC = (prompt('Informe a senha: '))

// 	if(senhaC != 2807){
// 		console.log('SENHA INVÁLIDA')
// 	} else {
// 		console.log('ACESSO PERMITIDO')
// 	}

	
// } while (senhaC !== 2807)
//-------------------------------------------------------------------------------------------------------------
// // Aula 07 - Vetores Unidimensionais / Arrays
// // Array é uma estrutura de dados que armazena uma coleção de elementos, todos do mesmo tipo.

// let listaFrutas = Array()
// let listaNomes = ['Giovanna', 'Augusto']

// listaFrutas[0] = 10
// listaFrutas[1] = 'morango'
// // listaFrutas['adocicadas'] = 'pera'

// for(let i = 0; i < listaFrutas.length; i++){
// 	console.log(listaFrutas[i])
// }

// listaFrutas.push('melancia') //adiciona no final do array
// listaFrutas.unshift('laranja') //adiciona no início do array

// listaFrutas.pop() //remove o último elemento do array
// listaFrutas.shift() //remove o primeiro elemento do array

// console.table(listaFrutas)
//----------------------------------------------------------------------------------------------
// // Aula 08 - Vetores Multidimensionais / Arrays

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

//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let media = 0
// let soma = 0
// let pares = []
// for (let i = 0; i < numeros.length; i++) {
// 	soma += numeros[i]
// 	if (numeros[i] % 2 === 0) {
// 		pares.push(numeros[i])
// 	}
// }

// let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
// let pares = numeros.filter(numero => numero % 2 === 0)
// let media = soma / numeros.length

// console.log(soma)
// console.log(media)
// console.table(pares)

// Ordene o array numeros em ordem crescente
// let numeros = [5, 2, 8, 1, 4, 7, 6, 3, 49, 233, -2]

// BUBBLE SORT - log(n2) 
// numeros.sort((a, b) => a - b) // array.sort((a,b) => a - b) Ordena em ordem crescente
// console.table(numeros)

// let n = numeros.length
// for (let i = 0; i < n; i++) {
// 	for (let j = 0; j < n - i; j++) {
// 		if (numeros[j] > numeros[j + 1]) {
// 			let temp = numeros[j]
// 			numeros[j] = numeros[j + 1]
// 			numeros[j + 1] = temp
// 		}
// 	}
// }

// calculem a diagonal dessa matriz

// let matriz = []
// let somaDiagonal = 0

// for (let i = 0; i < 3; i++) {
// 	matriz[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		matriz[i][j] = 10
// 		if (i == j) {
// 			somaDiagonal += matriz[i][j]
// 		}
// 	}
// }

// console.table(matriz)
// console.log(somaDiagonal)
//-------------------------------------------------------------------------------------------------------------

// Aula 09 - Funções
// // Função é um bloco de código que pode ser chamado em qualquer parte do programa,
// // evitando a repetição de código e facilitando a manutenção do mesmo.
// // Uma função pode receber parâmetros e retornar um valor.
// // Uma função pode ser chamada em qualquer parte do programa, desde que tenha sido declarada antes.
// // Uma função pode ser chamada várias vezes, com diferentes parâmetros, retornando diferentes valores.
// // Uma função pode ser chamada dentro de outra função, criando uma hierarquia de chamadas.


// function calculaArea(altura, largura) {
// 	return altura * largura
// }
// console.log(calculaArea(10, 5))

//Façam uma função que retorna um array ordenado


// function vetorOrdenado(numeros) {
// 	numeros.sort((a, b) => a - b) // array.sort((a,b) => a - b) Ordena em ordem crescente
// 	return numeros
// }
// console.table(vetorOrdenado([1, -5, 3, 4, 2, 0, -1, 5]))

// function ordenaArray(arr) {
// 	return arr.sort((a, b) => a - b)
// }
// console.table(ordenaArray([1, -5, 3, 4, 2, 0, -1, 5]))

// // Função anônima - não tem nome, é atribuída a uma variável
// let exibeNome = function(nome) {
// 	console.log(nome)
// }
// exibeNome('Jaques')

// // Função por parametro - Callback
// let exibeNome1 = (nome, idade) => console.log(nome, idade)
// exibeNome1('Jaques', 23)

// Criar uma função que soma os elementos de um array e retorna esse valor
// function somaArray (arr) {

// 	let soma = 0
// 	for (i = 0; i < arr.length; i++) {
// 		soma += arr[i]
// 	}
// 	return soma
// }
// console.log(somaArray([1, 2, 3, 4, 5]))

// //Retorna o maior número de um array
// function maiorNumero(arr) {
// 	let maior = arr[0]
// 	for (i = 1; i < arr.length; i++) {
// 		if (arr[i] > maior) {
// 			maior = arr[i]
// 		}
// 	}
// 	return maior
// }
// console.log(maiorNumero([1, 2, 3, 4, 5]))

// function maiorValor(arr) {
// 	let maior1 = arr[0]

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > maior1) {
// 			maior1 = arr[i]
// 		}
// 	}
// 	console.log(maior1)
// }

// maiorValor([1, 100,-3, 2, 0])
//-------------------------------------------------------------------------------------------------------------

// Aula 10 - Strings

// let nome = 'Julio César'

// console.log(nome.length) // Tamanho da string
// console.log(nome.charAt(0)) // Retorna o caractere na posição 0
// console.log(nome.indexOf('C')) // Retorna a posição do caractere 'C'

// console.log(nome.replace('Julio', 'Cleiton')) // Substitui 'Julio' por 'Cleiton'
// console.log(nome.substr(6, 5)) // Retorna a substring da posição 6 até a posição 11
// console.log(nome.toUpperCase()) // Transforma a string em maiúscula
// console.log(nome.toLowerCase()) // Transforma a string em minúscula

// console.log("    Wesley".trim()) // Remove os espaços em branco no início e no final da string


// Façam uma função que inverta uma string
// function inverterString(palavra) {
//     return palavra.split("").reverse().join("");
// }

// console.log(inverterString("Jacques"));

// function inverterString(message) {
//     const arr = message.split("");

//     return arr.reverse().join("");
// }
// console.log(inverterString("Jacques"));

// function reverseString(str) {
// 	let reversed = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		reversed += str[i];
// 	}
// 	return reversed;
// }
// console.log(reverseString("Olá, Mundo!"));

// function inverterString(str) {
// 	return str.split('').reverse().join('')
// }

// console.log(inverterString("Olá, Mundo!"));


// Encontre o número de vogais de uma String.

// function countVowels(str) {
// 	let vowels = str.match(/[aeiouáéíóúâêôãõàèìòùäëïöü]/gi)
// 	if (vowels) {
// 		return vowels.length
// 	} else {
// 		return 0
// 	}
		
// }

// console.log(countVowels('Jacques'))
//--------------------------------------------------------------------------------------------------------------
// // // Aula 11 OBJETOS
// Objetos são estruturas de dados que armazenam dados em pares de chave e valor.
// // Objetos são mutáveis, ou seja, podem ser alterados a qualquer momento.
// // Objetos podem conter outros objetos, arrays e funções.
// // Objetos podem ser criados de várias formas, mas a mais comum é através da notação literal.
// // Objetos podem ser acessados através da notação de ponto ou colchetes.
// // Objetos podem ser passados como parâmetros para funções e retornados como valores de funções.
// // Objetos podem ser iterados com o loop for...in.

//////// OBJETOS SEMPRE ESTARÃO ENTRE CHAVES
// let livro = {
// 	nome: 'Marley e eu', 
// 	anoLancamento: 2024,
// 	autor: 'Will Smith',
// 	nrPaginas: 12,
// 	genero: 'comédia',
// 	atores: ['Scooby', 'Super Cão', 'Batcão'],

// 	mostrarCaracteristicas: function() {
// 		return `${this.nome} é um livro para ficar alegre.`
// 	}
// }

// console.log(livro.mostrarCaracteristicas())

// let livro2 = livro
// livro2.preco = 20.2
// console.log(livro)
// console.log(livro2)

// let filme = {
// 	titulo: 'High School Musical',
// 	anoLancamento: 2007,
// 	atores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
// 	genero: 'guerra',

// 	mostrarCaracteristicas: function() {
// 		return `${this.titulo} é um filme de drama.`
// 	}
// }

// console.log(filme.mostrarCaracteristicas())
// console.log(filme)

// // //FOR IN itera sobre índices (server para indexar valores)

// let jogadores = ['Caça Rato', 'Ganso', 'Pato']
// for (let key in jogadores) {
// 	console.log(jogadores[key])
// }

// // // FOR OF itera sobre valores (server para indexar valores)

// let palavra = 'Grêmio'
// for (let char of palavra) {
// 	console.log(palavra)
// }

// Calculem as médias das notas dos alunos de um professor e digam se a turma do professor está na média.

// // FEITO PELO PROFESSOR
// let somaNotas = 0
// let numeroAlunos = 0

// for(let aluno in professor.notas) {
//     somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)
// 	/professor.notas[aluno].length : professor.notas[aluno]

//     numeroAlunos++
// }

// let media = somaNotas/numeroAlunos

// if(media >= 6){
//     console.log(`a média da turma é ${media} e está acima do padrão`)
// } else {
//     console.log(`a média da turma é ${media} e está abaixo do padrão`)
// }

// RESOLUÇÃO COM MENOS LINHAS
// let professor = {
// 	nome: 'Stark Parker',
// 	materia: 'Física',
// 	notas: {
// 		aluno1: [5, 2],
// 		aluno2: [3, 7],
// 	}
// }

// let notasAlunos = []

// for (let aluno in professor.notas) {
// 	notasAlunos = notasAlunos.concat(professor.notas[aluno])
// }

// media = notasAlunos.reduce((acc, crr) => acc + crr , 0) / notasAlunos.length

// console.log(`a nota média da turma é: ${media}`)
// if (media >= 6) {
// 	console.log('A turma está na média')
// } else {
// 	console.log('A turma não está na média')
// }

//===================================================================================

////// GUANABARA ALGORITMOS
// for (let i = 1; i <= 10; i++) {
// 	console.log(i)
// }

// for (let i = 10; i > 0; i--) {
// 	console.log(i)
// }

// for (let i = 0; i <= 10; i += 2){
// 	console.log(i)
// }

// // Verifica quantos valores estão entre 0 e 10 e soma os ímpares
// let j = 0
// let somaImpar = 0
// for (let i = 1; i <= 6; i++) {
// 	let cont = Number(prompt('Digite um valor: '))

// 	if ((cont >= 0) && (cont <= 10)) {
// 		j++
// 		if (cont % 2 !== 0) {
// 			somaImpar += cont
// 		}
// 	}

// }
// console.log(`${j} valores entre 0 e 10`)
// console.log(`A soma dos valores ímpares é: ${somaImpar}`)

// // //Combina os números
// for(let i = 1; i <= 3; i++) {
// 	for(let j = 1; j <= 3; j++) {
// 		console.log(i, j)
// 	}
// }

// // //15 primeiros valores de Fibonacci
// let a = 0
// let b = 1
// console.log(a)
// console.log(b)

// for(let i = 3; i <= 15; i++) {
// 	let temp = a + b
// 	a = b
// 	b = temp
// 	console.log(temp)
// }

// // Analisar valores: soma, média, quantos dividem por 5, quantos são nulos e a soma dos pares
// let soma = 0
// let media = 0
// let dividePor5 = 0
// let numNulo = 0
// let somaPares = 0
// let numValidos = 0
// for(let i = 0; i < 5; i++) {
// 	let num = Number(prompt('Digite um valor: '))
// 	if(num === 0){
// 		numNulo++
// 	}

// 	soma += num
// 	numValidos++

// 	if(num % 2 === 0){
// 		somaPares += num
// 	}
// 	if(num % 5 === 0) {
// 		dividePor5++
// 	}
// }
// media = soma/numValidos

// console.log(`A soma dos números é: ${soma}`)
// console.log(`A média dos números é: ${media}`)
// console.log(`A quantidade de números nulos é: ${numNulo}`)
// console.log(`A soma dos pares é: ${somaPares}`)
// console.log(`A quantidade de números divisíveis por 5 é: ${dividePor5}`)

// let i = 0; n = ''; pesado = ''; p = 0; maiorPeso = 0

// function topo() {
// 	console.clear()
// 	console.log("---------------------------------------------")
// 	console.log(" D E T E C T O R	D E	  P E S A D O ")
// 	console.log(` Maior peso até agora:  ${maiorPeso} Kg `)
// 	console.log("---------------------------------------------")
// }

// topo()
// for (i = 1; i < 5; i++) {
// 	n = (prompt('Digite o nome: '))
// 	p = Number(prompt('Digite o peso: '))
// 	if(p > maiorPeso) {
// 		maiorPeso = p
// 		pesado = n
// 	}
// 	topo()
// }

// topo()
// console.log(`A pessoa mais pesada foi ${pesado} com ${maiorPeso} quilos`)

// Passagem de parâmetro por valor em um procedimento
// function soma(a, b) {
// 	console.log("Recebi o valor: ", a)
// 	console.log("Recebi o valor: ", b)
// 	console.log("A soma entre os dois é: ", a + b)
// }

// // let x = 5; y = 3
// //soma(x, y)

// // Passagem de parâmetro por valor
// function soma(a, b) {
// 	a += 1
// 	b += 2
// 	console.log("Valor de A: ", a)
// 	console.log("Valor de B: ", b)
// 	console.log("A soma de A + B é: ", a + b)
// }

// let x = 4; y = 8
// soma(x, y)
// console.log("Valor de X: ", x)
// console.log("Valor de Y: ", y)


// // // Verificar se é par ou ímpar - Parâmetro por valor
// function parOuImpar(valor) {
// 	if(valor % 2 === 0) {
// 		console.log(`O número ${valor} é par`)
// 	} else {
// 		console.log(`O número ${valor} é ímpar`)
// 	}
// }
// let num = Number(prompt('Digite um valor: '))
// parOuImpar(num)

// Parâmetro por referência
// function soma(ref) {
// 	ref.a += 1
// 	ref.b += 2
// 	console.log("Valor de A: ", ref.a)
// 	console.log("Valor de B: ", ref.b)
// 	console.log("A soma de A + B é: ", ref.a + ref.b)
// }

// let valores = { a: 4, b: 8 }
// soma(valores)
// console.log("Valor de A (fora da função): ", valores.a)
// console.log("Valor de B (fora da função): ", valores.b)

// // // FUNÇÕES
// function soma1(a, b) {
// 	let s = a + b
// 	return s
// }
// let n1 = 5; n2 = 4
// console.log(soma1(n1, n2))


// function soma(x, y){
// 	return x + y
// }

// let v1 = Number(prompt('Digite o primeiro valor: '))
// let v2 = Number(prompt('Digite o primeiro valor: '))
// let s = soma(v1, v2)
// console.log(`A soma entre ${v1} e ${v2} é ${s}`)

// // Verificar se é par ou ímpar - Parâmetro por valor
// function parOuImpar(valor) {
// 	if(valor % 2 === 0) {
// 		console.log(`O número ${valor} é par`)
// 	} else {
// 		console.log(`O número ${valor} é ímpar`)
// 	}
// 	return valor
// }
// let num = Number(prompt('Digite um valor: '))
// parOuImpar(num)

// // Aula 13 - Pilha
// function fatorial(n) {
//     if(n === 0) {
//         return 1
//     } else {
//         return n * fatorial(n-1)
//     }
// }
// console.log(fatorial(5))

// Soma dos números de 1 até N
// function soma(n) {
//     if(n === 1) {
//         return 1
//     } else {
//         return n + soma(n-1)
//     }
// }
// console.log(soma(5))

//Fibonacci
// function fibonacci(n) {
//     if(n === 0) {
//         return 0
//     } else if(n === 1) {
//         return 1
//     } else {
//         return fibonacci(n - 1) + fibonacci(n -2)
//     }    
// }

//console.log(fibonacci(4))

// let categorias = [
//     {
//         id: 1,
//         nome: "Eletrônicos",
//         filhos: [
//             {id: 2, nome: "Celulares", filhos: []},
//             {id: 3, nome: "Computadores", filhos: [
//                 {id: 4, nome: "Tablets", filhos: []},
//             ]}
//         ]
//     },
//     {
//         id: 5,
//         nome: "Louças",
//         filhos: []
//     }
// ]

// function imprimirCategorias(lista, nivel = 0) {
//     for(let categoria of lista) {
//         console.log(" ".repeat(nivel * 2) + categoria.nome)
//         if(categoria.filhos.length > 0) {
//             imprimirCategorias(categoria.filhos, nivel + 1)
//         }
//     }
// }

// imprimirCategorias(categorias)

// Double Linked list - Lista duplamente encadeada
class Node {
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.text = this.head
        if(this.head) {
            this.head.anterior = novo
        }
        this.head = novo
    }

    inserirFim() {

    }

    imprimirFrente() {

    }

    imprimirAtras() {

    }
}
