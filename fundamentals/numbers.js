const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.58
const avaliacao2 = 6.97

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// ----- CUIDADOS COM NUMBERS -----
console.log(media.toFixed(2)) // Arredonda
console.log(media.toString())
console.log(typeof media)
console.log(typeof Number) // Funcao number

console.log(7 / 0) // Infinito
console.log("10" / 2) // Cuidado com strings
console.log("Show!" * 2) // Não repete a string
console.log(0.1 + 0.7) // Não arredonda ficando precisamente
// console.log(10.toString()) // Não consegue chamar o literal diretamente
console.log((10.42132141).toFixed(2))
