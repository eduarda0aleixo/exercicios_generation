import leia from 'readline-sync';

console.log("===== Média dos Múltiplos de 3 =====");
console.log("(digite 0 para parar)");

let soma = 0;
let quantidade = 0;
let numero;

do {
    numero = leia.questionInt("Digite um número: ");
    
    if (numero !== 0 && numero % 3 === 0) {
        soma += numero;
        quantidade++;
    }
    
} while (numero !== 0);  


let media = quantidade > 0 ? (soma / quantidade).toFixed(2) : 0;

console.log(`\nMédia dos números múltiplos de 3: ${media}`);