// Hoisting é "mover" a declaração da variável var* para o topo, e não dar erro, mesmo estando declarado depois de sua chamada
console.log('a = ', a)
var a = 2
console.log('a = ', a)

// Hoisting não ocorre com let
// console.log('b = ', b)
let b = 2
console.log('b = ', b)