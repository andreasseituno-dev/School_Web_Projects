var valores = document.getElementsByTagName("td");

var aleatorio1 = (Math.random() * 2000 - 1000).toFixed(2);
var aleatorio2 = (Math.random() * 2000 - 1000).toFixed(2);
var aleatorio3 = (Math.random() * 2000 - 1000).toFixed(2);

var aleatorios = [aleatorio1, aleatorio2, aleatorio3];
aleatorios.sort(function (a, b) {
  return b - a;
});

var valor1 = (valores[0].innerHTML = aleatorios[0]);
var valor2 = (valores[1].innerHTML = aleatorios[1]);
var valor3 = (valores[2].innerHTML = aleatorios[2]);

if (aleatorios[0] >= 0) {
  valores[0].style.color = "#426dff";
} else {
  valores[0].style.color = "#ff0000";
}

if (aleatorios[1] >= 0) {
  valores[1].style.color = "#426dff";
} else {
  valores[1].style.color = "#ff0000";
}

if (aleatorios[2] >= 0) {
  valores[2].style.color = "#426dff";
} else {
  valores[2].style.color = "#ff0000";
}
