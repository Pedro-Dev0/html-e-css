/*function main() {
  console.log("Função principal");
  secundaria();
}

function secundaria() {
  console.log("HAHAAHA");
}
// o mesmo explica que vai ficar uma função principal a cargo de tudo e criamos funções secundarias para usar dentro da mesma, as invocando com argumento ou somente as chamando, talvez até mesmo atribuindo variaveis para facilitar esse chamado!
*/

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return `Abaixo do peso natural`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Peso normal`;
  } else if (imc >= 25 && imc < 30) {
    return `Acima do peso`;
  } else if (imc >= 30 && imc < 40) {
    return `Obeso`;
  } else {
    return `Obesidade de risco`;
  }
}

/*function main() {
  let peso = 100;
  let altura = 1.9;

  const imc = calcularImc(peso, altura);
  console.log(imc.toFixed(2) + ` ${classificarImc(imc)}`);
};

main();*/



(function () {
  let peso = 100;
  let altura = 1.9;

  const imc = calcularImc(peso, altura);
  console.log(imc.toFixed(2) + ` ${classificarImc(imc)}`);
})();

// função que se autoinvoca pode ter nome ou não, como se autoinvoca não precisa de um nome pois ela mesma já se chama...