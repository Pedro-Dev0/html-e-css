let peso = 90;
let altura = 1.90;

const imc = peso / (altura * altura)

console.log(`seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log(`Abaixo do peso natural`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Peso normal`)
} else if (imc >= 25 && imc < 30) {
    console.log(`Acima do peso`)
} else if (imc >= 30 && imc < 40) {
    console.log(`Obeso`)
} else {
    console.log(`Obesidade de risco`)
}

