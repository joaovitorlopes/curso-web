// Par nome/valor
const teste = 'Olá' // contexto léxico 1 (onde foi definido)

function exec() {
    const teste = 'Oi' // contexto léxico 2
    return teste // encontra o contexto mais próximo
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua imaginária',
        bairro: 'Bairro fictício',
        numero: 123
    }
}

console.log(teste)
console.log(exec())
console.log(cliente)
