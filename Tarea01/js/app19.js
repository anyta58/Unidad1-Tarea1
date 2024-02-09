let precio = parseFloat(prompt('Ingrese el precio del producto: '))
let valorIVA = parseFloat(prompt('Ingrese el valor del IVA: '))

let Iva = (precio * (valorIVA / 100));

let totalPagar = precio + Iva;

prompt(`El precio del producto es: ${precio}
\nEl valor del IVA es: ${Iva}
\nEl total a pagar es: ${totalPagar} `)