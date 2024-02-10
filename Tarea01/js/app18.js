let litros1 = parseFloat(prompt('Ingrese la capacidad del primer tanque en litros: '));
let litros2= parseFloat(prompt('Ingrese la capacidad del segundo tanque en litros: '));

let litros = (litros1 + litros2);

//Litros a metros cubicos.
let metrosCubicos = (litros / 1000);
prompt(`La cantidad total ${litros} litros equivale a: ${metrosCubicos.toFixed(2)} metros cubicos`)

// Metros cúbicos a pies cúbicos
let piesCubicos = metrosCubicos * 35.3147;
prompt(`La cantidad total ${litros} litros equivale a: ${piesCubicos.toFixed(2)} pies cubicos`)

// Pies cúbicos a yardas cúbicas
let yardasCubicas = piesCubicos / 27;
prompt(`La capacidad de los tanques expresada en yardas cubicas es de: ${yardasCubicas.toFixed(2)}`)

// Agua consumo domestico 
let domLitros = (litros * 0.75);
let domMetrosCubicos = (domLitros / 1000);
let domPiesCubicos = (domMetrosCubicos * 35.3147);

// Agua Riego
let riegoLitros = (litros * 0.25)
let riegoMetrosCubicos = (riegoLitros / 1000);
let riegoPiesCubicos = (riegoMetrosCubicos * 35.3147);

prompt(`Cantidad de agua para consumo doméstico en metros cúbicos: ${domMetrosCubicos.toFixed(2)}
\nCantidad de agua para consumo doméstico en pies cúbicos: ${domPiesCubicos.toFixed(2)}
\nCantidad de agua para riego en metros cúbicos: ${riegoMetrosCubicos.toFixed(2)}
\nCantidad de agua para riego en pies cúbicos: ${riegoPiesCubicos.toFixed(2)}`);