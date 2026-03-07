import readlinesync = require("readline-sync");

const cores = new Array<string>(5);

for(let i = 0; i < cores.length; i++){
    cores[i] = readlinesync.question(`Digite a ${i+1}ª cor: `);
}
console.table(cores);
console.table(cores.sort());