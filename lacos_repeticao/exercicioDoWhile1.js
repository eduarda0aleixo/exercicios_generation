import leia from 'readline-sync';

console.log("=====Soma de Números Positivos=====");
console.log("(digite 0 para parar)");

let numero;
let soma = 0;  

do {
    numero = leia.questionInt("Digite um número: ");
    
    if(numero > 0) {
        soma = soma + numero;  
    }
} while(numero !== 0);  

console.log(`\nSoma dos números positivos: ${soma}`);