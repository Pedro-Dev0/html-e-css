class Pessoa {
  // classe definição do objeto
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;             //instacias
    this.idade = idade;
    this.anoDeNascimento = 2025 - idade;
  }

  descricao() {
    console.log(
      `Meu nome é ${this.nome}, e tenho ${this.idade} anos, atualmente procuro vagas de estágio em TI para melhorar na área e me consolidar na mesma, conseguindo então maiores experiências e me aprimorando profissionalmente`
    );
  }
}

function compararPessoas(p1, p2) {   //funcoes
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);
  }
}

const anderson = new Pessoa(`Pedro`, 22);
const murilo = new Pessoa(`Murilo`, 22);    //ocorrencias

compararPessoas(anderson, murilo);
