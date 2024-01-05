// Nulo e Indefinido
// Atribuição por valor e por referência

let value // declarado, mas não inicializado
console.log(value) // undefined

// null não aponta para nenhum endereço de memória
value = null // definida, com ausência de valor
console.log(value)
// console.log(value.toString()) // não se pode acessar algo que está nulo


const a = {name: 'Teste'}
console.log(a)

// constante b pegou a referência da constante a
const b = a
console.log(b)

// se alterar na constante b, a constante a também será alterada
b.name = 'Outra coisa'
console.log(a)

// Tipos primitivos possuem atribuição por valor
let c = 3
let d = c
d++
console.log(c)
console.log(d)

const produto = {} // objeto vazio
console.log(produto.preco) // preco não está definido
console.log(produto) // objeto

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto) // tem objeto com o atributo preco, mas o atributo está undefined

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)