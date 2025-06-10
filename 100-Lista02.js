const prompt = require('prompt-sync')()

// //1 - Escreva um programa para calcular a redução do tempo de vida de um fumante. 
// //Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// //Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// //vida um fumante perderá e exiba o total em dias.
// function calcularVidaPerdida(cigarrosPorDia, anosFumando) {
    
//   const totalCigarros = cigarrosPorDia * 365 * anosFumando
//   const minutosPerdidos = totalCigarros * 10
//   const diasPerdidos = minutosPerdidos / 1440
//   return console.log(`A pessoa perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida`)
// }

// let cigarroDia = Number(prompt("Digite a quantidade de cigarros fumados por dia: "))
// let anos = Number(prompt("Digite a quantos anos a pessoa é fumante: "))
// calcularVidaPerdida(cigarroDia, anos)
//=====================================================================================================//

// //2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km 
// //h-¹, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa 
// //cobrando R$ 5,00 por cada Km acima da velocidade permitida.
// function radarNaEstrada(velocidade) {

//         if (velocidade > 80) {
//             let multa = (velocidade - 80) * 5
//             return console.log(`Você foi multado em: ${multa.toFixed(2)} reais`)
//         } else {
//             return console.log("Você está dentro da velocidade permitida!")
//         }  
// }

// let velocidadeAtual = Number(prompt("Digite a velocidade do carro: "))
// radarNaEstrada(velocidadeAtual)
//======================================================================================================//

// //3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. 
// Calcule o preço da passagem cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
// let distancia = Number(prompt('Digite a distância que deseja percorrer em Km: '))
// let preco = 0

//   if(distancia <= 200) {
//     preco = distancia * 0.50
//   } else {
//     preco = distancia * 0.45
// }
// console.log(`O preço da passagem é: ${preco.toFixed(2)} reais`)

// Com função
// function precoDaPassagem (distancia) {
//     if(distancia <= 200) {
//       return distancia * 0.50
//     } else {
//       return distancia * 0.45
//     }
// }

// let distancia = Number(prompt('Digite a distância que deseja percorrer em Km: '))
// let preco = precoDaPassagem(distancia)

// console.log(`O preço da passagem é: ${preco.toFixed(2)} reais`)
//=========================================================================================//

// // 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// // comprimentos e diga se é possível formar um triângulo com essas retas.
// // Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// // lado deve ser menor que a soma dos outros dois.
// function conferirRetas(ladoA, ladoB, ladoC) {

//     if (((ladoA + ladoB) > ladoC) && ((ladoA + ladoC) > ladoB) && ((ladoB + ladoC) > ladoA)) {
//       return 'É possível formar um triângulo'
//     } else {
//       return 'Os dados informados não formam um triângulo'
//     }
// }

// let reta1 = Number(prompt('Digite o primeiro segmento de reta: '))
// let reta2 = Number(prompt('Digite o segundo segmento de reta: '))
// let reta3 = Number(prompt('Digite o terceiro segmento de reta: '))

// let resultado = (conferirRetas(reta1, reta2, reta3))
// console.log(resultado)
//=============================================================================================//

// // 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
let jogo1 = (prompt("Escolha uma das 3 opções: pedra, papel ou tesoura: ")).toLowerCase()
let jogo2 = (prompt("Escolha uma das 3 opções: pedra, papel ou tesoura: ")).toLowerCase()

if (jogo1 === jogo2) {
  console.log("O jogo deu empate")
} else if (jogo1 === 'pedra' && jogo2 === 'papel') {
  console.log(`Jogador 2 venceu com ${jogo2}`)
} else if (jogo1 === 'pedra' && jogo2 === 'tesoura') {
  console.log(`Jogador 1 venceu com ${jogo1}`)
} else if (jogo1 === 'papel' && jogo2 === 'pedra') {
  console.log(`Jogador 1 venceu com ${jogo1}`)
} else if (jogo1 === 'papel' && jogo2 === 'tesoura') {
  console.log(`Jogador 2 venceu com ${jogo2}`)
} else if (jogo1 === 'tesoura' && jogo2 === 'pedra') {
  console.log(`Jogador 2 venceu com ${jogo2}`)
} else if (jogo1 === 'tesoura' && jogo2 === 'papel') {
  console.log(`Jogador 1 venceu com ${jogo1}`)
} else {
  console.log("Opção inválida! Use apenas pedra, papel ou tesoura.")
}

// // Edição com redução de condições
// if (jogo1 === jogo2) {
//     console.log(`O jogo deu empate! Ambos escolheram ${jogo1}.`)
//   } else if ((jogo1 === "pedra" && jogo2 === "tesoura") || (jogo1 === "papel" && jogo2 === "pedra") || (jogo1 === "tesoura" && jogo2 === "papel")) {
//     console.log(`Jogador 1 venceu com ${jogo1} contra ${jogo2} do Jogador 2!`)
//   } else {
//     console.log(`Jogador 2 venceu com ${jogo2} contra ${jogo1} do Jogador 1!`)
// }
//=======================================================================================================//

// // 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai 
// tentar descobrir qual foi o valor sorteado.
