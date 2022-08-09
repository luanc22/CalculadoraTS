const txtPrimeiroNumero = document.getElementById("primeiroNumero") as HTMLInputElement;
const txtSegundoNumero = document.getElementById("segundoNumero") as HTMLInputElement;
const selectOperador = document.getElementById("operador") as HTMLSelectElement;

const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;
const txtResultado = document.getElementById("txtResultado") as HTMLHeadingElement;

function calcular() {
  let resultado: number = 0;

  const primeiroNumero = parseFloat(txtPrimeiroNumero.value);
  const segundoNumero = parseFloat(txtSegundoNumero.value);
  const operador = selectOperador.options[selectOperador.selectedIndex].value;

  switch (operador) {
    case "+": resultado = primeiroNumero + segundoNumero; break;
    case "-": resultado = primeiroNumero - segundoNumero; break;
    case "*": resultado = primeiroNumero * segundoNumero; break;
    case "/": resultado = primeiroNumero / segundoNumero; break;
  }

  txtResultado.innerText = "O resultado é: " + resultado;
}

btnCalcular.addEventListener("click", calcular);