// Função em JS é First-Class Object (Citizens)
// Higher-order function
// JS trata uma função como um dado

// Criar de forma literal
function fun1() { }

// Armazenar em variável
const fun2 = function () { }

// Armazenar dentro de um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Oi'}
console.log(obj.falar())

// Passar uma função como parametro para outra função
function run (fun) {
    fun()
}
run(function () { console.log('Executando...') })

// Uma função retornando/contendo uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 4)(7)