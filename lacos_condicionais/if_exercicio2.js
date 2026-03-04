import leia from 'readline-sync';

let num1;
num1 = leia.questionInt("Digite um número: ");

if(num1 % 2 === 0 && num1 > 0){
    console.log(`O número ${num1} é par e positivo`);
}else if(num1 % 2 === 0 && num1 < 0){
    console.log(`O número ${num1} é par e negativo`);
}else if(num1 % 2 !== 0 && num1 > 0){
    console.log(`O número ${num1} é ímpar e positivo`);
}else if(num1 % 2 !== 0 && num1 < 0){
    console.log(`O número ${num1} é ímpar e negativo`);
}else{
    console.log(`O número ${num1} é um número neutro`);
}