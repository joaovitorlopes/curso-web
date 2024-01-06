// Operador Destructuring [] deve estar ao lado esquerdo da atribuicao
// novo recurso do ECMAScript 2015
// Desestruturar um atributo de dentro de um array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // ignora o primeiro array, ignora o primeiro elemento do segundo array
console.log(nota)

function rand([min = 0, max = 1000]) {
    //             OP DESTRUC.     ARRAY
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))