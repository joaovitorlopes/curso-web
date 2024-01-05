// Objetos são criados apartir de funções

console.log(typeof Object) // função
// Uma função pode ser instânciada apartir da palavra new
console.log(typeof new Object) // objeto

const Cliente = function() {}
console.log(typeof Cliente) // função
console.log(typeof new Cliente) // objeto

// classe: definir molde das estruturas, funções e variáveis
class Produto {} // Sintaxe introduzida no ECMAScript 2015 (ES6)
console.log(typeof Produto) // função
console.log(typeof new Produto()) // objeto