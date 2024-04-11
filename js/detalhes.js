let modal = document.getElementById('modal-resumo-hotel')
let close = document.getElementById('close')

let detalhesIda = document.getElementById('detalhes-hotel')

detalhesIda.addEventListener('click', ()=>{
   modal.style.display='flex'
   modal.style.zIndex='1'
   
})

close.addEventListener('click', ()=>{
    modal.style.display='none'
})