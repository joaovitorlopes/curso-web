const values = [7.7, 8.9, 6.3, 9.2]
console.log(values[0], values[3])
console.log(values[4])

values[4] = 5.6
console.log(values)
values[10] = 26
console.log(values)

console.log(values.length) //tamanho do array

// Push para adicionar um item no array
values.push({id: 3}, false, null, 'teste')
console.log(values)

// pop remove o último elemento do array
console.log(values.pop())
// delete remove o valor específico
delete values[0]
console.log(values)

console.log(typeof values) // Array é um objeto