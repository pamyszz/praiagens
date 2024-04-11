let isModoNoturnoAtivo = false;

let ativarNoturno = document.querySelector('.noturno');
let escolhaNoturno = document.querySelector('.noturno-escolha');
let cabecalho = document.querySelector('.navbar');
let navLink = document.querySelectorAll('.nav-link');
let body = document.querySelector('.pagina');
let containercards = document.querySelector('.container-pacotes');
let textos = document.querySelectorAll('.titulo-2');
let card = document.querySelectorAll('.card-pacote');
let cardTexto = document.querySelectorAll('.titulo-4, i, h2, .titulo-3, .titulo-5, .subtitulo-2');
let cardResumo = document.querySelectorAll('.card-resumo-total');
let form = document.querySelector('.formulario');

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

    body.classList.add('modo-noturno')
    textos.forEach(function (elemento) {
        elemento.style.color = "white";
    });
    form.classList.add('modo-noturno-card')

    cardResumo.forEach(function (resumo) {
        resumo.classList.add("modo-noturno-card")
    })
    cardTexto.forEach(function (textoCard) {
        textoCard.classList.add("modo-noturno-texto")
    })

    card.forEach(function (cardd) {
        cardd.classList.add('modo-noturno-card')
    })

    navLink.forEach(function (texto) {
        texto.classList.add('text-light');
    });



    escolhaNoturno.classList.add('noturno-on');
    cabecalho.classList.add('modo-noturno');
    cabecalho.classList.remove('bg-light');
}

function removerClassesNoturnas() {
    body.classList.remove('modo-noturno')
    textos.forEach(function (elemento) {
        elemento.style.color = "black";
    });

    cardTexto.forEach(function (textoCard) {
        textoCard.classList.remove("modo-noturno-texto")
    })

    card.forEach(function (cardd) {
        cardd.classList.remove('modo-noturno-card')
    })

    navLink.forEach(function (texto) {
        texto.classList.remove('text-light');
    });

    form.classList.remove('modo-noturno-card')

    cardResumo.forEach(function (resumo) {
        resumo.classList.remove("modo-noturno-card")
    })

    escolhaNoturno.classList.remove('noturno-on');
    cabecalho.classList.remove('modo-noturno');
    cabecalho.classList.remove('bg-light');
}


// Função para verificar se o scroll atingiu um ponto específico
function verificarScrollPontoEspecifico(elemento, ponto) {
    // Obtém a posição vertical do topo do elemento
    const posicaoElemento = elemento.offsetTop;
    let card = document.querySelector('#total');

    // Verifica se a largura da tela é menor que 1119px
    if (window.innerWidth < 1119) {
        return; // Sai da função se a largura da tela for menor que 1119px
    }

    // Verifica se a posição do scroll é maior ou igual ao ponto específico
    if (window.pageYOffset >= posicaoElemento + ponto) {
        // O scroll atingiu o ponto específico
        card.style.position = "fixed";
        card.style.top = "100px";
    } else if (window.pageYOffset < ponto) {
        // O scroll está abaixo do ponto específico
        card.style.position = "static"; // Restaura a posição original
        card.style.top = "auto"; // Restaura a posição original
    }
}

// Chama a função quando o scroll da página é alterado
window.addEventListener('scroll', function () {
    // Chama a função apenas se a largura da tela for maior ou igual a 1119px
    if (window.innerWidth >= 1119) {
        // Chama a função com o elemento e o ponto específico desejado
        verificarScrollPontoEspecifico(document.body, 680); // Exemplo: ponto específico a 500 pixels do topo do corpo da página
    }
});


