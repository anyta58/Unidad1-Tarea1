let num1 = parseFloat(prompt('Ingrese el primer numero: '));
let num2 = parseFloat(prompt('Ingrese el segundo numero: '));

let op = prompt('Ingrese la opcion que desee realizar. (+, -, *, /)');

let resultado;

switch(op){
    case '+':
        resultado = (num1 + num2).toFixed(2);
        break;

    case '-':
        resultado = (num1 - num2).toFixed(2);
        break;
      
    case '*':
        resultado = (num1 * num2).toFixed(2);
        break; 

     case '/':
        resultado = (num1 / num2).toFixed(2);
        break;   
      
    default:
        resultado = 'opcion no valida';    
}

prompt(`El resultado de la operacion que eligio es : ${resultado} `);