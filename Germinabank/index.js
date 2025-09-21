var banco = document.getElementById("banco");
var nome = document.getElementById("name");
var codigo = document.getElementById("number");
var saldo = document.getElementById("saldo");

var listaOriginal = document.getElementById("lista-original");
var listaPic = document.getElementById("lista-picpay");
var listaHistorico = document.getElementById("lista-historico");

function criarConta() {
  if (banco.value == "Original") {
    listaOriginal.innerHTML += `(${codigo.value}) Nome: ${nome.value} - Saldo: <strong id=${codigo.value}>${saldo.value}</strong> </br>`;
  } else {
    listaPic.innerHTML += `(${codigo.value}) Nome: ${nome.value}- Saldo: <strong id=${codigo.value}>${saldo.value}</strong> </br>`;
  }
}

function transferir() {
  var origem = document.getElementById("conta_origem");
  var destino = document.getElementById("conta_destino");
  var valor = document.getElementById("valor");
  var meio = document.getElementById("meio");

  listaHistorico.innerHTML += `Origem: ${origem.value} - Destino: ${destino.value} - Valor: ${valor.value} - Meio: ${meio.value} </br>`;

  var saldoOrigem = document.getElementById(origem.value);
  var saldoDestino = document.getElementById(destino.value);

  var saldoOrigemFinal = parseFloat(saldoOrigem.textContent) - parseFloat(valor.value)
  var saldoDestinoFinal = parseFloat(saldoDestino.textContent) + parseFloat(valor.value)

  saldoOrigem.innerText = saldoOrigemFinal
  saldoDestino.innerText = saldoDestinoFinal
}
