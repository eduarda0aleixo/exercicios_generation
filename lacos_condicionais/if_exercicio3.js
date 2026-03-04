import leia from 'readline-sync';

console.log("=====Doar Sangue====")
let nome, idade, sangue;

nome = leia.question("Digite o Nome do doador: ");
idade = leia.questionInt("Digite a Idade do doador: ");
sangue = leia.keyInYN("É a primeira vez doando sangue? ");

if(idade >= 18 && idade <= 59){
    console.log(`${nome} está apto para doar sangue`);
}else if(idade >= 60 && idade <=69 && sangue == false){
console.log(`${nome} está apto para doar sangue`);
}else{
    console.log(`${nome} não está apto para doar sangue`)
}