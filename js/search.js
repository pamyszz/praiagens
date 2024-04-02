function search(){
    let input = document.querySelector('#search').value
    input = input.toLowerCase() // tudo que for digitado ficará em minusculo

    let x = document.getElementsByClassName('card-pacote')

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }else{
            x[i].style.display = "list-item"
        }
    }
    
}