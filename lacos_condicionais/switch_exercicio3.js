import leia from 'readline-sync';

let num1, num2, codigo;

console.log("1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão");
num1 = leia.questionFloat("Digite o 1º número: ");
codigo = leia.questionInt("Digite o código da operação: ");
num2 = leia.questionFloat("Digite o 2º número: ");


switch(codigo){
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3:
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        break;
    case 4:
        if(num2 !== 0){
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("Erro: Divisão por zero!");
        }
        break;
        default:
            console.log("Operação Inválida!")
}