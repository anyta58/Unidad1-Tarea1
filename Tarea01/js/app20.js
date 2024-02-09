let km = parseFloat(prompt('Ingrese la cantidad de kilometros recorridos: '));
let ltr = parseFloat(prompt('Ingrese la cantidad de litros consumidos: '));

let consumokm = (ltr / km);

prompt(`El consumo de combustible por kilometro es de: ${consumokm.toFixed(2)} ltr/Km.`);