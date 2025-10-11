console.log("Hello World")

let ehligado = false

if(1 === "1") {  //if só true
    console.log("executar comando")
} else {
    console.log("continua desligado")
}  //else só false( quando a condição não é compromida)


let possuiOvos = false
let itensComprados = ""

if(possuiOvos) {
    itensComprados = "Leite"
    console.log("item comprado: " + itensComprados)
} else {
    console.log("Comprar ovos e leite")
}


let nivelDeFome = 3

if(nivelDeFome == 1) {
    console.log("Pouca fome")
} else if(nivelDeFome == 2) {
    console.log("Muita fome")
} else {
    console.log("Comeria até os movéis")
}


// switch case da para ser feito com numeros como:
// case 1, 2 e etc...

let fruta = 1

switch (fruta) {
    case 1:
        console.log("vitamina de banana")
    break
    case "Laranja":
        console.log("suco de laranja")
    break
    case "Abacaxi":
        console.log("suco de abacaxi")
    break
    default:
        console.log("Nenhum suco, vou é tomar leite da caixa mesmo!")


}