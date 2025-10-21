function teste() {
    console.log('Olá mundo');
}

teste();
teste();

function Hey() {
    console.log('Eiii');
}

Hey();

function sayMyName(name) {
    console.log('Seu nome é' + name);
}

sayMyName(' Pedro ');

function quadrado(valor) {
    return valor * valor
}

const quadradoDe = quadrado(6);
console.log(quadradoDe + quadradoDe);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = valor * (percentualJuros / 100);
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 30));
