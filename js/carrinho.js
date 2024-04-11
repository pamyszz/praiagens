let tituloHotel = document.querySelector('#titulo-hotel')
let imgHotel = document.querySelector('#hotel-img')
let descHotel = document.querySelector('#desc-hotel')
let btnHotelUm = document.querySelector('#seleciona-hotel-1')
let btnHotelDois = document.querySelector('#seleciona-hotel-2')
let precoTotal = document.querySelector('#preco-total')
let alterarHotel = document.querySelector('#alterar-hotel')
let detalheHotel = document.querySelector('#hotel-tipo')

preco = 1300


let hotelUm = {
    nome:"Hotel Rio de Janeiro",
    caminhoImagem: "img/rio.jpg",
    descricao:"Um hotel muito bom",
    tipoHotel: "Apartamento Standard",
    valor: 1300
}

let hotelDois = {
    nome:"Hotel São Paulo",
    caminhoImagem: "img/saopaulo.jpg",
    descricao:"Um hotel melhor ainda",
    tipoHotel: "Apartamento sim",
    valor: 123
}



alterarHotel.addEventListener('click', scrollToMiddle)
btnHotelUm.addEventListener('click',selecionaHotelUm)
btnHotelDois.addEventListener('click',selecionaHotelDois)


let nomeHotelUm = document.querySelector('#titulo-hotel-um')
let descHotelUm = document.querySelector('#desc-hotel-um')
let caminhoImagem = document.querySelector('#imagem-hotel-um')
let precoHotelUm = document.querySelector('#preco-hotel-um')
let hotelTipo = document.querySelector('#tipo-hotel')


let nomeHotelDois = document.querySelector('#titulo-hotel-2')
let descHotelDois= document.querySelector('#desc-hotel-2')
let precoHotelDois = document.querySelector('#preco-hotel-2')
let hotelTipoDois = document.querySelector('#tipo-hotel-2')




nomeHotelUm.innerHTML = hotelUm.nome
descHotelUm.innerHTML = hotelUm.descricao
caminhoImagem.innerHTML = hotelUm.caminhoImagem
descHotelUm.innerHTML = hotelUm.descricao
precoHotelUm.innerHTML = hotelUm.valor
hotelTipo.innerHTML = hotelUm.tipoHotel

nomeHotelDois.innerHTML = hotelDois.nome
descHotelDois.innerHTML = hotelDois.descricao
descHotelDois.innerHTML = hotelDois.descricao
precoHotelDois.innerHTML = hotelDois.valor
hotelTipoDois.innerHTML = hotelDois.tipoHotel


function selecionaHotelUm(){
    tituloHotel.innerHTML = hotelUm.nome
    descHotel.innerHTML = hotelUm.descricao
    precoTotal.innerHTML = hotelUm.valor + preco
    imgHotel.src = hotelUm.caminhoImagem
    detalheHotel.innerHTML = hotelUm.tipoHotel
    scrollToTop()
}

function selecionaHotelDois(){
    tituloHotel.innerHTML = hotelDois.nome
    descHotel.innerHTML = hotelDois.descricao
    caminhoImagem.innerHTML = hotelDois.caminhoImagem
    imgHotel.src = hotelDois.caminhoImagem
    precoTotal.innerHTML = hotelDois.valor + preco
    detalheHotel.innerHTML = hotelDois.tipoHotel
    scrollToTop()
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

function scrollToMiddle() {
    const middleOfPage = Math.floor(document.body.scrollHeight / 2);
    window.scrollTo({
        top: middleOfPage,
        behavior: 'smooth'
    });
}


