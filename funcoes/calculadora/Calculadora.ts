import readline = require("readline-sync");
import { dividir, somar, subtrair, multiplicar } from "./operacoes/calculos";

let resultadoDivisao: number | null;

let num1 = readline.questionFloat("Digite o 1º número: ");
let num2 = readline.questionFloat("Digite o 2º número: ");

console.log("\nO resultado da soma é: "+somar(num1, num2));

console.log("\nO resultado da subtração é: "+subtrair(num1, num2));

console.log("\nO resultado da multiplicação é: "+multiplicar(num1, num2));

resultadoDivisao = dividir(num1, num2);

if (resultadoDivisao !== null) {
    console.log(`\nO resultado da divisão é: ${resultadoDivisao}`);
} else {
    console.log("\nO resultado da divisão: Não é possível dividir por zero.");
}
 
