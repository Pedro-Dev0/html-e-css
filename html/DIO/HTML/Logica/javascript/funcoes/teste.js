function myNameIs(name) {
  console.log(`Meu nome é ` + name);
}

myNameIs(`Pedro`);

function verificarIdade(idade) {
    if(idade < 18) {
        console.log(`Menor de idade, pois sua idade é ` + idade );
    } else if(idade >= 18 && idade < 40) {
        console.log(`Adulto pois sua idade é ` + idade );
    } else {
        console.log(`Senhor pois suda idade é ` + idade);
    }
}

function podeBeber(idade) {
    verificarIdade(idade)
    if (idade < 18) {
        console.log(`Criança demais para isso vá para casa`);
    } else {
        console.log(`Finalmente um homem, afunda esse barril gragolândia`);
    }
}

podeBeber(18);


