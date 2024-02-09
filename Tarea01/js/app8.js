 let cal1 = parseFloat(prompt("Introduce la primera calificacion: "));
 let cal2 = parseFloat(prompt("Introduce la segunda calificacion: "));
 let cal3 = parseFloat(prompt("Introduce la tercera calificacion: "));

 let promedio = ((cal1 + cal2 + cal3)/3).toFixed(2);
 
 prompt(`El promedio de las tres calificaciones es: ${cal1}, ${cal2} y ${cal3} es: ${promedio}`) 