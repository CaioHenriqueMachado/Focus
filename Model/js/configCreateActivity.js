// OBJETO

var atividade = {
    id: 1,
    descricao: "",
    tema: "padrao",
    data_inicio: "",
    data_fim: "",
    qdt_questoes: 1,
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

//------------------------------------------------------------------
// CONFIGURAÇÕES
//------------------------------------------------------------------

function validationConfig() {
    var inputs = [document.getElementById("description")];
    inputs.push(document.getElementById("quantity_question"))
    inputs.push(document.getElementById("data_inicio"))
    inputs.push(document.getElementById("data_fim"))

    var campoVazio = false;
    var indexVazio = 0;

    for (var i = 0; i < 4; i++) {
        if (inputs[i].value.length == 0) {
            campoVazio = true;
            indexVazio = i;
            break;
        } else {
            if (i == 0) {
                atividade.descricao = inputs[i].value;
            } else if (i == 1) {
                atividade.qdt_questoes = inputs[i].value;
            } else if (i == 2) {
                atividade.data_inicio = inputs[i].value;
            } else {
                atividade.data_fim = inputs[i].value;
            }
        }
    }

    if (campoVazio) {
        alert(`O campo ${inputs[indexVazio].name} deve ser preenchido !`);
    } else {
        createQuestion(atividade.qdt_questoes);
        window.location.href = `#inicio`;
        exibeAba(true);
    }
}

//------------------------------------------------------------------
// TEMA
//------------------------------------------------------------------

var theme = "padrao";
var selectedTheme = 0;
function selectTheme(type, id) {
    atividade.tema = type;
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

    for (var i = 0; i <= 9; i++) {
        images[i].style.transition = "3s"
        images[i].src = `../../images/numbers/${type}/${i}.png`;
    }
    theme = type;
}

var windowNumbers = document.getElementById("window");

function exibeAba(exibir) {
    if (exibir) {
        windowNumbers.style.transition = "1s";
        windowNumbers.style.display = "flex";
    } else {
        windowNumbers.style.transition = "1s";
        windowNumbers.style.display = "none";
    }
}


//------------------------------------------------------------------
// QUESTÕES
//------------------------------------------------------------------

var input1 = document.getElementsByClassName("input-1");
var input2 = document.getElementsByClassName("input-2");
var input3 = document.getElementsByClassName("input-3");

var boxResult = document.getElementsByClassName("box-result");


function calcular(id) {

    if (input1[id].value.length == 0) {
        alert("Escolha o primeiro número!");
        return;
    }

    if (input2[id].value.length == 0) {
        alert("Escolha o operador!");
        return;
    }

    if (input3[id].value.length == 0) {
        alert("Escolha o segundo número!");
        return;
    }

    if (-999 > input1[id].value || -999 > input3[id].value || 999 < input1[id].value || 999 < input3[id].value) {
        alert("Apenas valores entre -999 até 999");
        return;
    }

    var boxResult = document.getElementsByClassName("ocult-box");
    var btnSave = document.getElementsByClassName("ocult-btn");
    boxResult[id].style.display = "flex";
    btnSave[id].style.display = "block";

    var result = [input1[id].value, input2[id].value, input3[id].value];

    boxResult[id].innerHTML = '';
    atividade.questao[id + 1][1] = result[0]
    for (var i = 0; i < result[0].length; i++) {
        if (result[0].substr(i, 1) == '-' && i == 0) {
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${12}.png" alt="">`;
        } else {
            boxResult[id].innerHTML += `<img src="../../images/numbers/${theme}/${result[0].substr(i, 1)}.png" alt="">`;
        }
    }

    atividade.questao[id + 1][2] = result[1]
    boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${result[1]}.png" alt="">`;

    atividade.questao[id + 1][3] = result[2]
    for (var i = 0; i < result[2].length; i++) {
        if (result[2].substr(i, 1) == '-' && i == 0) {
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${12}.png" alt="">`;
        } else {
            boxResult[id].innerHTML += `<img src="../../images/numbers/${theme}/${result[2].substr(i, 1)}.png" alt="">`;
        }
    }

    boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/igual.png" alt="">`;


    var calculo = '(' + result[0] + ')';

    if (result[1] == 11) {
        calculo += '+';

    } else if (result[1] == 12) {
        calculo += '-';

    } else if (result[1] == 13) {
        calculo += '*';

    } else {
        calculo += '/';
    }

    calculo += '(' + result[2] + ')';
    calculo = String(Math.round(eval(calculo) * 100) / 100);
    atividade.questao[id + 1][4] = calculo;


    for (var i = 0; i < calculo.length; i++) {
        if (calculo.substr(i, 1) == '-') {
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${12}.png" alt="">`;

        } else if (calculo.substr(i, 1) == '.') {
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${16}.png" alt="">`;

        } else {
            boxResult[id].innerHTML += `<img src="../../images/numbers/${theme}/${calculo.substr(i, 1)}.png" alt="">`;
        }
    }

    console.log(atividade.questao[id + 1])
}

function limpar(id) {
    var boxResult = document.getElementsByClassName("ocult-box");
    var btnSave = document.getElementsByClassName("ocult-btn");

    boxResult[id].style.display = "none";
    btnSave[id].style.display = "none";

    var input1 = document.getElementsByClassName("input-1");
    var input2 = document.getElementsByClassName("input-2");
    var input3 = document.getElementsByClassName("input-3");

    input1[id].value = '';

    input2[id].value = '';

    input3[id].value = '';
}

function createQuestion(qtd) {
    var questoes = document.getElementsByClassName("question");
    var buttons = document.getElementsByClassName("btn-save");
    for (i = 0; i < qtd; i++) {
        questoes[i].style.display = "flex";
        if (i + 1 == qtd) {
            buttons[i].innerHTML =
                `<a onclick="finish()">Fim</a>`
        }
    }
}

function finish() {
    document.getElementById("blackBlock").style.display = "flex";
    alert("Atividade finalizada !");
    window.location = "#nov";
}

var box1 = document.getElementsByClassName("box1");
var operadores = document.getElementsByClassName("operador");
var box3 = document.getElementsByClassName("box3");
var resultado = document.getElementsByClassName("resultado");

var indexQuestion;
var indexBox;
var clique = false;
function inputBox(question, numberBox) {
    indexQuestion = question;
    indexBox = numberBox;
    clique = true
}



