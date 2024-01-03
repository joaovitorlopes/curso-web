// Desafio: A recebe o valor de B e B recebe o valor de A
let a = 7;
let b = 94;

console.log(`A variável a valia ${a}`);
console.log(`A variável b valia ${b}`);


let aux = a;
a = b;
b = aux;

// Outra forma de se fazer é com []
// [a , b] = [b, a]

console.log(`A variável a agora vale ${a}`);
console.log(`A variável b agora vale ${b}`);

