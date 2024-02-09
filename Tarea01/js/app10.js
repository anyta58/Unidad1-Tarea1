let radio = parseFloat(prompt('Ingrese el radio del circulo : '));

let area = (Math.PI * Math.pow (radio, 2)).toFixed(2);

prompt(`El area del circulo es: ${area} unidades cuadradas`)