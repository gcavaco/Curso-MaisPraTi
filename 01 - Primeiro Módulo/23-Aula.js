// Seção 3: Arrays e Objetos Complexos 
// 7. Mapeamento e Ordenação Dado um array produtos = [{ nome, preco }, …]// crie uma função 
// que retorne um novo array apenas com os nomes, ordenados por preço crescente usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
    let copia = produtos.slice()
    copia.sort((a, b) => a.preco - b.preco)

    let nomes = copia.map(prod => prod.nome)

    return nomes
}

let produtos = [
    {nome: "Celular", preco: 15 },
    {nome: "Caderneta", preco:  12 },
    {nome: "notebook", preco: 1 },
    {nome: "DVD", preco: 0.50 },
]

console.log(nomesOrdenadosPorPreco(produtos))
