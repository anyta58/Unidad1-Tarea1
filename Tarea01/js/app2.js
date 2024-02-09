let num1 = parseFloat(prompt('Ingrese el primer numero: '));
let num2 = parseFloat(prompt('Ingrese el segundo numero: '));

let resta = (num1 - num2).toFixed(2);

prompt(`La resta de los dos numeros ${num1} y ${num2} es: ${resta}`)