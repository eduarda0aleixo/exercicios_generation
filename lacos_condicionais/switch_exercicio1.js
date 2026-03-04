import leia from 'readline-sync';

let codigo, quantidade, nomeProduto, preco, total;

console.log("1. Cachorro Quente R$10,00 \n2. X-Salada R$15,00 \n3. X-Bacon R$18,00 \n4. Bauru R$12,00 \n5. Refrigerante R$8,00 \n6. Suco de laranja R$13,00\n");
codigo = leia.questionInt("Digite o código do produto (1-6): ");
quantidade = leia.questionInt("Digite a quantidade: ");

switch(codigo) {
    case 1:
        nomeProduto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        nomeProduto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        nomeProduto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        nomeProduto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        nomeProduto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        nomeProduto = "Suco de laranja";
        preco = 13.00;
        break;
    default:
        console.log("Código inválido!");
        break; 
}

total = quantidade * preco;
console.log(`\nProduto: ${nomeProduto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
