// Operador Destructuring {}
// novo recurso do ECMAScript 2015
// Desestruturar um atributo de dentro de um objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua imaginaria',
        bairro: 'Bairro inexistente',
        numero: 102
    }
}

const { nome, idade} = pessoa // tire os atributos de dentro do objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // colocar qual nome quiser para variavel
console.log(n, i)

const { endereco: { logradouro, numero, cep } } = pessoa // cria variaveis logradouro, numero e cep
console.log(logradouro, numero, cep)


function rand({ min = 0, max = 1000}) { // operador que retira os atributos min e max de dentro do objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // objeto
console.log(rand({ min: 955 }))