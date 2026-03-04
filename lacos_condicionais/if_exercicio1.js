import leia from 'readline-sync';

let A, B, C, soma;

A = leia.questionFloat("Digite o número A: ");
B = leia.questionFloat("Digite o número B: ");
C = leia.questionFloat("Digite o número C: ");

soma = A + B;

if(soma > C){
    console.log(`${A} + ${B} = ${soma} > ${C} \nA Soma de A + B é MAIOR que C`);    
}else if(soma < C){
    console.log(`${A} + ${B} = ${soma} < ${C} \nA Soma de A + B é MENOR que C`);
}else{
    console.log(`${A} + ${B} = ${soma} = ${C} \nA Soma de A + B é IGUAL a C`);
}