var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var SetaD = window.document.getElementById("setadireita")
var SetaE = window.document.getElementById("setaesquerda")
function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaD.style = "display:none"
    SetaE.style = "display:flex"

}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaD.style = "display:flex"
    SetaE.style = "display:none"
    
}