// Var in Loop
for (var i = 0; i < 10; i++) { // por ser declarado usando var, está com escopo global
    console.log(i)
}
console.log('i = ', i) // visível fora do bloco

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// A variável não foi respeitada
funcs[2]()
funcs[8]()