let nofound = document.querySelector('#nofound')
let idaVolta = document.querySelector('#ida-volta');
let apenasIda = document.querySelector('#apenas-ida');
let cards = document.querySelectorAll('.card-pacote');

idaVolta.addEventListener('click', filtraIda);
apenasIda.addEventListener('click', filtroApenasIda);

function filtraIda() {
    cards.forEach(function(card) {
        let info = card.querySelector('#voo-info'); // Seletor para o elemento de texto dentro do card
        if (info.textContent.trim().toLowerCase() !== "ida e volta") {
            card.style.display = "none";
        } else {
            card.style.display = "block";
        }
    });
}

function filtroApenasIda() {
    cards.forEach(function(card) {
        let info = card.querySelector('#voo-info').textContent.trim().toLowerCase(); // Pegando o texto do elemento dentro do card
        if (info === "apenas ida") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}



function search(){
    let input = document.querySelector('#search').value
    input = input.toLowerCase() // tudo que for digitado ficará em minusculo

    let x = document.getElementsByClassName('pacotes')

    let found = false; // Variável para verificar se algum resultado foi encontrado

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
            nofound.classList.remove('error')
        }else{
            x[i].style.display = "list-item"
            nofound.classList.add('error')
            found = true; // Um resultado foi encontrado
        }
    }

    // Se nenhum resultado foi encontrado, exibir a mensagem de "Não encontrado"
    if (!found) {
        nofound.style.display = "";
        nofound.classList.add('teste')
    } else {
        nofound.style.display = "none";
    }
}