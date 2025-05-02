// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for

let f = 0
let j = 1
console.log(f)
console.log(j)

for (let i = 2; i < 10; i++) {
	let m = f + j
	console.log(m)
	f = j
	j = m
}