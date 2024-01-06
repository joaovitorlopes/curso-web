// Tabela verdade:
// Operadores binarios
// V e V -> V
// V e F -> F
// F e ? -> F

// Operadores binarios
// V ou ? -> V
// F ou V -> V
// F ou F -> F

// Ou exclusivo(XOR) Os dois tem que ser diferentes (operadores binarios)
// V xor V -> F
// V xor F -> V
// F xor V -> V
// F xor F -> F

// Negacao logica (operador unario)
// !V -> F
// !F -> V

function compras(trabalho1 , trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OU
    const comprarTv50 = trabalho1 && trabalho2 // E
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor\
    const comprarTv32 = trabalho1 != trabalho2 // diferenca
    const manterSaudavel = !comprarSorvete // Operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))