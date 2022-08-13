var FormasDePagamento = document.getElementById("formasDePagamento")
var buttonVerMenos = document.getElementById("btnVerMais")


function mostrarFormasPagamento() {

    FormasDePagamento.innerHTML = `
     <h2>Formas de pagamentos:</h2>
    <div id="formasDePagamento_img">
        <img src="imagens/formas_de_pagamento/ame-digital.svg" alt="">
        <img src="imagens/formas_de_pagamento/american-express.svg" alt="">
        <img src="imagens/formas_de_pagamento/boleto.svg" alt="">
        <img src="imagens/formas_de_pagamento/diners.svg" alt="">
        <img src="imagens/formas_de_pagamento/elo.svg" alt="">
        <img src="imagens/formas_de_pagamento/mastercard.svg" alt="">
        <img src="imagens/formas_de_pagamento/paypal.svg" alt="">
        <img src="imagens/formas_de_pagamento/picpay.svg" alt="">
        <img src="imagens/formas_de_pagamento/pix.svg" alt="">
        <img src="imagens/formas_de_pagamento/visa.svg" alt="">
    </div> `
    buttonVerMenos.innerHTML = `
    <button onclick="verMenos()" id="verMais">Ver menos<img src="imagens/icons/down-arrow (1).png" alt=""></button>
    `
    // document.getElementById("continerGrid").style.gridTemplateRows = "63px auto 200px";
    document.getElementById("rodape").style.position = "fixed";
    document.getElementById("ultimaParte").style.margin = "0 0 120px 0"
}
function verMenos() {

    FormasDePagamento.textContent = `
    `

    buttonVerMenos.innerHTML = `
    <button onclick="mostrarFormasPagamento()" id="verMais">Ver mais<img src="imagens/icons/up-arrow.png" alt=""></button>
    `
    // document.getElementById("continerGrid").style.gridTemplateRows = "63px auto 100px";
    document.getElementById("rodape").style.position = "relative";
    document.getElementById("ultimaParte").style.margin = "0 0 0 0"
}