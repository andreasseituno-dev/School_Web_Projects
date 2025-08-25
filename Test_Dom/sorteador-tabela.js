var aleatorio1 = (Math.random() * 2000 - 1000).toFixed(2);
var aleatorio2 = (Math.random() * 2000 - 1000).toFixed(2);
var aleatorio3 = (Math.random() * 2000 - 1000).toFixed(2);

console.log(aleatorio1);
console.log(aleatorio2);
console.log(aleatorio3);

var aleatorios = [aleatorio1, aleatorio2, aleatorio3];
aleatorios.sort(function (a, b) {
  return a - b;
});

console.log(aleatorios);
