let num1 = parseFloat(prompt('Ingrese el primer numero: '));
let num2 = parseFloat(prompt('Ingrese el segundo numero: '));

let multiplicacion = (num1 * num2).toFixed(2);
prompt(`La multiplicacion de los dos numeros ${num1} y ${num2} es: ${multiplicacion}
presione enter para continuar...`)

let division = (num1 / num2).toFixed(2);
prompt(`La division de los dos numeros ${num1} y ${num2} es: ${division}`)