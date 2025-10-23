const alunos = [`Bruno`, `Murilo`, `Pedro`, `Vitoria`];

console.log(alunos);
alunos.push(`Renan`); // colocar no final
alunos[5] = `Pedrão`; // colocar no final ou podendo mudar a pessoa da posição se pegar uma já existente com alguém ai altera esse dado e o outro se perde...
console.log(alunos);
alunos.pop(); // tira o últimos
alunos.shift(); // tira o primeiro

console.log(alunos);

//============================================

const notas = [];

notas.push(5.5, 5, 5, 8);

console.log(notas);
console.log(notas.length);

const soma = notas[0] + notas[1] + notas[2] + notas[3];
console.log(soma / notas.length);

//===========================================

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
i = 1
i += 1 mesma coisa que i++;

console.log(i)*/

const nome = `Pedro Sampaio de Andrade`;

for (let z = 1; z < nome.length; z++) {
  const letras = nome[z];
  console.log(letras);
}// for (condição)
