class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  imc() {
    return this.peso / (this.altura * this.altura);
  }
// aqui dentro não precisa declarar função
  calculoDoImc() {
    const imc = this.imc();
    if (imc < 18.5) {
      return (`Abaixo do peso`);
    } else if (imc >= 18.5 && imc < 25) {
      return (`Peso normal`);
    } else if (imc >= 25 && imc < 30) {
      return (`Acima do peso`);
    } else if (imc >= 30 && imc < 40) {
      return (`Obeso`);
    } else {
      return (`Risco de obesidade mórbida`);
    }
    // return para que o valor possa ficar gravado e usado em outras situações...
  };
}

const joao = new Pessoa(`João`, 70, 1.70);
const pedro = new Pessoa(`Pedro`, 100, 1.89);
const clara = new Pessoa(`Clara`, 70, 1.69);
console.log(this);
console.log(joao);
console.log(joao.imc().toFixed(2));
console.log(joao.calculoDoImc());

console.log(pedro);
console.log(pedro.imc().toFixed(2));
console.log(pedro.calculoDoImc());

console.log(clara);
console.log(clara.imc().toFixed(2));
console.log(clara.calculoDoImc());
