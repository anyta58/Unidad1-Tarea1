let num1 = parseInt(prompt('Ingrese el tiempo del PRIMER atleta en minutos: '))
let num2 = parseInt(prompt('Ingrese el tiempo del PRIMER atleta en segundos: '))
let num3 = parseInt(prompt('Ingrese el tiempo del SEGUNDO atleta en minutos: '))
let num4 = parseInt(prompt('Ingrese el tiempo del SEGUNDO atleta en segundos: '))

let segTotal = (num1 * 60 ) + (num3 * 60 );

let horas = Math.floor(segTotal / 3600);
let minRes = Math.floor((segTotal % 3600) / 60);
let segRes = segTotal % 60;

prompt(`El tiempo total utilizado por ambos atletas es: ${horas} horas, ${minRes} minutos y 
${segRes} segundos.`);