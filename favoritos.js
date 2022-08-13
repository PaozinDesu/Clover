var Produtos = [
    "imagens/Jogos/Genshin/chongyunChaveiro.png",
    "imagens/Jogos/Genshin/kleeChaveiro.png",
    "imagens/Jogos/Genshin/sayuChaveiro.png",
    "imagens/Jogos/Genshin/ayakaChaveiro.png",
    "imagens/Jogos/Genshin/hutaoChaveiro.png",
    "imagens/Jogos/Genshin/caneca-hutao.png",
    "imagens/Jogos/Genshin/caneca-kazuha.png",
    "imagens/Jogos/Genshin/klee-bottom.png",
    "imagens/Jogos/Genshin/ganyu-bottom.png",
    "imagens/Jogos/Genshin/jean-bottom.png",
    "imagens/Jogos/Genshin/mochila-kazuha.png",
    "imagens/Jogos/Genshin/cosplay-hutao.png",
    "imagens/Jogos/Genshin/blusa-klee.png",
    "imagens/Jogos/Genshin/blusa-paimon.png",
    "imagens/Jogos/Genshin/keycapGenshinShogun.png",
]

var colocarImagens = document.getElementById("imagem")



for (let i = 0; i < Produtos.length; i++) {
    if (i == 0) {
        colocarImagens.innerHTML += `
            <div class="itemContiner" id="id${i}">
            <img src="${Produtos[i]}" alt="" class="item imagem-exibida">
            <button class="button-Comprar">Comprar</button>
            <button onclick="retirar(${i})" class="remover"><img class ="alturaImagem"src="imagens/icons/cancelar-icon.png" alt=""></button>
            </div>
            `
    } else {
        colocarImagens.innerHTML += `
            <div class="itemContiner" id="id${i}">
            <img src="${Produtos[i]}" alt="" class="item">
            <button class="button-Comprar">Comprar</button>
            <button onclick="retirar(${i})" class="remover"><img class ="alturaImagem"src="imagens/icons/cancelar-icon.png" alt=""></button>
            </div>
            `
    }
}












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


const controls = document.querySelectorAll('.control');

var currentItem = 0;
const items = document.querySelectorAll('.item');

const itemsButton = document.querySelectorAll('.button-Comprar');

controls.forEach((control) => {

    control.addEventListener('click', async () => {
        const isLeft = control.classList.contains('left-arrow');

        if (isLeft) {
            currentItem -= 1;
            await isNextItem("left")


        } else {
            currentItem += 1;
            await isNextItem("right")
        }

        showItems()

    })
})

var rightClick = document.getElementById('right-click')
var leftClick = document.getElementById('left-click')
var Contador =14;
var container = document.getElementById('backgrouns')

async function retirar(remover) {
    
    var idProduto = document.getElementById(`id${remover}`);
    idProduto.outerHTML = ``
    Produtos.splice(remover, 1)

    if(Contador == 0){        
    rightClick.outerHTML =``
    leftClick.outerHTML =``
    container.innerHTML = `<h1>Não Possui Items Favoritados</h1>
    <img src="imagens/icons/qiqi-chibi.png" alt="" id="qiqi">`
}

    else if(currentItem  == remover){
        await isNextItem("right")
        showItems()
    }
    console.log(Contador)
    // if (Contador == 0){

    // }
    Contador --
}

async function isNextItem(direction) {
    
    if (currentItem > 14) {
        currentItem = 0;
        await isNextItem(direction);
    }

    else if (currentItem < 0) {
        currentItem = 14
        await isNextItem(direction);
    }
        else {
        if (direction == "left") {
            var element = document.getElementById("id" + currentItem);
            if (element) {
                return
            } else {
                currentItem--;
                await isNextItem(direction);
            }
        } else {
            const element = document.getElementById("id" + currentItem);
            if (element) {
                return
            } else {
                currentItem++;
                await isNextItem(direction);
            }
        }
       
    }
}
function showItems(){
    items.forEach(item => item.classList.remove("imagem-exibida"));

    items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
    });

    items[currentItem].classList.add("imagem-exibida");
    
}