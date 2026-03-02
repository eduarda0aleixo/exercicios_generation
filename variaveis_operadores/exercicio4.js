const leia = require ('readline-sync')

let resultado;

n1 = leia.questionFloat("Informe o 1º número: ");
n2 = leia.questionFloat("Informe o 2º número: ");
n3 = leia.questionFloat("Informe o 3º número: ");
n4 = leia.questionFloat("Informe o 4º número: ");

resultado = (n1 * n2) - (n3 * n4);

console.log(`O resultado da equação (${n1} * ${n2}) - (${n3} * ${n4}) é ${resultado.toFixed(2)}`);
