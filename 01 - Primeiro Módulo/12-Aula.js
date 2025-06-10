// // // AULA 12 - REVISÃO DO CONTEÚDO + EXERCÍCIOS PRÁTICOS
// // for of -> pega o valor (utilizado em estruturas iteráveis)

// Array de Objetos
// let livraria = [
//     {titulo: "1984", autor: "George Orwell", ano: 1984},
//     {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
//     {titulo: "Código Limpo", autor: "Martin", ano: 2010},
//     {titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910},
//     {titulo: "O Príncipe", autor: "Maquiavel", ano: 2002},
// ]

// //For of para iterar e verificar os livros publicados antes dos anos 2000.

// for (let livro of livraria) {
//     if(livro.ano < 2000) {
//         console.log(livro)        
//     }
// }

// Listar a contagem de gêneros desses filmes.
// let filmes = [
//     {titulo: "Sempre ao seu lado", genero: "De chorar"},
//     {titulo: "Massacre da Serra Elétrica", genero: "Terror"},
//     {titulo: "Minha mãe é uma peça", genero: "Comédia"},
//     {titulo: "Tarzan", genero: "Aventura"},
//     {titulo: "Como eu era antes de você", genero: "De chorar"},
//     {titulo: "Jogo da Imitação", genero: "Histórico"},
//     {titulo: "Top Gun", genero: "Guerra"},
//     {titulo: "Your Name", genero: "Romance"},
//     {titulo: "Deadpool", genero: "Herói"},
//     {titulo: "Batman Forever", genero: "Herói"},
// ]

// For Each, método de arrays. Espera por parâmetro uma função que vai ser executada em cada iteração do array
// let contagemFilmes = {}
// filmes.forEach((filme) => {
//     if(contagemFilmes[filme.genero]) {
//         contagemFilmes[filme.genero]++
//     } else {
//         contagemFilmes[filme.genero] = 1
//     }
// })
// console.table(contagemFilmes)


// //Feito com For Of
//     let resposta = {}
// for (let char of filmes) {
//     let genero = char.genero

//     if (resposta[genero]) {
//         resposta[genero]++
//     }   else {
//         resposta[genero] = 1
//     }
    
// }

//  console.log(resposta)

//// Construam uma função que calcule o fatorial de um número
// function calculofatorial(numero) {
//     let fatorial = 1

//     for (let i = 1; i <= numero; i++) {
//         fatorial *= i
//     }

//     console.log(fatorial)
// }
// calculofatorial(5)

// // Imprimam os primeiros 10 números da sequência de Fibonacci, o terceiro elemento é a soma dos 2 anteriores
function fibonacci() {
    let a = 0, b = 1, temp
    console.log(a)
    console.log(b)

    for (let i = 3; i <= 10; i++) {
        temp = a + b
        console.log(temp)
        a = b
        b = temp
    }
}
// fibonacci()

//função de PA - Progressão Aritmética
function pa (primeiroTermo, razao) {
    soma = 0

    for (let i = 0; i < 10; i++) {
        let termo = primeiroTermo + i * razao
        console.log(termo)
        soma += termo
    }
    
    console.log(`A soma dos termos é ${soma}`)
}
pa(1 , 3)