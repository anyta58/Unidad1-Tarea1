let num1 = prompt('Ingrese la base del triangulo: ');

let num2 = prompt('Ingrese la altura del triangulo: ');

let base = parseInt(num1);
let altura = parseInt(num2);

let area = (base * altura)/2;
prompt(`El area del triangulo con base ${base} y altura ${altura} es: ${area} unidades cuadradas`)
