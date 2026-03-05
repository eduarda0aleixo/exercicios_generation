import leia from 'readline-sync';

console.log("=====Arrays - Vetores e Matrizes=====");
/* Unidimensionais (Vetores)
- podem trabalhar com diferentes tipos de dados (string, int, etc.) 
- são conjuntos de dados */

let vetInt = [10, 15, 70, 40];
let vetString = ["banana", "morango", "uva", "melancia"];
let vetMisto = [50, "batata", 9, "daora"];

console.log("=====Vetor String=====");
for(let i = 0; i < 4; i++){
    console.log(`${i + 1}º elemento do vetor String: ${vetString[i]}`);
}

console.log("\n=====Vetor Numérico=====");
for(let i = 0; i < 4; i++){
    console.log(`${i+1}º elemento do vetor Inteiro: ${vetInt[i]}`);
}

console.log("\n=====Vetor Misto=====");
for(let i = 0; i < 4; i++){
    console.log(`${i+1}º elemento do vetor Misto: ${vetMisto[i]}`);
}