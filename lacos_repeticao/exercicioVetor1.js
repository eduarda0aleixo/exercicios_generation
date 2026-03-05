import leia from 'readline-sync'

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let encontrado = false;

console.log("===== Busca em Vetor =====");
let numeroBusca = leia.questionInt("Digite o número que deseja encontrar: ");

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] === numeroBusca) {
        console.log(`O número ${numeroBusca} está na posição ${i}`);
        encontrado = true;
        break
    }
}

if (!encontrado) {
    console.log("Não foi encontrado!");
}