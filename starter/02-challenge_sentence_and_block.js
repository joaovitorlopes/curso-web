/* 
Bloco 1 - Números ímpares 1 à 10;
Bloco 2 - Números pares 1 à 10;
*/

{
    console.log("Números ímpares:");
    let j = 1;

    while (j <= 10) {
        if (j % 2 != 0) {
            console.log(j);
            j++;
        } else {
            j++;
        }
    }

}

console.log("---------------");

{
    console.log("Números pares:");
    let i = 1;

    while (i <= 10) {
        if (i % 2 === 0) {
            console.log(i);
            i++;
        } else {
            i++;
        }
    }
}