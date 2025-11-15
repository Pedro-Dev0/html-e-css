const botaoPlayPause = document.getElementById("play-pause")
const botaoProximoCapitulo = document.getElementById("proximo")
const botaoCapituloAnterior = document.getElementById("anterior")
const audio = document.getElementById("audio-capitulo")
const tituloCapitulo = document.getElementById("capitulo")

let tocando = false;
let capituloAtual = 1;
let totalCapitulos = 10;

function tocarFaixa() {
    audio.play()
    tocando = true;

    botaoPlayPause.classList.add("tocando")
}

function pausarFaixa() {
    audio.pause()
    tocando = false;

    botaoPlayPause.classList.remove("tocando")
}


function tocarOuPausar() {
    if(tocando === true) {
        pausarFaixa()
    } else {
        tocarFaixa()
    }
}

function proximoCapitulo() {
    if(capituloAtual < totalCapitulos) {
        capituloAtual++
} else {
        capituloAtual = 1
    }

    audio.src = `./audios/${capituloAtual}.mp3`
    tituloCapitulo.innerText = `Capitulo ${capituloAtual}`
}

function capituloAnterior() {
    if(capituloAtual === 1) {
        capituloAtual = totalCapitulos
    } else {
        capituloAtual--
    }

    audio.src = `./audios/${capituloAtual}.mp3`
    tituloCapitulo.innerText = `Capitulo ${capituloAtual}`
}

botaoPlayPause.addEventListener("click", tocarOuPausar)
botaoProximoCapitulo.addEventListener("click", proximoCapitulo)
botaoCapituloAnterior.addEventListener("click", capituloAnterior)