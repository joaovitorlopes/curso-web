function tratarErroELancar(erro) {
    //     trhow 10
    //     trhow true
    //     trhow 'Mensagem'
    //     trhow {
    //         nome: erro.name,
    //         msg: erro.message,
    //         date: new Date
    //     }
    throw new Error('Ocorreu um erro') // lançar os erros
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar() 
    } finally {
        console.log('Acontece sempre')
    }
}

// const obj = { nome: 'Teste' } irá gerar um erro, pois está errado o nome da chave do objeto
const obj = { name: 'Teste' }
imprimirNome(obj)