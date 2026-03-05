import leia from 'readline-sync';

let totalBack = 0;
let totalMFront = 0;
let totalHMobile40 = 0;
let totalNBFullStack30 = 0;
let totalPessoas = 0;
let somaIdades = 0;
let codigo = true;

console.log(`
    ===== PESQUISA COLABORADORES - DESENVOLVIMENTO =====

    Identidade de Gênero:
    1. Mulher Cis
    2. Homem Cis
    3. Não Binário
    4. Mulher Trans
    5. Homem Trans
    6. Outros
    7. Prefiro não Informar
    
    Pessoa Desenvolvedora (Número Inteiro):
    1. Backend
    2. Frontend
    3. Mobile
    4. FullStack
`);

while(codigo){
    let idade = leia.questionInt("\nIdade: ");
    let genero = leia.questionInt("Identidade de Gênero: ");
    let desenvolvedor = leia.questionInt("Pessoa Desenvolvedora: ");
    
    totalPessoas++
    somaIdades += idade;

    if(desenvolvedor === 1){
        totalBack++;
    }

    if((genero === 1 || genero === 4) && desenvolvedor === 2){
        totalMFront++;
    }

    if(((genero === 2 || genero === 5) && desenvolvedor === 3) && idade > 40){
        totalHMobile40++;
    }

    if(genero === 3 && desenvolvedor === 4 && idade < 30){
        totalNBFullStack30++;
    }

    codigo = leia.keyInYN("Deseja continuar? ")
}

// estrutura ternária if...else
let mediaIdades = totalPessoas > 0 ? (somaIdades / totalPessoas).toFixed(2) : 0;

console.log("\n========== RESULTADOS DA PESQUISA ==========");
console.log(`1. Número de pessoas desenvolvedoras Backend: ${totalBack}`);
console.log(`2. Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMFront}`);
console.log(`3. Número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHMobile40}`);
console.log(`4. Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalNBFullStack30}`);
console.log(`5. Número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`6. Média de idade das pessoas que responderam à pesquisa: ${mediaIdades} anos`);
console.log("==============================================");
