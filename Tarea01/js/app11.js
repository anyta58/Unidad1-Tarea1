let numero = parseInt(prompt('Ingrese un numero: '));

let esPrimo;

if (numero <= 1){
    esPrimo = 0;
}
else{
    esPrimo = 1;
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            esPrimo = 0;
            break;
        }   
    }
}
if(esPrimo){
    prompt(`${numero} es primo.`)
}
else{
    prompt(`${numero} no es primo.`)
}