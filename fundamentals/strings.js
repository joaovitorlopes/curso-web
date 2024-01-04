const escola = "Cod3r"

console.log(escola.charAt(4)) // Caracter no índice x
console.log(escola.charAt(5)) // Não irá dar erro, retornando vazio

console.log(escola.charCodeAt(3)) // Valor do índice 3 na tabela Unicode/ASCII
console.log(escola.indexOf('3')) // Encontra em qual índice está o valor 3

console.log(escola.substring(1)) // Exibe o valor apartir do índice 1, sem inclui-lo
console.log(escola.substring(0, 3)) // Exibe o valor apartir do índice 0 até o 3, sem inclui-lo

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // Substituir o caracter 3 pela letra e
console.log(escola.replace(/\d/, 'e')) // Regex para substituir todos os digitos pela letra e
console.log(escola.replace(/\w/g, 'e')) // Regex para substituir todos os digitos e letras pela letra e

console.log('Ana,Maria,Pedro'.split(',')) // Gera um Array apartir de uma string com , para separar
console.log('Ana,Maria,Pedro'.split(/,/)) // Gera um Array apartir de uma string juntamente com uma regex para separar

