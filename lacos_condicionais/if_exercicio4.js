import leia from 'readline-sync';

let primeiro, segundo, terceiro;

primeiro = leia.question("Primeira palavra (vertebrado/invertebrado): ");
segundo = leia.question("Segunda palavra: ");
terceiro = leia.question("Terceira palavra: ");



if(primeiro === "vertebrado" && segundo === "ave" && terceiro === "carnivoro"){
    console.log("Águia");
}
else if(primeiro  === "vertebrado" && segundo === "ave" && terceiro === "onivoro"){
    console.log("Pomba");
}
else if(primeiro  === "vertebrado" && segundo === "mamifero" && terceiro === "onivoro"){
    console.log("Homem");
}
else if(primeiro  === "vertebrado" && segundo === "mamifero" && terceiro === "herbivoro"){
    console.log("Vaca");
}

else if(primeiro  === "invertebrado" && segundo === "inseto" && terceiro === "hematofago"){
    console.log("Pulga");
}
else if(primeiro  === "invertebrado" && segundo === "inseto" && terceiro === "herbivoro"){
    console.log("Lagarta");
}
else if(primeiro  === "invertebrado" && segundo === "anelideo" && terceiro === "hematofago"){
    console.log("Sanguessuga");
}
else if(primeiro  === "invertebrado" && segundo === "anelideo" && terceiro === "onivoro"){
    console.log("Minhoca");
}
else {
    console.log("Combinação inválida! Não corresponde a nenhum animal.");
}