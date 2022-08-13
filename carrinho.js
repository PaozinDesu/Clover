var Produtos = [{
        "nome": "Chaveiro Hutao - Genshin Impact",
        "material": "Metal",
        "marca": "Sunsyea",
        "altura": "6,5cm",
        "largura": "7,0cm",
        "profundidade": "0,2cm",
        "preco": 89.99,
        "img": "imagens/Jogos/Genshin/hutaoChaveiro.png",
        "quantidade": 1,
    },
    {
        "nome": "Chaveiro Kamisato Ayaka - Genshin Impact",
        "material": "Metal",
        "marca": "Sunsyea",
        "altura": "6,5cm",
        "largura": "6,9cm",
        "profundidade": "0,2cm",
        "preco": 99.99,
        "img": "imagens/Jogos/Genshin/ayakaChaveiro.png",
        "quantidade": 1,
    },

]
var contador = 0


var FormasDePagamento = document.getElementById("formasDePagamento")
var buttonVerMenos = document.getElementById("btnVerMais")
var corpo = document.getElementById("corpo")
var descricao = document.getElementById("descricao")
var total = document.getElementById("precoVisaoGerl")
var containerCompra = document.getElementById("containerComprar")
var Valor = 0
var totalVlor = 0

var simples = document.getElementsByClassName("containerVisaoGeral")
var produto = document.getElementsByClassName("containerProduto")
var visao = document.getElementsByClassName("visaoGeral")



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
    document.getElementById("continerGrid").style.gridTemplateRows = "73px auto 200px";


}

function verMenos() {

    FormasDePagamento.textContent = ``

    buttonVerMenos.innerHTML = `
    <button onclick="mostrarFormasPagamento()" id="verMais">Ver mais<img src="imagens/icons/up-arrow.png" alt=""></button>
    `
    document.getElementById("continerGrid").style.gridTemplateRows = "73px auto 100px";
}

for (let i = 0; i < Produtos.length; i++) {
    corpo.innerHTML +=
        `
<div class="containerProduto" id="id${i}">
<div class="mostruarioProduto">
    <div class="imgProduto">
        <img src="${Produtos[i].img}" alt="">
    </div>

    <div class="informacoesProduto">
        <h1 class="nomeProduto"> ${Produtos[i].nome}</h1>
        <h4 class="descricaoProduto">
            <b>Material:</b> ${Produtos[i].material}<br>
            <b>Marca:</b> ${Produtos[i].marca}<br>
            <b>Altura:</b> ${Produtos[i].altura}<br>
            <b>Largura:</b> ${Produtos[i].largura}<br>
            <b>Profundidade:</b> ${Produtos[i].profundidade}<br>
            <br>
        </h4>
        <div class="precoProduto">
            <h1>R$ ${Produtos[i].preco}</h1>
        </div>
    </div>
</div>
<div id="botoesComprarCancealar">
    <button class="botao comprar">Comprar<img src="imagens/icons/verificar.png" alt=""></button>
    <button onclick="cancelar(${i})" class="botao cancelar">Cancelar<img src="imagens/icons/cancelar.png" alt=""></button>
</div>
</div>
`
    descricao.innerHTML += `  
<div class="containerVisaoGeral" id="idDescricao${i}">
    <div class="visaoGeral">
        <img src="${Produtos[i].img}" alt="">
    </div>
    <h2>Quantidade</h2>
    <div class="aumentarEDiminuarQuantidade">
        <button onclick="menos(${i})"><b>-</b></button>
        <h3 id="quantidade${i}">${Produtos[i].quantidade}</h3><button onclick="mais(${i})">+</button>
    </div>
</div>
`

    Valor += Produtos[i].preco;
    if (i == Produtos.length - 1) {
        total.innerHTML = `<b>Total:</b> R$${Valor}`
    }
}

function mais(Mais) {
    atualizar(Mais, "mais")
}

function menos(Menos) {
    atualizar(Menos, "menos")
}


function atualizar(valor, conferir) {
    if (Produtos[valor].quantidade == 0 && conferir == "menos") {
        alert("Quantidade não pode ser menor que 0")
    } else {
        if (conferir == "mais") {
            var quantidade = document.getElementById(`quantidade${valor}`);
            quantidade.innerHTML = Produtos[valor].quantidade + 1
            Produtos[valor].quantidade = Produtos[valor].quantidade + 1
            Valor += Produtos[valor].preco
            total.innerHTML = `<b>Total:</b> R$${Valor.toFixed(2)}`
            console.log(Produtos[valor].quantidade)
            console.log(Valor)
        } else {
            var quantidade = document.getElementById(`quantidade${valor}`);
            quantidade.innerHTML = Produtos[valor].quantidade - 1
            Produtos[valor].quantidade = Produtos[valor].quantidade - 1
            Valor -= Produtos[valor].preco
            total.innerHTML = `<b>Total:</b> R$${Valor.toFixed(2)}`
            console.log(Produtos[valor].quantidade)
            console.log(Valor)
        }
    }
    if (Valor < 0){
        total.innerHTML = `<b>Total:</b> R$0.00`
    }
}

function cancelar(remover) {
    var idProduto = document.getElementById(`id${remover}`);
    var idProdutoDescricao = document.getElementById(`idDescricao${remover}`)


    if (Produtos[remover].quantidade == 0) {
        idProduto.outerHTML = ``
        idProdutoDescricao.outerHTML = ``

    } else {
        idProduto.outerHTML = ``
        idProdutoDescricao.outerHTML = ``

        Valor -=  Produtos[remover].preco * Produtos[remover].quantidade
        total.innerHTML = `<b>Total:</b> R$${Valor.toFixed(2)}`

    }
    if (Valor < 0){
        total.innerHTML = `<b>Total:</b> R$0.00`
    }
}
function comprarTudo(){
   var produto = document.getElementsByClassName('containerProduto')
   if(produto.length == 0){
    alert("O carrinho Não possui produtos para comprar")
   }
   console.log(produto.lenght)
}