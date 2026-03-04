import leia from 'readline-sync';

let nome, codigo, salario, novoSalario, cargo;

console.log("1. Gerente \n2. Vendedor \n3. Supervisor \n4. Motorista \n5. Estoquista \n6. Técnico de TI\n");

nome = leia.question("Nome do colaborador: ");
codigo = leia.questionInt("Cargo: ");
salario = leia.questionFloat("Salário: R$ ");

switch(codigo){
    case 1:
        cargo = "Gerente";           
        novoSalario = salario + (0.10 * salario);
        break;                        
    case 2:
        cargo = "Vendedor";           
        novoSalario = salario + (0.07 * salario); 
        break;
    case 3:
        cargo = "Supervisor";         
        novoSalario = salario + (0.09 * salario); 
        break;
    case 4:
        cargo = "Motorista";          
        novoSalario = salario + (0.06 * salario);
        break;
    case 5:
        cargo = "Estoquista";        
        novoSalario = salario + (0.05 * salario); 
        break;
    case 6:
        cargo = "Técnico de TI";      
        novoSalario = salario + (0.08 * salario);
        break;
    default:                           
        console.log("Código de cargo inválido!");
        break;
}


if(cargo !== ""){
    console.log(`\nNome do colaborador: ${nome}`);
    console.log(`Cargo: ${cargo}`);       
    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
}