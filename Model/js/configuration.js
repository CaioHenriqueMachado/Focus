var abas = document.getElementsByClassName("btn-aba");

var LastAbaActive = 0;
function alterAba(id) {
    abas[LastAbaActive].style.display = "none";
    abas[id].style.display = "block";
    LastAbaActive = id;
}

// Selecionar Tema

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

// Selecionar Avatar

var avatar = document.getElementsByClassName("avatar");
var myAvatar = document.getElementById("myAvatar");

var lastAvatarSelected = 0;
function alterAvatar(numberAvatar) {
    avatar[lastAvatarSelected].classList.remove("selected");
    avatar[numberAvatar].classList.add("selected");
    lastAvatarSelected = numberAvatar;

    myAvatar.src = `../images/avatar${numberAvatar}.png`;
}

// Salvar nome

var frase = document.getElementById("frase");

function saveName() {
    var name = document.getElementById("name");
    frase.innerText = `Olá, ${name.value}!`;
}