// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')()

let opcao = prompt('Digite a fruta desejada: uva, banana ou laranja: ')

switch(opcao){
	case 'uva':
		console.log('Você escolheu a fruta "uva".')
		break
	case 'banana':
		console.log('Você escolheu a fruta "banana".')
		break
	case 'laranja':
		console.log('Você escolheu a fruta "laranja".')
		break
	default:
		console.log('A opcão selecionada é inválida.')
		break
}