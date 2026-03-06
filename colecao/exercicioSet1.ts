import readlinesync from "readline-sync";

const numeros = new Set<number>();
let contador = 1;

while(numeros.size < 10){
    let numero = readlinesync.questionInt(`Digite o ${contador}º número: `);
    
    while(numeros.has(numero) == true){
        console.log("\nEste número já existe!");
        numero = readlinesync.questionInt(`Digite outro número para a ${contador}º posição: `);
    }
        numeros.add(numero);
        contador++;
}

console.log("\nNúmeros dentro do Set:");
for(let numero of numeros){
    console.log(numero);
}