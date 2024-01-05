console.log('---Usando variáveis com var---')
{ { { { var ab = 'Teste...' } } } }
console.log(ab) // imprime a variável mesmo estando fora do bloco

// bloco de função
function teste() {
    var local = 123
}
teste()
//console.log(local) // Não é possível acessar uma váriavel fora da função

var numero = 1
{
    var numero = 2 // irá sobrescrever o valor anterior
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

console.log('---Usando variáveis com let---')

var number = 1 // var tem escopo global* e de função
{
    let number = 2 // let tem escopo de bloco*, de função e global
    console.log('dentro = ', number)
}
console.log('fora = ', number)