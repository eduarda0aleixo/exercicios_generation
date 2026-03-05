import leia from 'readline-sync';

let num1, num2;

num1 = leia.questionInt("Informe o primeiro número: ");
num2 = leia.questionInt("Informe o segundo número: ");

if(num1 > num2){
    console.log("Intervalo inválido")
}else{
    console.log("\nIntervalo Válido.\n");
    console.log(`No intervalo entre ${num1} e ${num2}: `);

    for(let i = num1; i <= num2; i++){
        if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}