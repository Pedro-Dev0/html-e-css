let nota1 = 7;

let nota2 = 6;

let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média antes da ajuda:", media.toFixed(2));

function professorLegal() {
  if (media >= 6 && media < 7) {
    media = media + 0.5;
    console.log("O professor deu ajuda! Nova média:", media.toFixed(2));
  }
}

professorLegal(); // Chama a função

if (media < 5) {
  console.log(`Reprovado média menor que 5`);
} else if (media >= 5 && media < 7) {
  console.log(`Recuperação`);
} else console.log(`Passou na materia`);
