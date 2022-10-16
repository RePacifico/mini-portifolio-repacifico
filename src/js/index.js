const abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }
       
    selecionarAba(aba)
    mostrarInformacoesDaAba(aba)            
    }); 
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    console.log(aba);

    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDasInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDasInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}