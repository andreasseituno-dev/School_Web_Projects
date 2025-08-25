//Foi alterado o HTML para a realização da atividade

var minhaLista = document.getElementsByTagName("li")[0];

//Criando os 6 caracteres (que vão de 0 a 15)
var caracter1 = (15 * Math.random()).toFixed();
var caracter2 = (15 * Math.random()).toFixed();
var caracter3 = (15 * Math.random()).toFixed();
var caracter4 = (15 * Math.random()).toFixed();
var caracter5 = (15 * Math.random()).toFixed();
var caracter6 = (15 * Math.random()).toFixed();

//Trocando os numeros por letras
//caracter 1
if (caracter1 == 10) {
  caracter1 = "a";
}
if (caracter1 == 11) {
  caracter1 = "b";
}
if (caracter1 == 12) {
  caracter1 = "c";
}
if (caracter1 == 13) {
  caracter1 = "d";
}
if (caracter1 == 14) {
  caracter1 = "e";
}
if (caracter1 == 15) {
  caracter1 = "f";
}

//caracter 2
if (caracter2 == 10) {
  caracter2 = "a";
}
if (caracter2 == 11) {
  caracter2 = "b";
}
if (caracter2 == 12) {
  caracter2 = "c";
}
if (caracter2 == 13) {
  caracter2 = "d";
}
if (caracter2 == 14) {
  caracter2 = "e";
}
if (caracter2 == 15) {
  caracter2 = "f";
}

//caracter 3
if (caracter3 == 10) {
  caracter3 = "a";
}
if (caracter3 == 11) {
  caracter3 = "b";
}
if (caracter3 == 12) {
  caracter3 = "c";
}
if (caracter3 == 13) {
  caracter3 = "d";
}
if (caracter3 == 14) {
  caracter3 = "e";
}
if (caracter3 == 15) {
  caracter3 = "f";
}

//caracter 4
if (caracter4 == 10) {
  caracter4 = "a";
}
if (caracter4 == 11) {
  caracter4 = "b";
}
if (caracter4 == 12) {
  caracter4 = "c";
}
if (caracter4 == 13) {
  caracter4 = "d";
}
if (caracter4 == 14) {
  caracter4 = "e";
}
if (caracter4 == 15) {
  caracter4 = "f";
}

//caracter 5
if (caracter5 == 10) {
  caracter5 = "a";
}
if (caracter5 == 11) {
  caracter5 = "b";
}
if (caracter5 == 12) {
  caracter5 = "c";
}
if (caracter5 == 13) {
  caracter5 = "d";
}
if (caracter5 == 14) {
  caracter5 = "e";
}
if (caracter5 == 15) {
  caracter5 = "f";
}

//caracter 6
if (caracter6 == 10) {
  caracter6 = "a";
}
if (caracter6 == 11) {
  caracter6 = "b";
}
if (caracter6 == 12) {
  caracter6 = "c";
}
if (caracter6 == 13) {
  caracter6 = "d";
}
if (caracter6 == 14) {
  caracter6 = "e";
}
if (caracter6 == 15) {
  caracter6 = "f";
}

//Alterando o Css
minhaLista.style.margin = "auto";
minhaLista.style.width = "100px";
minhaLista.style.height = "30px";
minhaLista.style.textAlign = "center";

minhaLista.style.backgroundImage = `linear-Gradient(#ffffff, #${caracter1}${caracter2}${caracter3}${caracter4}${caracter5}${caracter6})`;

minhaLista.innerHTML = `#${caracter1}${caracter2}${caracter3}${caracter4}${caracter5}${caracter6}`;
