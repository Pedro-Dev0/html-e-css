let pontosDeVida = 0
// toda vez que toma uma poção seu personagem regenera 1 de vida

for(let i = 0; i < 10; i++) {
    pontosDeVida += 1
    //pontosDeVida = pontosDeVida + 1 (acima só foi simplificado)
    console.log("Tomou uma poção mágica " + i)
}

console.log(pontosDeVida + "HP")

let u = 1

while(u < 4){
    console.log("Pegue mais pokemons")
    u++
}// não pode esquecer de incrementar se não buga e da problema pois nunca vai pegar a condição imposta!

let z = 0

do{
    console.log("OIII")
    z++
}while(z < 5) // ele primeiro faz e depois verifica, por isso mesmo errado a condição ele vai executar pelo menos 1 vez ou entra em um lopping doido...