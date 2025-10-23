// objeto literal abaixo:
const pedro = {
  nome: "Pedro Sampaio",
  idade: 22,
  descricao: function () {
    //this assume o objeto e função para melhor funcionamento...
    console.log(
      `Meu nome é ${this.nome}, e tenho ${this.idade} anos, atualmente procuro vagas de estágio em TI para melhorar na área e me consolidar na mesma, conseguindo então maiores experiências e me aprimorando profissionalmente`
    );
  },
};

console.log(pedro.nome);
console.log(pedro.idade);
console.log(pedro);

pedro.altura = 1.9;
console.log(pedro);

//delete pedro.idade; para deletar informação do objeto

pedro.descricao();

pedro.nome = "Davi";
pedro.idade = 30;

pedro.descricao();

pedro.descricao = function () {
  console.log(`Fala para bexiga meu DEUS... seu nome é ${this.nome}`);
};

pedro.descricao();

const atributo = "idade"; // usando uma string com o nome igual ao do atributo no objeto para poder puxar ele de uma forma dinamica, sem precisar ser diretamente chamado...

console.log(pedro[atributo]);

class Pessoa { // classe definição do objeto
  nome;
  idade;

  descricao() {
    console.log(
      `Meu nome é ${this.nome}, e tenho ${this.idade} anos, atualmente procuro vagas de estágio em TI para melhorar na área e me consolidar na mesma, conseguindo então maiores experiências e me aprimorando profissionalmente`
    );
  }
};

const vitor = new Pessoa();
// aparece sem nada os dados da pessoa(vitor), vou add os dados abaixo:
vitor.nome = `Vitor`;
vitor.idade = 22;
vitor.descricao();
console.log(vitor);

const renan = new Pessoa();
// aparece sem nada os dados da pessoa(vitor), vou add os dados abaixo:
renan.nome = `Renan`;
renan.idade = 30; // instancia ocorrencia do objeto para colocar informações ou tirar;
renan.descricao();
console.log(renan);


