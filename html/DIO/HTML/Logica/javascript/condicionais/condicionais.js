// boolean true e false

z = 10;
x = 5;

if (z > x) {
  console.log("verdadeiro");
} else {
  console.log("falso");
} // entendendo na pratica valores booleanos

// vendo numero pares ou impar

const numero = 0;

/*
if (numero % 2 === 0) {
    console.log("par")
} else {
    console.log("impar")
}*/

const NumeroPar = numero % 2 === 0;
console.log(NumeroPar);

// sempre usar === pois não misturamos tipos, sempre melhor um tipo com o mesmo tipo, por isso estritamente igual faz com que só dois tipos iguais se reconheçam enquanto == faz com que dois tipos diferentes se reconheçam

if (NumeroPar) {
  console.log("par");
} else {
  console.log("impar");
}

// if == se e condição, caso a condição não seja realizazada ai se executa o else == se não (se não comprida condição ai else)

let idade = 17;

let amigo = 17;

const comprarCigarros = 18;

if (idade >= comprarCigarros) {
  console.log("pode comprar cigarros");
} else if (amigo >= comprarCigarros) {
  console.log("Amigo compra para você");
} else {
  console.log("não pode comprar cigarros");
}

// testando na prática para aprender

const precoGasolina = 6.14;

const precoEtanol = 4.17;

const kmPorLitro = 7.3;

let distanciaKM = 120;

let tipoCombustivel = "Etanol";

let litrosConsumidos = distanciaKM / kmPorLitro;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(`O gasto em etanol foi ${valorGasto.toFixed(2)}`);
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(`O gasto em gasolina foi ${valorGasto.toFixed(2)}`);
}

// complicado mas o tipo de combustivel é vinculado através da igualdade com o preçoEtanol e a igualdade de etanol em ambos os textos o conectam para que possa ver o valor correto, caso seja colocado gasolina ai conecta com o else de baixo ou colocando qualquer outra coisa...
