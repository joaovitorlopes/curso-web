const getNumber = function (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let i = -1

// Ele faz primeiro e verifica depois
do {
    i = getNumber(-1, 10)
    console.log(`Opcao escolhida foi ${i}`)
} while (i != -1) 

console.log('Fim')