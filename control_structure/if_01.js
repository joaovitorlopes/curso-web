function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

verificarAprovacao(7.8)
verificarAprovacao(6.1)

function seForVerdade(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`)
    }
}

// Falso
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
// Verdadeiro
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})