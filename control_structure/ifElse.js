const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log(`Aprovado :) sua nota é: ${nota}`)
    } else {
        console.log(`Reprovado :( sua nota é: ${nota})`)
    }
}

imprimirResultado(6)
imprimirResultado(8)