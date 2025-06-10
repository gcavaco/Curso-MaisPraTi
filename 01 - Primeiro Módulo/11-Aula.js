// // // Aula 11 OBJETOS
// Objetos são estruturas de dados que armazenam dados em pares de chave e valor.
// // Objetos são mutáveis, ou seja, podem ser alterados a qualquer momento.
// // Objetos podem conter outros objetos, arrays e funções.
// // Objetos podem ser criados de várias formas, mas a mais comum é através da notação literal.
// // Objetos podem ser acessados através da notação de ponto ou colchetes.
// // Objetos podem ser passados como parâmetros para funções e retornados como valores de funções.
// // Objetos podem ser iterados com o loop for...in.
//////// OBJETOS SEMPRE ESTARÃO ENTRE CHAVES

// Criando um objeto
let livro = {
    // Características do objeto (Atributos) -> sempre separados por virgulas.
    nome: 'Marley e eu',
    anoLancamento: '2024',
    autor: 'Will Smith',
    nrPaginas: 12,
    genero: 'comedia',
    atores: ['Scooby', 'Super Cão', 'Batcão'],

    mostrarCaracteristicas: function() { // Função que retorna somente o atributo nome
    return `${this.nome} é um livro para ficar alegre.` // o THIS representa o objeto interno
    }
}

// console.log(livro.mostrarCaracteristicas())
// console.log(livro)
// console.log(livro.nome)

// let livro2 = livro // Clonando o objeto LIVRO, o clone é o livro2
// livro2.preco = 20.2 // Criando o atributo nos 2 objetos por referência
// console.log(livro2)
// console.log(livro)

let filme = {
    titulo: 'High School Musical',
    anoLancamento: 2007,
    atores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
    genero: 'guerra',

    mostrarCaracteristicas: function() {
        return `${this.titulo} é um filme de drama.`
    }
}

// console.log(filme.mostrarCaracteristicas()) // Chama a função()

// console.log(anime1)
// console.log(anime2)

// ESTRUTURAS DE REPETIÇÃO FOR IN E FOR OF

// let jogadores = ['Caça Rato', 'Ganso', 'Pato']

// // For in -> pega o índice 
// for (let JasonTodd in jogadores) { // a variável criada pode ter qualquer nome, nesse caso é JasonTodd
//     console.log(jogadores[JasonTodd]) // mostrar o array jogadores na posição [JasonTodd]
//     // a variável é o índice do Array
// }

// let palavra = 'Grêmio'

// // for of -> pega o valor (utilizado em estruturas iteráveis)
// for(let char of palavra) {
//     console.log(palavra)
// }

// function Anime(nome, maisForte, maisFraco, nota) {
//     return {
//         nome,
//         maisForte,
//         maisFraco,
//         nota
//     }
// }

// let anime1 = Anime("Naruto", "Gemna", "Konohamaru", 5)
// let anime2 = Anime("One Piece", "Coby", "Ace", 2)

// for(let value in anime2) {
//     console.log(anime2[value])
// }

// for(let value of Object.keys(anime1)) {
//     console.log(anime1[value])
// }

// // // FOR OF muito utilizado para array de objetos
// for(let i = 0; i < Object.keys(anime1).length; i++) {
//     console.log(anime1[i])
// }

// Calculem as médias das notas dos alunos de um professor,digam se a turma do professor está na média (for in)
let professor = {
    nome: 'Stark Parker',
    materia: 'Física',
    notas: {
        aluno1: [10, 10],
        aluno2: [3, 7],
        aluno3: 10
    }
}

let somaNotas = 0
let numeroAlunos = 0

for(let aluno in professor.notas) {
    somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => 
    acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

    numeroAlunos++
}

let media = somaNotas/numeroAlunos

if(media >= 6){
    console.log(`a média da turma é ${media} e está acima do padrão`)
} else {
    console.log(`a média da turma é ${media} e está abaixo do padrão`)
}