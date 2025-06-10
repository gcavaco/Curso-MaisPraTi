// // Aula 14 - Listas encadeadas, duplamente encadeadas e circulares
// lista é dinamica, acesso sequencial, aumenta ou diminui a lista, a inserção na lista é mais rápida que array
// lista usa mais memória, pois tem um ponteiro
// lista circular não tem fim, o último aponta pro primeiro

// criando um objeto
// let car = {
//     nome: "McQueen",
//     cor: "Vermelho"
// }

// let car2 = {
//     nome: "Sally",
//     cor: "Azul"
// }

// class carExemplo {
//     constructor(nome, cor) {
//         this.nome = nome
//         this.cor = cor
//     }
// }

// let car3 = new carExemplo("Camaro", "Amarelo")
// console.log(car.nome)
// console.log(car3.nome)

class Node {
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.proximo = this.head
        this.head = novo
    }

    imprimir() {
        let atual = this.head
        let str = ""
        while(atual) {
            str += atual.valor + "->"
            atual = atual.proximo
        }
        str += 'null'
        console.log(str)
    }
}

let lista = new LinkedList()

lista.inserirInicio(10)
lista.inserirInicio(9)

lista.imprimir()

