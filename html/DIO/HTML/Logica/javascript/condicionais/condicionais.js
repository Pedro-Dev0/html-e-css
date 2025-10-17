// boolean true e false

z = 10
x = 5

if (z > x) {
    console.log("verdadeiro")
} else {
    console.log("falso")
} // entendendo na pratica valores booleanos

// vendo numero pares ou impar

const numero = 5

/*
if (numero % 2 === 0) {
    console.log("par")
} else {
    console.log("impar")
}*/

const NumeroPar = (numero % 2) === 0;
console.log(NumeroPar)

// sempre usar === pois não misturamos tipos, sempre melhor um tipo com o mesmo tipo, por isso estritamente igual faz com que só dois tipos iguais se reconheçam enquanto == faz com que dois tipos diferentes se reconheçam

