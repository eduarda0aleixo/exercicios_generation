import leia from 'readline-sync';

let pares = 0;
let impares = 0;

let numeros = [];
for(let i = 0; i < 10; i++){
    numeros[i] = leia.questionInt(`Digite o ${i+1}º número: `);
}

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        pares++;
    } else {
        impares++;
    }
}

console.log(`\nTotal de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);