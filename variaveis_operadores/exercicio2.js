const leia = require ('readline-sync')

let media;

nome = leia.question("Qual é o seu nome? ")
console.log(`${nome}, por favor`)
nota1 = leia.questionFloat("Informe a sua 1ª nota: ");
nota2 = leia.questionFloat("Informe a sua 2ª nota: ");
nota3 = leia.questionFloat("Informe a sua 3ª nota: ");
nota4 = leia.questionFloat("Informe a sua 4ª nota: ");

media = (nota1 + nota2 + nota3 + nota4) / 4; 
console.log(`Sua média final é: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log(`Parabéns ${nome}! Você foi aprovado!`);
} else if (media >= 5) {
    console.log(`${nome}, você está de recuperação!`);
} else {
    console.log(`${nome}, infelizmente você foi reprovado!`);
}