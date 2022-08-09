"use strict";
const txtPrimeiroNumero = document.getElementById("primeiroNumero");
const txtSegundoNumero = document.getElementById("segundoNumero");
const selectOperador = document.getElementById("operador");
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("txtResultado");
function calcular() {
    let resultado = 0;
    const primeiroNumero = parseFloat(txtPrimeiroNumero.value);
    const segundoNumero = parseFloat(txtSegundoNumero.value);
    const operador = selectOperador.options[selectOperador.selectedIndex].value;
    switch (operador) {
        case "+":
            resultado = primeiroNumero + segundoNumero;
            break;
        case "-":
            resultado = primeiroNumero - segundoNumero;
            break;
        case "*":
            resultado = primeiroNumero * segundoNumero;
            break;
        case "/":
            resultado = primeiroNumero / segundoNumero;
            break;
    }
    txtResultado.innerText = "O resultado é: " + resultado;
}
btnCalcular.addEventListener("click", calcular);
