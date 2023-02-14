
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
     elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

    
function manipulaDados(operação, controle){
    const peca = controle.querySelector(".controle-contador")

    if(operação === "-"){
        peca.value = parseInt(peca.value) - 1
    }else {
        peca.value = parseInt(peca.value) + 1
    }
}