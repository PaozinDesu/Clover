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

}
function verMenos() {

    FormasDePagamento.textContent = `
    `

    buttonVerMenos.innerHTML = `
    <button onclick="mostrarFormasPagamento()" id="verMais">Ver mais<img src="imagens/icons/up-arrow.png" alt=""></button>
    `
}

var email = document.getElementById("email")
var Senha = document.getElementById("senha")

function conferir() {
    var nome = email.value
    var senha = Senha.value
    
    if (nome == "" || senha == "") {
        alert("Insira todas as informações!")
    }
}