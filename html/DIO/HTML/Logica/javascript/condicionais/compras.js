let precoEtiqueta = 100;
//1 const debitoDesconto = precoEtiqueta - (precoEtiqueta * 10) / 100;
//2 const dinheiroOuPix = precoEtiqueta - (precoEtiqueta * 15) / 100;
//3 const cartao2x = precoEtiqueta / 2;
//4 const cartao3xMais = precoEtiqueta / 3 + (precoEtiqueta * 10) / 100;
/*
if (formaDePagamento === 1) {
    console.log(`${precoEtiqueta - (precoEtiqueta * 10) / 100} Débito`)
} else if (formaDePagamento === 2) {
    console.log(`${precoEtiqueta - (precoEtiqueta * 15) / 100} Pix`)
} else if (formaDePagamento === 3) {
    console.log(`${precoEtiqueta / 2} Cartão em 2x`)
} else {
    console.log(`${precoEtiqueta / 3 + (precoEtiqueta * 10) / 100} Cartão em 3x`)
}*/
let formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(`${precoEtiqueta - (precoEtiqueta * 0.1)} Débito`)
} else if (formaDePagamento === 2) {
    console.log(`${precoEtiqueta - (precoEtiqueta * 0.15)} Pix`)
} else if (formaDePagamento === 3) {
    console.log(`${precoEtiqueta} Cartão em 2x`)
} else {
    console.log(`${precoEtiqueta + (precoEtiqueta * 0.1)} Cartão em 3x`)
}