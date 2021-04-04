var chat = document.getElementById("abaChat");
var atividades = document.getElementById("abaAtividades");
var configuracoes = document.getElementById("abaConfiguracoes");

function alterAba(id) {
    
    if(id == 1) {
        atividades.style.display = "block";
        chat.style.display = "none";
        configuracoes.style.display = "none";
    }

    if(id == 2) {
        atividades.style.display = "none";
        chat.style.display = "block";
        configuracoes.style.display = "none";
    }

    if(id == 3) {
        atividades.style.display = "none";
        chat.style.display = "none";
        configuracoes.style.display = "block";
    }
}




var themes = document.getElementsByClassName("theme");
var abas = document.getElementsByClassName("abas");
var header  = document.getElementById("page-header");
var line  = document.getElementById("line");
var body = document.getElementById("backgroundBody");


var lastTheme = 0;
function alterTheme(colorHex, id) {
    themes[lastTheme].classList.remove("selected");
    themes[id].classList.add("selected");
    lastTheme = id;
    header.style.transition = "1s";
    header.style.backgroundColor = colorHex;
    line.style.backgroundColor = colorHex;
    body.style.backgroundColor = colorHex + "20";
    abas.style.
    console.log(colorHex);
}

