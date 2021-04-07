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
var body = document.getElementById("backgroundBody");


var lastTheme = 0;
function alterTheme(colorHex, id) {
    themes[lastTheme].classList.remove("selected");
    themes[id].classList.add("selected");
    lastTheme = id;

    Array.prototype.forEach.call(document.getElementsByClassName("primary-color"), function(element) {
        element.style.transition = "1s";
        element.style.backgroundColor = colorHex;
    });

    Array.prototype.forEach.call(document.getElementsByClassName("secondary-color"), function(element) {
        element.style.transition = "1s";
        element.style.backgroundColor = colorHex + "20";
    });
    
}

