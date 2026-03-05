import leia from 'readline-sync';

let vetInt = new Arrays[5];

for(let i = 0; i <= 5; i++){
    vetInt[i] = leia.questionInt(`Informe o ${i}º número: `);
}

console.log("\n Os números digitados foram: \n");
for(let i = 0; i < 5; i++){
    console.log(`${i + 1}º número: ${vetInt[i]}`);
}
