var operadores = document.getElementsByClassName("operador");

var indexOperador;
var clique = false;
function operador(id) {
    indexOperador = id - 1;
    clique = true
}


function selectedOperador(id) {
    if (clique){
        if (id >= 11 || id <= 14) {
            operadores[indexOperador].innerText = '';
            operadores[indexOperador].innerHTML = `<img src="../../images/numbers/operadores/${id}.png" alt="">`;

        }

    }
}