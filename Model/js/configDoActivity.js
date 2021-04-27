var imagesQuestion = document.getElementsByClassName("mini-box-images");
var resultado = document.getElementsByClassName("mini-box-resultado");
var box = document.getElementsByClassName("box"); 


var atividade = {
    id: 1,
    descricao: "Super Atividade do caio",
    tema: "monsters",
    data_inicio: "",
    data_fim: "",
    questao: {
        1: { 1: "1", 2: "11", 3: "1", 4: "2" },
        2: { 1: "20", 2: "12", 3: "8", 4: "12" },
        3: { 1: "999", 2: "13", 3: "1", 4: "999" },
        4: { 1: "9", 2: "14", 3: "3", 4: "3" },
        5: { 1: "5", 2: "11", 3: "5", 4: "10" },
        6: { 1: "10", 2: "14", 3: "2", 4: "5" },
        7: { 1: "70", 2: "12", 3: "30", 4: "40" },
        8: { 1: "8", 2: "13", 3: "0", 4: "0" },
        9: { 1: "30", 2: "11", 3: "1", 4: "31" },
        10: { 1: "2", 2: "11", 3: "0", 4: "2" },
    }
}

var respostas = {
    id: 1,
    atividade: "atlfsd",
    aluno: "caio",
    ra: 2131148,
    respostas: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: ""
    }
}


var theme = atividade.tema;
var imgBackground = document.getElementsByTagName("body");
var images = document.getElementsByClassName("imageTheme");

imgBackground[0].style.background = `url(../../images/numbers/${theme}/background.jpg)`;
imgBackground[0].style.backgroundRepeat = "repeat-y";
imgBackground[0].style.backgroundSize = "100% 100vh";

for (var i = 0; i <= 9; i++) {
    images[i].src = `../../images/numbers/${theme}/${i}.png`;
}

for (var i = 0; i <= 9; i++) {
    // REFERENTE A BOX 1
    var qtd = atividade.questao[i + 1][1].length;
    for (var j = 0; j < qtd; j++) {
        var id = atividade.questao[i + 1][1].substr(j, 1)
        imagesQuestion[i].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
    }

    // REFERENTE A OPERADORES
    var id = atividade.questao[i + 1][2]
    imagesQuestion[i].innerHTML += `<img src="../../images/numbers/operadores/${id}.png" alt="">`;


    // REFERENTE A BOX 3

    var qtd = atividade.questao[i + 1][3].length;
    for (var j = 0; j < qtd; j++) {
        var id = atividade.questao[i + 1][3].substr(j, 1)
        imagesQuestion[i].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
    }

    // REFERENTE A SINAL DE IGUAL
    imagesQuestion[i].innerHTML += `<img src="../../images/numbers/operadores/igual.png" alt="">`;

}

var indexQuestion;
var clique = false;
function inputBox(question) {
    indexQuestion = question;
    clique = true
}

function selectedFigure(id) {
    resultado[indexQuestion - 1].innerText = '';
    resultado[indexQuestion - 1].style.border = "none";
    limitNumberBox(indexQuestion, id, 3);

    for (var index in respostas.respostas[indexQuestion]) {
        var id = respostas.respostas[indexQuestion].substr(index, 1)
        resultado[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
    }
}

function limitNumberBox(question, number, limit) {
    var quantidade = respostas.respostas[question].length;
    if (quantidade == 0 || quantidade == limit) {
        respostas.respostas[question] = String(number);
    } else {
        respostas.respostas[question] += String(number);
    }
}


function validationQuestion(question) {
    var campoVazio = false;
    var indexVazio = 0;


    if (respostas.respostas[question].length == 0) {
        campoVazio = true;
    }


    if (campoVazio) {
        alert(`Um Resultado deve ser escolhido na questão ${question} !`);

    } else {
        if (question != 10) {
            window.location.href = `#Question${question + 1}`;
        } else {
            window.location.href = `#configuracoes`;
            exibeAba(false);
        }
    }
}

function backQuestion(id) {
    if (id == 1) {
        window.location = "#inicio";
    } else {
        window.location = `#Question${id - 1}`;
        exibeAba(true);
    }
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

function validationConfig() {
    if (confirm(`Você irá concluir atividade!`)){
        var notaFinal = compararDados();
        gravarDados();
        alert(`Sua nota foi: ${notaFinal},00!`);
        window.location.href = `#inicio`;
    }
}

function compararDados() {
    var nota = 0;
    for(var i = 1; i <= 10; i++) {
        var gabarito = atividade.questao[i][4];
        var resposta = respostas.respostas[i];
        if (gabarito == resposta){
            box[i - 1].style.border = "2px solid rgb(0, 250, 12)";
            nota += 1;
        }else {
            box[i - 1].style.border = "2px solid red";
        }
    }
    return nota;
}

function gravarDados() {
    console.log(respostas);
    console.log("função para gravar dados");
}


function limpaDados(){
    for (var i = 0; i <= 9; i++) {
        resultado[i].innerHTML = '';
        resultado[i].style.border = "1px dashed whitesmoke";
        resultado[i].innerText = 'Clique aqui e escolha o Resultado';
        respostas.respostas[i] = '';
    }
}

