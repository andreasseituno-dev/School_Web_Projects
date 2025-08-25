var paises = document.getElementsByTagName("td");
var caixaPaises = document.getElementById("paisMaior");

//Conseguindo todos os países, para depois alterar o Css deles:
var pais1 = paises[3];
var pais2 = paises[4];
var pais3 = paises[5];
var pais4 = paises[6];
var pais5 = paises[7];
var pais6 = paises[8];
var pais7 = paises[9];
var pais8 = paises[10];
var pais9 = paises[11];
var pais10 = paises[12];
var pais11 = paises[13];
var pais12 = paises[14];
var pais13 = paises[15];
var pais14 = paises[16];
var pais15 = paises[17];
var pais16 = paises[18];
var pais17 = paises[19];
var pais18 = paises[20];

//Contando quantidade de caracteres de cada país:
var letras1 = pais1.innerHTML.length;
var letras2 = pais2.innerHTML.length;
var letras3 = pais3.innerHTML.length;
var letras4 = pais4.innerHTML.length;
var letras5 = pais5.innerHTML.length;
var letras6 = pais6.innerHTML.length;

var letras7 = pais7.innerHTML.length;
var letras8 = pais8.innerHTML.length;
var letras9 = pais9.innerHTML.length;
var letras10 = pais10.innerHTML.length;
var letras11 = pais11.innerHTML.length;
var letras12 = pais12.innerHTML.length;

var letras13 = pais13.innerHTML.length;
var letras14 = pais14.innerHTML.length;
var letras15 = pais15.innerHTML.length;
var letras16 = pais16.innerHTML.length;
var letras17 = pais17.innerHTML.length;
var letras18 = pais18.innerHTML.length;

//Sorteando todos os países:
var todasLetrasPaises = [
  letras1,
  letras2,
  letras3,
  letras4,
  letras5,
  letras6,
  letras7,
  letras8,
  letras9,
  letras10,
  letras11,
  letras12,
  letras13,
  letras14,
  letras15,
  letras16,
  letras17,
  letras18,
];

var ordem = todasLetrasPaises.sort(function (a, b) {
  return a - b;
});

//Procurando o país de maior nome e alterando-os:
if (letras1 == ordem[17]) {
  paisMaior.innerHTML = pais1.innerText;
}
if (letras2 == ordem[17]) {
  paisMaior.innerHTML = pais2.innerText;
}
if (letras3 == ordem[17]) {
  paisMaior.innerHTML = pais3.innerText;
}
if (letras4 == ordem[17]) {
  paisMaior.innerHTML = pais4.innerText;
}
if (letras5 == ordem[17]) {
  paisMaior.innerHTML = pais5.innerText;
}
if (letras6 == ordem[17]) {
  paisMaior.innerHTML = pais6.innerText;
}
if (letras7 == ordem[17]) {
  paisMaior.innerHTML = pais7.innerText;
}
if (letras8 == ordem[17]) {
  paisMaior.innerHTML = pais8.innerText;
}
if (letras9 == ordem[17]) {
  paisMaior.innerHTML = pais9.innerText;
}
if (letras10 == ordem[17]) {
  paisMaior.innerHTML = pais10.innerText;
}
if (letras11 == ordem[17]) {
  paisMaior.innerHTML = pais11.innerText;
}
if (letras12 == ordem[17]) {
  paisMaior.innerHTML = pais12.innerText;
}
if (letras13 == ordem[17]) {
  paisMaior.innerHTML = pais13.innerText;
}
if (letras14 == ordem[17]) {
  paisMaior.innerHTML = pais14.innerText;
}
if (letras15 == ordem[17]) {
  paisMaior.innerHTML = pais15.innerText;
}
if (letras16 == ordem[17]) {
  paisMaior.innerHTML = pais16.innerText;
}
if (letras17 == ordem[17]) {
  paisMaior.innerHTML = pais17.innerText;
}
if (letras18 == ordem[17]) {
  paisMaior.innerHTML = pais18.innerText;
}

//Procurando o país de menor nome e alterando-o:
if (letras1 == ordem[0]) {
  pais1.style.color = "red";
  pais1.style.textDecoration = "line-through";
}
if (letras2 == ordem[0]) {
  pais2.style.color = "red";
  pais2.style.textDecoration = "line-through";
}
if (letras3 == ordem[0]) {
  pais3.style.color = "red";
  pais3.style.textDecoration = "line-through";
}
if (letras4 == ordem[0]) {
  pais4.style.color = "red";
  pais4.style.textDecoration = "line-through";
}
if (letras5 == ordem[0]) {
  pais5.style.color = "red";
  pais5.style.textDecoration = "line-through";
}
if (letras6 == ordem[0]) {
  pais6.style.color = "red";
  pais6.style.textDecoration = "line-through";
}
if (letras7 == ordem[0]) {
  pais7.style.color = "red";
  pais7.style.textDecoration = "line-through";
}
if (letras8 == ordem[0]) {
  pais8.style.color = "red";
  pais8.style.textDecoration = "line-through";
}
if (letras9 == ordem[0]) {
  pais9.style.color = "red";
  pais9.style.textDecoration = "line-through";
}
if (letras10 == ordem[0]) {
  pais10.style.color = "red";
  pais10.style.textDecoration = "line-through";
}
if (letras11 == ordem[0]) {
  pais11.style.color = "red";
  pais11.style.textDecoration = "line-through";
}
if (letras12 == ordem[0]) {
  pais12.style.color = "red";
  pais12.style.textDecoration = "line-through";
}
if (letras13 == ordem[0]) {
  pais13.style.color = "red";
  pais13.style.textDecoration = "line-through";
}
if (letras14 == ordem[0]) {
  pais14.style.color = "red";
  pais14.style.textDecoration = "line-through";
}
if (letras15 == ordem[0]) {
  pais15.style.color = "red";
  pais15.style.textDecoration = "line-through";
}
if (letras16 == ordem[0]) {
  pais16.style.color = "red";
  pais16.style.textDecoration = "line-through";
}
if (letras17 == ordem[0]) {
  pais17.style.color = "red";
  pais17.style.textDecoration = "line-through";
}
if (letras18 == ordem[0]) {
  pais18.style.color = "red";
  pais18.style.textDecoration = "line-through";
}
