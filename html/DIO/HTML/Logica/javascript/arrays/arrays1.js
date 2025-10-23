const notas = [];

notas.push(2, 6, 8, 10, 5, 10, 10);
console.log(notas);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

console.log(soma);
const media = soma / notas.length;
console.log(media.toFixed(2));
