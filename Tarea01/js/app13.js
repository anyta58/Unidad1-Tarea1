let dolar = parseFloat(prompt('Ingrese la cantidad de dinero en dolar : '));

let lempiras = (dolar * 24.69).toFixed(2);

prompt(`$${dolar} equivale a L.${lempiras}`);