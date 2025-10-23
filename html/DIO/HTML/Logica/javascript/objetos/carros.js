class Carro {
  marca;
  cor;
  gastoMedioPorKm;
  // classe para definição
  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm.toFixed(2);
  }

  calcularGastoDePercurso(distanciaEmKm, precoDoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoDoCombustivel;
  }
}

const uno = new Carro(`Fiat`, `Branco`, 10 / 14); // instancia
console.log(uno);
console.log(uno.calcularGastoDePercurso(10, 6.22));
const palio = new Carro(`Volksvagew`, `Prata`, 10 / 12.5)
console.log(palio);
console.log(palio.calcularGastoDePercurso(10, 6.22)); // ocorrencias