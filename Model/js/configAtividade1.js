var box1 = document.getElementsByClassName("box1");
var operadores = document.getElementsByClassName("operador");
var box3 = document.getElementsByClassName("box3");
var resultado = document.getElementsByClassName("resultado");


var indexNumber;
var indexBox;
var clique = false;
function inputBox(id, numberBox) {
    indexNumber = id - 1;
    indexBox = numberBox;
    clique = true
}


function selectedFigure(id) {
    if (clique){
        if (indexBox == 1) {
            if (id < 10){
                box1[indexNumber].innerText = '';
                console.log(limitNumberBox(box1, indexNumber, 2));
                if ( limitNumberBox(box1, indexNumber, 2)){
                    box1[indexNumber].innerHTML = `<img src="../../images/numbers/monsters/${id}.png" alt="">`;
                    console.log('teste1');
                }else {
                    box1[indexNumber].innerHTML += `<img src="../../images/numbers/monsters/${id}.png" alt="">`;
                    console.log('teste2');
                }
            }
        }

        if (indexBox == 2) {
            if (id > 10) {
                operadores[indexNumber].innerText = '';
                operadores[indexNumber].innerHTML = `<img src="../../images/numbers/operadores/${id}.png" alt="">`;
            }
        }

        if (indexBox == 3) {
            if (id < 10){
                box3[indexNumber].innerText = '';
                var valid = limitNumberBox(box3, indexNumber, 2)
                if ( valid){
                    box3[indexNumber].innerHTML = `<img src="../../images/numbers/monsters/${id}.png" alt="">`;
                }else {
                    box3[indexNumber].innerHTML += `<img src="../../images/numbers/monsters/${id}.png" alt="">`;
                }
            }
        }

        if (indexBox == 4) {
            if (id < 10) {
                resultado[indexNumber].innerText = '';
                resultado[indexNumber].innerHTML = `<img src="../../images/numbers/monsters/${id}.png" alt="">`;
            }
        }
    }
}



var boxa = document.getElementById("boxa");


function limitNumberBox(box,indexNumber, limit) {
    console.log(box[indexNumber]);
    var qtd = box[indexNumber].querySelectorAll('img').length;
    console.log(qtd)
    if ( qtd == 0 || qtd == limit){
        return true;
    }
    else {
        return false;
    }
}