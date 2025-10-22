function myNameIs(name) {
  return `Meu nome é ` + name;
}

function verificarIdade(idade) {
  if (idade < 18) {
    console.log(
      myNameIs(`Pedro, `) + `Menor de idade pois sua idade é ` + idade
    );
  } else if (idade >= 18 && idade < 40) {
    console.log(myNameIs(`Pedro, `) + `Adulto pois sua idade é ` + idade);
  } else {
    console.log(myNameIs(`Pedro, `) + `Senhor pois suda idade é ` + idade);
  }
}

function podeBeber(idade) {
  verificarIdade(idade);
  if (idade < 18) {
    console.log(`Criança demais para isso vá para casa`);
  } else {
    console.log(`Finalmente um homem, afunda esse barril gragolândia`);
  }
}

function tudoJunto() {
  podeBeber(17);
}

tudoJunto();

function comprasEPrecos(valor, forma, descontoOuAdicao) {
    if(forma === 1) { // dinheiro 10%
        console.log(valor - (valor * descontoOuAdicao) / 100);
    } else if(forma === 2) { // pix 15%
        console.log(valor - (valor * descontoOuAdicao) / 100);
    } else if (forma === 3) { //cartão parcelado em até 2x
        console.log(valor);
    } else {  // cartão parcelado em até 3x ou mais, valor mais 10% de juros
        console.log(valor + (valor * descontoOuAdicao) / 100);
    }
}

comprasEPrecos(100, 4, 20);