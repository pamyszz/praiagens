let nofound = document.querySelector('#nofound')

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
