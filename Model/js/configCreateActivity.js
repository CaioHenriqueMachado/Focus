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

    if ( -999 > input1[id].value || -999 > input3[id].value ||  999 < input1[id].value || 999 < input3[id].value ) {
        alert("Apenas valores entre -999 até 999");
        return;
    }

    var components = document.getElementsByClassName("ocult");
    components[0].style.display = "flex";
    components[1].style.display = "block";
    
    var result = [input1[id].value, input2[id].value, input3[id].value];
    
    boxResult[id].innerHTML = '';
    atividade.questao[id+1][1] = result[0]
    for (var i =0; i <result[0].length; i++){
        if (result[0].substr(i,1) == '-' && i == 0){
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${12}.png" alt="">`;
        } else {
            boxResult[id].innerHTML += `<img src="../../images/numbers/${theme}/${result[0].substr(i,1)}.png" alt="">`;
        }
    }

    atividade.questao[id+1][2] = result[1]
    boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${result[1]}.png" alt="">`;
    
    atividade.questao[id+1][3] = result[2]
    for (var i =0; i <result[2].length; i++){
        if (result[2].substr(i,1) == '-' && i == 0){
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${12}.png" alt="">`;
        } else {
            boxResult[id].innerHTML += `<img src="../../images/numbers/${theme}/${result[2].substr(i,1)}.png" alt="">`;
        }
    }

    boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/igual.png" alt="">`;


    var calculo = '(' + result[0] + ')';

    if(result[1] == 11){
        calculo += '+';

    } else if(result[1] == 12){
        calculo += '-';

    } else if(result[1] == 13){
        calculo += '*';

    }else {
        calculo += '/';
    }

    calculo += '(' + result[2] + ')';
    calculo = String(Math.round(eval(calculo) * 100) / 100);
    atividade.questao[id+1][4] = calculo;


    for (var i =0; i < calculo.length; i++){
        if (calculo.substr(i,1) == '-'){
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${12}.png" alt="">`;
        
        } else if (calculo.substr(i,1) == '.'){
            boxResult[id].innerHTML += `<img src="../../images/numbers/operadores/${16}.png" alt="">`;

        } else {
            boxResult[id].innerHTML += `<img src="../../images/numbers/${theme}/${calculo.substr(i,1)}.png" alt="">`;
        }
    }

    console.log(atividade.questao[1])
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

// function selectedFigure(id) {
//     if (clique) {
//         if (indexBox == 1) {
//             if (id < 10) {
//                 box1[indexQuestion - 1].innerText = '';
//                 box1[indexQuestion - 1].style.border = "none";
//                 limitNumberBox(indexQuestion, indexBox, id, 2);

//                 for (var index in atividade.questao[indexQuestion][indexBox]) {
//                     var id = atividade.questao[indexQuestion][indexBox].substr(index, 1)
//                     box1[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
//                 }
//             }
//         }

//         if (indexBox == 2) {
//             if (id > 10) {
//                 operadores[indexQuestion - 1].innerText = '';
//                 operadores[indexQuestion - 1].style.border = "none";
//                 limitNumberBox(indexQuestion, indexBox, id, 2);

//                 operadores[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/operadores/${id}.png" alt="">`;
//             }
//         }

//         if (indexBox == 3) {
//             if (id < 10) {
//                 box3[indexQuestion - 1].innerText = '';
//                 box3[indexQuestion - 1].style.border = "none";
//                 limitNumberBox(indexQuestion, indexBox, id, 2);

//                 for (var index in atividade.questao[indexQuestion][indexBox]) {
//                     var id = atividade.questao[indexQuestion][indexBox].substr(index, 1)
//                     box3[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
//                 }
//             }
//         }

//         if (indexBox == 4) {
//             if (id < 10) {
//                 resultado[indexQuestion - 1].innerText = '';
//                 resultado[indexQuestion - 1].style.border = "none";
//                 limitNumberBox(indexQuestion, indexBox, id, 3);

//                 for (var index in atividade.questao[indexQuestion][indexBox]) {
//                     var id = atividade.questao[indexQuestion][indexBox].substr(index, 1)
//                     resultado[indexQuestion - 1].innerHTML += `<img src="../../images/numbers/${theme}/${id}.png" alt="">`;
//                 }
//                 // console.log(atividade.questao[indexQuestion]);
//             }
//         }
//     }
// }


// function limitNumberBox(question, box, number, limit) {
//     var quantidade = atividade.questao[question][box].length
//     if (quantidade == 0 || quantidade == limit) {
//         atividade.questao[question][box] = String(number);
//     } else {
//         atividade.questao[question][box] += String(number);
//     }
// }



// function validationQuestion(question) {
//     var campoVazio = false;
//     var indexVazio = 0;

//     for (var i = 1; i <= 4; i++) {
//         if (atividade.questao[question][i].length == 0) {
//             campoVazio = true;
//             indexVazio = i;
//             break;
//         }
//     }

//     if (campoVazio) {
//         if (indexVazio == 2) {
//             alert(`Um operador deve ser escolhido na questão ${question} !`);
//         } else if (indexVazio == 4) {
//             alert(`Um Resultado deve ser escolhido na questão ${question} !`);
//         } else {
//             alert(`Um Número deve ser escolhido na questão ${question} !`);
//         }

//     } else {
//         if (question != 10) {
//             window.location.href = `#Question${question + 1}`;
//         } else {
//             window.location.href = `#configuracoes`;
//             exibeAba(false);
//         }
//     }
// }









function backQuestion(id) {
    if (id == 1) {
        window.location = "#inicio";
        limpaDados();
    } else {
        window.location = `#Question${id - 1}`;
        exibeAba(true);
    }
}

function gravarDados() {
    console.log("função para gravar dados")
}

// function limpaDados() {
//     var inputs = document.getElementsByTagName("input");

//     selectTheme("padrao", 0);
//     for (i = 0; i <= 2; i++) {
//         inputs[i].value = '';
//         atividade.descricao = '';
//         atividade.data_inicio = '';
//         atividade.data_fim = '';
//     }

//     for (var i = 0; i <= 9; i++) {
//         box1[i].innerHTML = '';
//         box1[i].innerText = 'Clique aqui e escolha um número';
//         box1[i].style.border = "1px dashed whitesmoke";
//         box3[i].innerHTML = '';
//         box3[i].innerText = 'Clique aqui e escolha um número';
//         box3[i].style.border = "1px dashed whitesmoke";
//         operadores[i].innerHTML = '';
//         operadores[i].innerText = 'Clique aqui e escolha um operador';
//         operadores[i].style.border = "1px dashed whitesmoke";
//         resultado[i].innerHTML = '';
//         resultado[i].innerText = 'Clique aqui e escolha o Resultado';
//         resultado[i].style.border = "1px dashed whitesmoke";
//         atividade.questao[i + 1][1] = '';
//         atividade.questao[i + 1][2] = '';
//         atividade.questao[i + 1][3] = '';
//         atividade.questao[i + 1][4] = '';
//     }

