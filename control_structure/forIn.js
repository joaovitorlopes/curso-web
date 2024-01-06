// Nao e tao interessante utilizar for in em array
const notas = [7, 2.3, 4.5, 10, 9, 8.5]

for (let i in notas) {
    console.log(`Nota ${i}: ${notas[i]}`)
}

// Objeto pessoa
const pessoa = {
    nome: 'Joao',
    sobrenome: 'Fulano',
    idade: 22,
    peso: 76
}
// Melhor utilizar for in em objetos
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
