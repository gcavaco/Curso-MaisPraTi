// // // Aula 17 - Otimização de algoritmos

// 6. Memoization Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), 
// retornando resultados instantâneos em repetidas invocações.
function memoize(fn) {
  const cache = new Map()

  return function(...args) {
    const key = JSON.stringify(args)
    // Verifica se o cache já tem o resultado para os argumentos fornecidos
    // Se sim, retorna o resultado armazenado
    if (cache.has(key)) {
      return cache.get(key)
    }
    // Caso contrário, chama a função original, armazena o resultado no cache e retorna o resultado
    // JSON.stringify é usado para criar uma chave única baseada nos argumentos
    const result = fn.apply(this, args)
    cache.set(key, result)

    return result
  }
}


function fibonacci(n) {
  if (n <= 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}
const fastFib = memoize(function fibonacci(n) {
  if (n <= 2) return n
  return fastFib(n - 1) + fastFib(n - 2)
})
console.log(fibonacci(40))
console.log(fastFib(40))