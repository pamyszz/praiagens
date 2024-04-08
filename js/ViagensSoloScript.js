var radiomostrar = document.getElementById('Idaevolta');
var radioesconder = document.getElementById('Apenasida');
var esconder = document.getElementById('destino');
var data = document.getElementById('data');

radioesconder.addEventListener("click", ()=>{
    esconder.classList.add('esconder')
    data.classList.add('esconder')
})
radiomostrar.addEventListener('click', ()=> {
    esconder.classList.remove('esconder')
    data.classList.remove('esconder')
})
function esconder() {
    esconder.classList.remove('esconder')
}


document.getElementById('BTCP').addEventListener('click', function() {
    document.getElementById('divAbsoluta'). style.display = "block";
})

document.getElementById('FinalizarCP').addEventListener('click', function() {
    document.getElementById('divAbsoluta'). style.display = "none";
    alert("compra efetuada com sucesso!")
})
document.getElementById('Cancelar').addEventListener('click', function() {
    document.getElementById('divAbsoluta'). style.display = "none";
})

document.getElementById('btnp').addEventListener('click', function() {
    document.getElementById('infoPG'). style.display = "block";
})
document.getElementById('btEnviar').addEventListener('click', function() {
    document.getElementById('infoPG'). style.display = "none";
})

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}