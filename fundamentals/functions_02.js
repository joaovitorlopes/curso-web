// Armazenar função em uma variável
const imprimirSoma = function (a, b) { // Uma função anônima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // executa somente uma operação, podendo ser em uma linha
console.log(subtracao(3, 1))

const imprimir = a => console.log(a)
imprimir('Show!!!')