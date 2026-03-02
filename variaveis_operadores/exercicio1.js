const leia = require ('readline-sync')

let novoSalario;
salario = leia.questionInt("Digite o seu Salário: ");
abono = leia.questionInt("Digite o seu Abono: ");

novoSalario = salario + abono;
console.log(`\n O seu sálario atual é de R$${salario} 
    E seu abono é R$${abono} 
    Logo seu novo salário é R$${novoSalario}`);