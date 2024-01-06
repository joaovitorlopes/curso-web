const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5) {
        break // break nao age no bloco if, mas sim em blocos for, while e switch mais proximo dele, saindo deste bloco
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue // interrompe a execucao atual e vai direto pra proxima repeticao, se mantendo neste bloco for
    }
    console.log(`${y} = ${nums[y]}`)
}

// atribuir um nome para um rotulo
externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo // sai do laco externo atraves do rotulo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}
