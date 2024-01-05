/* console.log(typeof Object) // Object é uma função

class Produto { }
console.log(typeof Produto) */

// Bloco de código que pode ser utilizado várias vezes
function imprimirSoma(num1, num2) {
    console.log(num1 + num2)
}

imprimirSoma(2, 3)
imprimirSoma(2) // num + undefined = NotANumber
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // somará somente os dois primeiros

// Funcao com retorno
function soma(a, b = 1) { // se b não for atribuido, receberá valor 1
    return a + b
}

console.log(soma(3, 4))
console.log(soma(3))