// Let in Loop
for (let i = 0; i < 10; i++) { // por ser declarado com let, i só está com escopo de bloco
    console.log(i)
}

// console.log('i = ', i) // Não é visível fora do bloco

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// A variável tem o histórico de onde foi definida
funcs[2]()
funcs[8]()