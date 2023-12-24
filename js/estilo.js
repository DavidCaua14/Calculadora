var valor = '';
var visorElement = document.getElementById('visor');
var calculoValido = true; 
var condDec = true; 

function botao(num) {
  if (!calculoValido) {
    visorElement.value = '';
    calculoValido = true;
  }

  valor += num;
  visorElement.value = valor;

  if (/[\+\-\*\/]{2,}/.test(valor)) {
    visorElement.classList.add('red-background');
  } else {
    visorElement.classList.remove('red-background');
  }

  if (num === '.') {
    condDec = true;
  }
}

function reseta() {
  visorElement.classList.remove('red-background');
  valor = '';
  visorElement.value = '';
  calculoValido = true;
  condDec = true;
}

function calcula() {
  if (valor.includes('/0')) {
    alert('Divisão por zero não é permitida!');
    reseta();
    calculoValido = false;
    return;
  }

  try {
    resultado = eval(valor);
    visorElement.value = resultado;
    valor = resultado.toString();
    calculoValido = true;
  } catch (error) {
    alert('Cálculo inválido!!!');
    reseta();
    calculoValido = false;
  }
}

function decimal() {
  let intxt = visorElement.value;

  if (intxt.charCodeAt(intxt.length - 1) >= 48 && intxt.charCodeAt(intxt.length - 1) <= 58) {
    if (condDec) {
      valor += '.';
      visorElement.value = valor;
      condDec = false;
    }
  }
}
