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


// como fazer matrizes
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[0][0]); // 1 - linha 0, coluna 0
console.log(matriz[1][1]); // 5 - linha 1, coluna 1
console.log(matriz[2][2]); // 9 - linha 2, coluna 2
console.log(matriz[0][1]); // 2 - linha 0, coluna 1

// matriz de objetos
let matrizObjetos = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 35 }
];

console.log(matrizObjetos[0]["nome"]); // João
console.log(matrizObjetos[0]["idade"]); // 30

//crie matriz de objetos com colunas e linhas
let matrizPessoas = [
    { nome: "Ana", idade: 28, cidade: "São Paulo" },
    { nome: "Bruno", idade: 32, cidade: "Rio de Janeiro" },
    { nome: "Carla", idade: 24, cidade: "Belo Horizonte" }
];
console.log(matrizPessoas[1]["nome"]); // Bruno
console.log(matrizPessoas[1]["idade"]); // 32
console.log(matrizPessoas[1]["cidade"]); // Rio de Janeiro
console.log(matrizPessoas[2]["nome"]); // Carla
console.log(matrizPessoas[2]["idade"]); // 24
console.log(matrizPessoas[2]["cidade"]); // Belo Horizonte
console.log(matrizPessoas[0]["nome"]); // Ana
console.log(matrizPessoas[0]["idade"]); // 28
console.log(matrizPessoas[0]["cidade"]); // São Paulo


let timePokemom = [
    ["Pikachu", "M", "level 1"],
    ["Chamander", "M", "level 10"],
    ["Bulbasaro", "F", "level 32"],
    ["Raichu", "F", "level 100"],
];

console.log(timePokemom[0]) //pega toda a coluna
console.log(timePokemom[0][0]) // nome
console.log(timePokemom[0][1]) // pega a primeira coluna(0) e segundo item(1) sexualidade;
console.log(timePokemom[0][2]) // level

let pessoas = [
    ["Ana", "28", "São Paulo"],
    ["Bruno", "32", "Goias"]
]

let pessoasLegais = [
    {nome: "Ana", idade: "28", cidade: "São Paulo"}
]

console.log(pessoas[0][2])
console.log(pessoasLegais[0]["cidade"])