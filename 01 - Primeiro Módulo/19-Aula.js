// // // AULA 19 - Estruturas de Dados: Árvore Binária de Busca

// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null
//     }   

//     insert(value) {
//         let newNode = new Node(value)

//         if (this.root === null) {
//             this.root = newNode
//             return
//         }

//         this.insertNode(this.root, newNode)
//     }

//     insertNode(currentNode, newNode) {
//         if (newNode.value < currentNode.value) {
//             if (currentNode.left === null) {
//                 currentNode.left = newNode
//             } else {
//                 this.insertNode(currentNode.left, newNode)
//             }
//         } else {
//             if (currentNode.right === null) {
//                 currentNode.right = newNode
//             } else {
//                 this.insertNode(currentNode.right, newNode)
//             }
//         }
//     }

//     inorderTraversal(node = this.root) {
//         if (node !== null) {
//             this.inorderTraversal(node.left)
//             console.log(node.value)
//             this.inorderTraversal(node.right)
//         }
//     }

//     search(value, node = this.root) {
//         if (node === null) return false

//         if (node === node.value) return true

//         if (value < node.value) {
//             return this.search(value, node.left)
//         } else {
//             return this.search(value, node.right) 
            
//         }

//         return -1 // Valor não encontrado
//     }
// }

// let tree = new BinaryTree()

// tree.insert(10)
// tree.insert(5)
// tree.insert(11)
// tree.insert(3)
// tree.insert(6)
// tree.insert(10)
// tree.insert(9)

// tree.inorderTraversal() // Adicione esta linha para imprimir os valores em ordem
// console.log(tree.search(10)) // true
// console.log(tree.search(7)) // false


function binarySearch(arr, target) { // Pesquisa Binária (em Array Ordenado)
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid // Valor encontrado
        } else if (arr[mid] < target) {
            left = mid + 1 // Procura na metade direita
        } else {
            right = mid - 1 // Procura na metade esquerda
        }
    }
    return -1 // Valor não encontrado
}

let numbers = [1, 3, 5, 7, 9, 10, 12, 13, 16, 20] // Array DEVE estar ordenado

console.log(binarySearch(numbers, 10))