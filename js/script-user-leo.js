function abrir_modal_senha() {
    modal_senha.style.visibility = "visible";
    janela_escura.style.visibility = "visible";
    imagem.style.visibility = "visible";
}
function abrir_modal_cartao() {
    modal_cartao.style.visibility = "visible";
    janela_escura_2.style.visibility = "visible";
    imagem.style.visibility = "visible";
}
function abrir_modal_desativar() {
    modal_desativar.style.visibility = "visible";
    janela_escura_2.style.visibility = "visible";
    imagem.style.visibility = "visible";
}

function fechar_modal() {
    janela_escura.style.visibility = "hidden";
    janela_escura_2.style.visibility = "hidden";
    janela_escura_3.style.visibility = "hidden";
    imagem.style.visibility = "hidden";
}

let modal_senha = document.querySelector(".alterar_senha_button");
let modal_cartao = document.querySelector(".container_cadastrar_cartao");
let modal_desativar = document.querySelector(".desativar_conta_button"); //estou me referenciando o objeto independente do que ele é 

let janela_escura = document.querySelector(".background_transparente");
let janela_escura_2 = document.querySelector(".background_transparente_2");
let janela_escura_3 = document.querySelector(".background_transparent_3");
let imagem = document.querySelector(".x_leo_use");



let text_element = document.querySelector(".data_user_text");
let icon_element = document.querySelector(".icon_conta");


function troca_cor(){
    text_element.style.color="#2C2C2C";
    icon_element.style.stroke="#2C2C2C";
    icon_element.style.fill="#2C2C2C";
}

/* svg path,circle{
    stroke: #23B5D3;
    fill: #23B5D3;
} */