// boolean true e false

z = 10
x = 5

if (z > x) {
    console.log("verdadeiro")
} else {
    console.log("falso")
} // entendendo na pratica valores booleanos

// vendo numero pares ou impar

const numero = 0

/*
if (numero % 2 === 0) {
    console.log("par")
} else {
    console.log("impar")
}*/

const NumeroPar = (numero % 2) === 0;
console.log(NumeroPar)

// sempre usar === pois não misturamos tipos, sempre melhor um tipo com o mesmo tipo, por isso estritamente igual faz com que só dois tipos iguais se reconheçam enquanto == faz com que dois tipos diferentes se reconheçam

if (NumeroPar) {
    console.log("par")
} else {
    console.log("impar")
}

// if == se e condição, caso a condição não seja realizazada ai se executa o else == se não (se não comprida condição ai else)

let idade = 17;

let amigo = 19;

const comprarCigarros = 18;

if (idade >= comprarCigarros) {
    console.log("pode comprar cigarros")
} else if (amigo >= comprarCigarros) {
    console.log("Amigo compra para você")
} else {
    console.log("não pode comprar cigarros")
}

// testando na prática para aprender