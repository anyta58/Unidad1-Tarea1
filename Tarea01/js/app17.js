let pies = parseFloat(prompt('Ingrese una cantidad en pies: '))
let metros = parseFloat(prompt('Ingrese una cantidad en metros: '))

// 1 pie = 12 pulgadas.
// 1 pulgada = 0.0254 metros
let piesPulgadas = (pies * 12).toFixed(2);
let metrosPulgadas = (metros / 0.0254).toFixed(2);
let totalPulgadas = (parseFloat(piesPulgadas) + parseFloat(metrosPulgadas));

// 1 yarda = 3 pies,
// 1 metro equivale aproximadamente a 1.09361 yardas.
let piesYardas = (pies / 3).toFixed(2);
let metrosYardas = (metros * 1.09361).toFixed(2);
let totalYardas = (parseFloat(piesYardas) + parseFloat(metrosYardas));

//1 metro equivale a aproximadamente 3.28084 pies.
let piesMetros = (pies * 0.3048).toFixed(2);
let totalMetros = (parseFloat(piesMetros) + parseFloat(metros));

// 1 milla equivale a 5280 pies.
// 1 milla = 1609.34 metros,
let piesMillas = (pies / 5280).toFixed(8);
let metrosMillas = (metros / 1609).toFixed(8);
let totalMillas = (parseFloat(piesMillas) + parseFloat(metrosMillas));

prompt(`${pies} pies equivale a ${piesYardas} yardas.
\n${metros} metros equivale a ${metrosYardas} yardas.
\npresione enter para continuar`)

prompt(`${pies} pies equivale a ${piesPulgadas} pulgadas.
\n${metros} metros equivale a ${metrosPulgadas} pulgadas.
\npresione enter para continuar`)

prompt(`${pies} pies equivale a ${piesMetros} metros.
\npresione enter para continuar`)

prompt(`${pies} pies equivale a ${piesMillas} Millas.
\n${metros} metros equivale a ${metrosMillas} Millas.
\npresione enter para continuar`)

prompt(`La suma total de ambas cantidades ingresadas en pulgadas es: ${totalPulgadas} 
\nLa suma total de ambas cantidades ingresadas en yardas es: ${totalYardas}
\nLa suma total de ambas cantidades ingresadas en metros es: ${totalMetros}
\nLa suma total de ambas cantidades ingresadas en millas es: ${totalMillas}`);