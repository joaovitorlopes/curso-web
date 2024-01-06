// Cuidados com a estrutura do IF
function teste1(num) {
    if (num > 7) // se não haver chaves ele só funciona a primeira sentença
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // Por ter ';' não ocorre o bloco do IF
        console.log(num)
    }
}

teste2(1)
teste2(4)