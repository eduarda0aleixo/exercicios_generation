import leia from 'readline-sync';

console.log("=====Contagem de Idades===== \n (digite um número negativo para parar a repetição")
let idade = 0;
let contador21 = 0;
let contador50 = 0;

while(idade >= 0){
    idade = leia.questionInt("Digite uma idade: ");
    if(idade < 21){
        contador21++        
    }else if(idade > 50){
        contador50++
    }    
}

console.log("\n========== RESULTADOS ==========");
console.log(`Pessoas com menos de 21 anos: ${contador21}`);
console.log(`Pessoas com mais de 50 anos: ${contador50}`);
console.log("=================================");