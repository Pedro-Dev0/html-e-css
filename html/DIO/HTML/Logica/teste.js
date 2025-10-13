
const vovoTem = "Na casa da minha vó tem, "
let cafe = "Cafe, "
let acucar = "Açucar, "
let bicicleta = "Minha bicicleta "

console.log(vovoTem + cafe + acucar + bicicleta)
console.log("E por isso gosto de ir lá para brincar muito")

let brincar = ["Pular corda", "Pega pega", "corrida"]

console.log(brincar[2])

let colegas = [
    ["João", "Idade: 10", "Legal"],
    ["Carol", "Idade: 9", "Bacaninha"],
    ["Carlos", "Idade: 13", "Chato"],
]

console.log("Gostaria de brincar com, " + colegas[0][0] + " porque acho ele muito " + colegas[0][2] + " Juntos vamos brincar de " + brincar[2])

colegas.push(["Maria", "Idade: 9", "Linda"])

console.log(colegas)
colegas.splice(3)

console.log(colegas)

let vamosBrincar = true

if(vamosBrincar == true) {
    console.log("Arrumou a casa pode ir brincar")
} else {
    console.log("Não fez nada, não pode brincar")
}


console.log("João e Pedro querem brincar, mas do que seria legal?")
let brincarDoQue = 1

switch (brincarDoQue) {
    case 1:
        console.log("Pega pega")
    break
    case 2:
        console.log("Pular corda")
    break
    case 3:
        console.log("Lutinha")
    break
    default:
        console.log("Não sabemos, ver TV nesse caso")
}