/*for (i = 0; i <= 10; i++) {
  console.log(i * 8);
}
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let z = 0; z < numeros.length; z++) {
    const numero = numeros[z];
    if(numero % 2 === 0) {
        console.log(numero);
    }
}