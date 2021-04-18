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
function alterAvatar(numberAvatar, type) {
    avatar[lastAvatarSelected].classList.remove("selected");
    avatar[numberAvatar].classList.add("selected");
    lastAvatarSelected = numberAvatar;

    if (type == 'aluno'){
        myAvatar.src = `../images/aluno/avatar${numberAvatar}.png`;
    }else {
        myAvatar.src = `../images/professor/avatar${numberAvatar}.png`;
    }
    
}

// Salvar nome

var frase = document.getElementById("frase");

function saveName() {
    var name = document.getElementById("name");
    frase.innerText = `Olá, ${name.value}!`;
}



// Ativar Frame


function CreateActivity(open) {
    var divopenCreateActivity = document.getElementById("openCreateActivity");
    if (open){
        divopenCreateActivity.innerHTML = 
        `<div id="backgroundGray">
            <div class="container-iframe">
                <div class="border">
                    <h2>Focus</h2>
                    <div class="buttonExit" onclick="CreateActivity(false)">X</div>
                </div>
                <iframe id="frame" src="../Atividades/createActivity/index.html" frameborder="0"></iframe>
            </div>
        </div>`
    }else {
        if (confirm("Se fechar alterações feitas não sejam salvas.")){
            divopenCreateActivity.innerHTML = '';
        }
    }
}


function Activity(id, open) {
    var divActivity = document.getElementById("doActivity");
    if (open){
        divActivity.innerHTML = 
        `<div id="backgroundGray">
            <div class="container-iframe">
                <div class="border">
                    <h2>Focus</h2>
                    <div class="buttonExit" onclick="Activity(${id}, false)">X</div>
                </div>
                <iframe id="frame" src="../Atividades/doActivity/index.html" frameborder="0"></iframe>
            </div>
        </div>`
    }else {
        if (confirm("Se fechar alterações feitas não sejam salvas.")){
            divActivity.innerHTML = '';
        }
    }
}