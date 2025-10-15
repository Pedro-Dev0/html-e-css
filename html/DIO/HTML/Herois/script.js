const heroName = "Super Dev";

console.log(`Bem-vindo, ${heroName}! Prepare-se para salvar o dia com suas habilidades de programação!`);
// Aqui você pode adicionar mais funcionalidades relacionadas ao "Nível do Heroi"

let heroLevel = 1000;

function medicaoNivel() {
    if (heroLevel <= 1000) {
        console.log(`${heroName}, você está no nivel Ferro! Continue se esforçando!`);
    } else if (heroLevel >= 1001 && heroLevel <= 2000) {
        console.log(`${heroName}, você está no nivel Bronze! Bom trabalho!`);
    } else if (heroLevel >= 2001 && heroLevel <= 5000) {
        console.log(`${heroName}, você está no nivel Prata! Excelente!`);
    } else if (heroLevel >= 5001 && heroLevel <= 7000) { 
        console.log(`${heroName}, você está no nivel Ouro! Parabéns!`);
    } else if (heroLevel >= 7001 && heroLevel <= 8000) {
        console.log(`${heroName}, você está no nivel Platina! Incrível!`);
    } else if (heroLevel >= 8001 && heroLevel <= 9000) {
        console.log(`${heroName}, você está no nivel Ascendente! Sensacional!`);
    } else if (heroLevel >= 9001 && heroLevel <= 10000) {
        console.log(`${heroName}, você está no nivel Imortal! Fantástico!`);
    } else if (heroLevel > 10000) {
        console.log(`${heroName}, você está no nivel Radiante! Lendário!`);
    } else {
        console.log("Nível inválido!");
    }
}

medicaoNivel();
console.log(` Seu nível atual é: ${heroLevel}`);