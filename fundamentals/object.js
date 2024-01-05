// Criação de objetos
const prod1 = {}
prod1.name = 'Caneta'
prod1.value = 5.90
prod1['Final Discount'] = 0.40 //evitar atributo com espaço

console.log(prod1)

const prod2 = {
    name: 'Camiseta',
    value: 65.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

// JSON não é mesma coisa que obj!!!
// '{ "nome": "Camisa Polo", "preco": 79.90 }'