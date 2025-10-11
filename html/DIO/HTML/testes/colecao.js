/* let variavel
 const variavel constante sem mudança

 aprendendo vetores agora...

variaveis compostas - arrays ou vetores

  arrays são listas de valores
    cada valor tem um índice, começando do 0
    para acessar um valor, usamos o nome do array + o índice entre colchetes
    ex: let frutas = ["banana", "maçã", "laranja"];
        console.log(frutas[0]); // banana
        console.log(frutas[1]); // maçã
        console.log(frutas[2]); // laranja

*/

const casaVovo = "Na casa da vovó tem... ";
let poteCafe = "pote de café, ";
let poteAcucar = "pote de açúcar, ";
let poteBiscoito = "pote de biscoito, ";

console.log(casaVovo + poteCafe + poteAcucar + poteBiscoito);

//criando um array
let pokemon = ["Pikachu", "Charmander", "Squirtle", "Bulbassauro"];

console.log(pokemon[0]);//Pikachu
console.log(pokemon[1]);//Charmander
console.log(pokemon[2]);//Squirtle
console.log(pokemon[3]);//Bulbassauro

//adicionando um item ao array
pokemon.push("Eevee");
console.log(pokemon);

//apagando um item do array
pokemon.pop();
console.log(pokemon);
//apagando um item específico do array
pokemon.splice(5);
console.log(pokemon);

pokemon.shift();
console.log(pokemon);

//push adiciona um item ao array

//pop apaga o último item do array
//shift apaga o primeiro item do array
//splice apaga um item específico do array