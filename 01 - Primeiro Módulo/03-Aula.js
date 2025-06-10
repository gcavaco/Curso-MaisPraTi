// // // Aula 03 - Variáveis e Tipos de Dados (Primeira aula codando em Javascript)
// -> O uso de aspas simples e duplas é indiferente, mas se quiser usar aspas na string elas devem ser diferentes.
// console.log('A gíria "Mané" é muito utilizada no RJ') 
// console.log("A gíria 'Mané' é muito utilizada no RJ")
// ------------------------------------------------------------------------------------------------------------

// -> typeoff() - retorna o tipo da variável
// console.log(typeof("Olá, Mundo!"))
// console.log(typeof(1.5))
// console.log(1.5)
// console.log(typeof('10'), 1000, 'Geralt de Rivia')
// ------------------------------------------------------------------------------------------------------------

// -> declaração de variáveis Let, Var e Const
// -> let - moderno, pode ser reatribuído (JS recomenda o uso de let)
// let name = 'Jaques'
// console.log(name)

// -> var - depreciada, pode ser reatribuído (não é recomendado o uso de var)
// var anotherName = 'Hyago'
// console.log(anotherName)

// -> const - a variável não varia e não pode ser reatribuída
// const CITY = "Alagoas"
// console.log(CITY)

// -> Variável indefinida (não inicializada)
// let teste
// console.log(typeof(teste)) // undefined
// teste = 'teste'
// console.log(teste)

// -> null é um objeto vazio
// let titulosDoInter = null
// console.log(typeof(titulosDoInter))
// ------------------------------------------------------------------------------------------------------------ 

// -> Operadores Aritméticos
// -> Procedência dos operadores: (), **, *, /, %, +, -
// let num1 = 9
// let num2 = 3

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)
// ------------------------------------------------------------------------------------------------------------

// -> Concatenação de strings e números 
// -> (parseINt() - converte string para número inteiro)
// -> (parseFloat() - converte string para número decimal)
// let num = "10"
// console.log(parseInt(num) + 10)

// -> Incremento e Decremento
// let counter = 1

// console.log(counter++) // Pós-incremento -> Imprime o valor atual e depois incrementa
// console.log(++counter) // Pré-incremento -> Incrementa o valor atual e depois imprime
// console.log(counter)
// console.log(counter--) // Pós-decremento -> Imprime o valor atual e depois decrementa
// console.log(--counter) // Pré-decremento -> Decrementa o valor atual e depois imprime
// console.log(counter)

// let step = 12

// console.log(counter)
// counter += step // Adiciona o valor de step a counter
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step
// console.log(counter)
// counter += step
// console.log(counter)
// ------------------------------------------------------------------------------------------------------------

// -> Operadores relacionais: >, <, >=, <=, ==, ===, !=, !==
// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 == 5)
// console.log(10 == 10)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != 10)
// console.log(10 !== '10')

// -> Operadores lógicos: &&, ||, !
// console.log((10 < 5) && (10 > 2))
// console.log((10 < 5) && !(10 > 2))
// console.log((10 > 2) || (10 < 5))
// console.log(!(10 > 2) || (10 < 5))
// ------------------------------------------------------------------------------------------------------------

// -> Autenticação de usuário
// let usuario = "jaques"
// let senha = "1234"

// let autenticacao = usuario === "jaques" && senha === "1234"
// console.log(autenticacao)
// ------------------------------------------------------------------------------------------------------------

// -> Estruturas condicionais: if, else, else if, switch case
// const nota = 95

// if (nota < 60) {
//     console.log('Reprovado')
// } else if (nota > 90) {
//     console.log('Bichão mesmo, sua nota foi:', nota)
// } else {
//     console.log('Aprovado')
// }

// -> Operador ternário (condição) ? true : false
// (nota < 60) ? console.log('Reprovado') : console.log('Aprovado')
// ------------------------------------------------------------------------------------------------------------

//Exercício 1: Verificar se um número é par ou ímpar.
// let numeroParImpar = 200

// -> Resolvendo com o operador ternário
// numeroParImpar % 2 === 0 ? console.log('Par') : console.log('Ímpar')

// -> Resolvendo com if e else
// if (numeroParImpar % 2 === 0) {
//     console.log('Par')
// } else {
//     console.log('Ímpar')
// }
// ------------------------------------------------------------------------------------------------------------

// Exercício 2: Encontrar o maior número entre três números.
// let num01 = 122
// let num02 = 12
// let num03 = 1

// if ((num01 > num02) && (num01 > num03)) {
// 	console.log('O maior número é o:', num01)
// } else if ((num02 > num01) && (num02 > num03)) {
// 	console.log('O maior número é o:', num02)
// } else if ((num03 > num01) && (num03 > num02)) {
// 	console.log('O maior número é o:', num03)
// } else {
// 	console.log('Os números são iguais ou há empate entre dois ou mais números:', num01, num02, num03)
// }
// ------------------------------------------------------------------------------------------------------------

// Exercício 3: Façam uma calculadora simples utilizando entrada de usuário.
// -> const prompt = require('prompt-sync')({ sigint: true }) // Para usar no terminal
const prompt = require('prompt-sync')()

// calculadora simples com IF ELSE
// let numero1 = Number(prompt('Digite o seu primeiro número:'))
// let numero2 = Number(prompt('Digite o seu primeiro número:'))
// let operador = prompt('Selecione o operador lógico: +, -, *, /, **, %: ')
// let resultado = 0

// if (operador === '+') {
//      resultado = numero1 + numero2
// } else if (operador === '-') {
// 	    resultado = numero1 - numero2
// } else if (operador === '*') {
// 	    resultado = numero1 * numero2
// } else if (operador === '/') {
//      if (numero2 !== 0) {
// 	        resultado = numero1 / numero2
//      } else {
// 		      console.log("Divisão por zero não é permitida")
// 		      resultado = undefined
//      }
// } else if (operador === '**') {
// 	    resultado = numero1 ** numero2
// } else if (operador === '%') {
// 	    resultado = numero1 % numero2
// } else {
//     console.log("Operador desconhecido ou não válido")
//     resultado = undefined
// }

// if (resultado !== undefined) {
//     console.log("O resultado é:", resultado)
// }


// Calculadora simples com SWITCH CASE
let numero1 = Number(prompt('Digite o seu primeiro número: '));
let numero2 = Number(prompt('Digite o seu segundo número: ')); 
let operador = prompt('Selecione o operador lógico: +, -, *, /: ');
let resultado = undefined;

switch (operador) {
  case '+':
    resultado = numero1 + numero2;
    break;
  case '-':
    resultado = numero1 - numero2;
    break;
  case '*':
    resultado = numero1 * numero2;
    break;
  case '/':
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      console.log('Erro: divisão por zero');
    }
    break;
  default:
    console.log('Você não escolheu nenhuma opção válida');
    break;
}

if (resultado !== undefined) {
  console.log('O resultado é:', resultado);
}