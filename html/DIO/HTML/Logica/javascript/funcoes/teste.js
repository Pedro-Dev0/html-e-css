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
