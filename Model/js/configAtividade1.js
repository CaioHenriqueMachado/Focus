var box1 = document.getElementsByClassName("box1");
var operadores = document.getElementsByClassName("operador");
var box3 = document.getElementsByClassName("box3");
var resultado = document.getElementsByClassName("resultado");


var atividade = {
    id: 1,
    descricao: "",
    questao: {
        1: { 1: "", 2: "", 3: "", 4: "" },
        2: { 1: "", 2: "", 3: "", 4: "" },
        3: { 1: "", 2: "", 3: "", 4: "" },
        4: { 1: "", 2: "", 3: "", 4: "" },
        5: { 1: "", 2: "", 3: "", 4: "" },
        6: { 1: "", 2: "", 3: "", 4: "" },
        7: { 1: "", 2: "", 3: "", 4: "" },
        8: { 1: "", 2: "", 3: "", 4: "" },
        9: { 1: "", 2: "", 3: "", 4: "" },
        10: { 1: "", 2: "", 3: "", 4: "" },
    }
}


var indexQuestion;
var indexBox;
var clique = false;
function inputBox(question, numberBox) {
    indexQuestion = question;
    indexBox = numberBox;
    clique = true
}


function selectedFigure(id) {
    if (clique) {
        if (indexBox == 1) {
            if (id < 10) {
                box1[indexQuestion - 1].innerText = '';
                limitNumberBox(indexQuestion, indexBox, id, 2);

                for (var index in atividade.questao[indexQuestion][indexBox]) {
                    var id = atividade.questao[indexQuestion][indexBox].substr(index, 1)
                    box1[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
                }
                // console.log(atividade.questao[indexQuestion]);
            }
        }

        if (indexBox == 2) {
            if (id > 10) {
                operadores[indexQuestion - 1].innerText = '';
                limitNumberBox(indexQuestion, indexBox, id, 2);

                operadores[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/operadores/${id}.png" alt="">`;

                // console.log(atividade.questao[indexQuestion]);
            }
        }

        if (indexBox == 3) {
            if (id < 10) {
                box3[indexQuestion - 1].innerText = '';
                limitNumberBox(indexQuestion, indexBox, id, 2);

                for (var index in atividade.questao[indexQuestion][indexBox]) {
                    var id = atividade.questao[indexQuestion][indexBox].substr(index, 1)
                    box3[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
                }
                // console.log(atividade.questao[indexQuestion]);
            }
        }

        if (indexBox == 4) {
            if (id < 10) {
                resultado[indexQuestion - 1].innerText = '';
                limitNumberBox(indexQuestion, indexBox, id, 3);

                for (var index in atividade.questao[indexQuestion][indexBox]) {
                    var id = atividade.questao[indexQuestion][indexBox].substr(index, 1)
                    resultado[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
                }
                // console.log(atividade.questao[indexQuestion]);
            }
        }
    }
}


function limitNumberBox(question, box, number, limit) {
    var quantidade = atividade.questao[question][box].length
    if (quantidade == 0 || quantidade == limit) {
        atividade.questao[question][box] = String(number);
    } else {
        atividade.questao[question][box] += String(number);
    }
}

function validationConfig() {
    var inputs = document.getElementsByTagName("input");
    var campoVazio = false;
    var indexVazio = 0;

    for (var i = 0; i <= 2; i++) {
        if (inputs[i].value.length == 0) {
            campoVazio = true;
            indexVazio = i;
            break;
        }
    }

    if (campoVazio) {
        alert(`O campo ${inputs[indexVazio].name} deve ser preenchido !`);
    } else {
        alert(`Você finalizou essa atividade!`);
        window.location.href = `https://www.uol.com.br`; 

    }

}

function validationQuestion(question) {
    var campoVazio = false;
    var indexVazio = 0;

    for (var i = 1; i <= 4; i++) {
        if (atividade.questao[question][i].length == 0) {
            campoVazio = true;
            indexVazio = i;
            break;
        }
    }

    if (campoVazio) {
        if (indexVazio == 2) {
            alert(`Um operador deve ser escolhido na questão ${question} !`);
        } else if (indexVazio == 4) {
            alert(`Um Resultado deve ser escolhido na questão ${question} !`);
        } else {
            alert(`Um Número deve ser escolhido na questão ${question} !`);
        }

    } else {
        if (question != 10) {
            window.location.href = `#Question${question + 1}`;
        }else {
            window.location.href = `#configuracoes`; 
            exibeAba(false);
        }
    }
}



var windowNumbers = document.getElementById("window");

function exibeAba(exibir) {
    if (exibir) {
        windowNumbers.style.transition = "1s";
        windowNumbers.style.display = "flex";
    }else {
        windowNumbers.style.transition = "1s";
        windowNumbers.style.display = "none";
    }
}





var theme = "classico";

var selectedTheme = 0;
function selectTheme(type, id) {
    var imgBackground = document.getElementsByTagName("body");
    var boxImages = document.getElementsByClassName("boxImages");
    var images = document.getElementsByClassName("imageTheme");

    boxImages[selectedTheme].classList.remove("selectedTipo");
    boxImages[id].classList.add("selectedTipo");
    selectedTheme = id;

    imgBackground[0].style.transition = "1s"
    imgBackground[0].style.background = `url(../../images/numbers/${type}/background.jpg)`;
    imgBackground[0].style.backgroundRepeat = "repeat-y";
    imgBackground[0].style.backgroundSize = "100% 100vh";

    for(var i = 0; i <= 9; i++){
        images[i].style.transition = "3s"
        images[i].src = `../../images/numbers/${type}/${i}.png`;
    }
    theme = type;
}

function backQuestion(id) {
    if (id == 1) {
        window.location = "#inicio";
    }else {
        window.location = `#Question${id - 1}`;
        exibeAba(true);
    }
}