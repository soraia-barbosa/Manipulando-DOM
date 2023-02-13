const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) =>{
     elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContext)
        console.log(evento.target.parentNode)
    })
})

    

function manipulaDados(operação){
    const peca = document.querySelector(".controle-contador")
    if(operação === "subtrair"){
        braco.value = parseInt(braco.value) - 1
    }else {
        braco.value = parseInt(braco.value) + 1
    }
}