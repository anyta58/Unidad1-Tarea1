let base = parseFloat(prompt('Ingrese la base del triangulo: '));
let altura = parseFloat(prompt('Ingrese la altura del triangulo: '));

let area = ((base * altura)/2).toFixed(2);
prompt(`El area del triangulo con base ${base} y altura ${altura} es: ${area} unidades cuadradas`)
