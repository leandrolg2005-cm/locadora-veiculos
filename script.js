const caixa = document.querySelector(".comments-caixa");
const comentarios = document.querySelectorAll(".commentar");

const anterior = document.querySelector(".prev");
const proximo = document.querySelector(".next");

const bolinhas = document.querySelectorAll(".bolinha");

let indice = 0;

function atualizarCarrossel() {

    const largura = comentarios[0].offsetWidth + 30;

    caixa.scrollTo({
        left: indice * largura,
        behavior: "smooth"
    });

    bolinhas.forEach(function (bolinha, i) {

    bolinha.classList.toggle("ativa", i === indice);

});

}

proximo.addEventListener("click", function () {

    if (indice < comentarios.length - 1) {
        indice++;
        atualizarCarrossel();
    }

});

anterior.addEventListener("click", function () {

    if (indice > 0) {
        indice--;
        atualizarCarrossel();
    }

});

bolinhas.forEach(function (bolinha, i) {

    bolinha.addEventListener("click", function () {

        indice = i;

        atualizarCarrossel();

    });

});

const menuHamburguer = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".nav");

menuHamburguer.addEventListener("click", function () {

    menu.classList.toggle("ativo");

});

const cards = document.querySelectorAll(".card");

let cardAtivo = null;

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        if (card === cardAtivo) {

            card.classList.remove("virado");
            cardAtivo = null;

            return;
        }

        if (cardAtivo !== null) {
            cardAtivo.classList.remove("virado");
        }

        card.classList.add("virado");
        cardAtivo = card;

    });

});


