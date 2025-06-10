// // // Aula 16 - Pilhas e filas
/////////////// PILHAS
// // // Pilhas e filas são estruturas de dados fundamentais em ciência da computação.
// // // Pilhas (Stacks) seguem o princípio LIFO (Last In, First Out), 
// enquanto filas (Queues) seguem o princípio FIFO (First In, First Out).
// // // Vamos implementar uma pilha e uma fila simples em JavaScript.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(value) {
        let newNode = Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop() {
        if(!this.top) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        return poppedValue
    }

    peek() {
        if(!this.top) return null
        return this.top.value
    }

    isEmpty() {
        return this.top === null
    }
}
///////////////////// FILAS

class Node {
    constructor(value) {
        this.value = value  // Anterior e próximo são usados para formar uma lista encadeada
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value) {
        let newNode = new Node(value)
        if (this.rear) {
            this.rear.next = newNode
        } 
        
        this.rear = newNode
        
        if (!this.front) {
            this.front = newNode
        }

        this.size++
    }

    dequeue() {
        if (!this.front) return null
        let dequeuedValue = this.front.value 
        this.front = this.front.next
        if (!this.front) {
            this.rear = null
        }
        this.size--
        return dequeuedValue
    }
}
// // // Vamos continuar com a implementação de pilhas e filas, adicionando mais funcionalidades e exemplos de uso.
// // // Além das operações básicas, podemos adicionar métodos para verificar o tamanho da pilha ou fila e limpar a estrutura.
