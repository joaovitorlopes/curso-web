// Boolean é basicamente True e False
let isEnable = false
console.log(isEnable)

isEnable = true
console.log(isEnable)

// Aqui ele virou apenas um Number
isEnable = 1
// Para isso se tornar "Boolean", usa-se ! (negação) duas vezes
console.log(!!isEnable)

console.log('Os tipos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isEnable = true))

console.log('Os tipos falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isEnable = false))

// Retorna valor verdadeiro
console.log(('' || null || 0 || 'teste' || 123))
// Retorna verdadeiro
console.log(!!('' || null || 0 || 'teste' || 123))