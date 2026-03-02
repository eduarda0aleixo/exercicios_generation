const leia = require ('readline-sync');

let salarioLiquido;

console.log("=====Descubra o seu Salário Líquido=====")
salarioBruto = leia.questionFloat("Informe o seu Salário Bruto: ");
addNoturno = leia.questionFloat("Informe o seu Adicional Noturno: ");
addHoras = leia.questionFloat("Informe suas Horas Extras trabalhadas: ");
descontos = leia.questionFloat("Informe seus Descontos: ");

salarioLiquido = salarioBruto + addNoturno + (addHoras * 5) - descontos;

console.log(`De acordo com a fórmula: 
    Salário Bruto + Adicional Noturno + (Horas Extras * 5) - Descontos
    O seu Salário Líquido é de R$${salarioLiquido}`)