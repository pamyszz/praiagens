var isModoNoturnoAtivo = false;

var teste = document.querySelector('.btn-teste');
var body = document.body; // Seleciona o corpo do documento
var carrinho = document.querySelector('.carrinho');
var cardViagem = document.querySelectorAll('.card-viagem-info');
var cardDetalhes = document.querySelectorAll('.container-card-detalhes, .card-hotel, .card-viagem-info, .card-resumo');
var botoes = document.querySelectorAll('.btn-voo');
var ativarNoturno = document.querySelector('.noturno');
var escolhaNoturno = document.querySelector('.noturno-escolha');
var cabecalho = document.querySelector('.navbar');
var navLink = document.querySelectorAll('.nav-link');

ativarNoturno.addEventListener('click', toggleNoturno);

function toggleNoturno() {
    if (isModoNoturnoAtivo) {
        removerClassesNoturnas();
        isModoNoturnoAtivo = false;
    } else {
        aplicarClassesNoturnas();
        isModoNoturnoAtivo = true;
    }
}

function aplicarClassesNoturnas() {
    body.classList.add('modo-noturno');
    carrinho.classList.add('modo-noturno');
    
    // Seleciona todos os elementos de texto dentro do corpo
    var textos = document.querySelectorAll('a, i, body p, body h1, body h2, body h3, body h4, body h5, body h6');
    textos.forEach(function(texto) {
        texto.classList.add('modo-noturno-texto');
    });

    cardDetalhes.forEach(function(elemento) {
        elemento.classList.add('modo-noturno-card');
    });

    botoes.forEach(function(elemento){
        elemento.classList.add('modo-noturno-btn');
    });

    navLink.forEach(function(texto){
        texto.classList.add('text-light');
    });

    escolhaNoturno.classList.add('noturno-on');
    cabecalho.classList.add('modo-noturno');
    cabecalho.classList.remove('bg-light');
}

function removerClassesNoturnas() {
    body.classList.remove('modo-noturno');
    carrinho.classList.remove('modo-noturno');
    
    var textos = document.querySelectorAll('.modo-noturno-texto');
    textos.forEach(function(texto) {
        texto.classList.remove('modo-noturno-texto');
    });

    cardDetalhes.forEach(function(elemento) {
        elemento.classList.remove('modo-noturno-card');
    });

    botoes.forEach(function(elemento){
        elemento.classList.remove('modo-noturno-btn');
    });

    navLink.forEach(function(texto){
        texto.classList.remove('text-light');
    });

    escolhaNoturno.classList.remove('noturno-on');
    cabecalho.classList.remove('modo-noturno');
    cabecalho.classList.add('bg-light');
}