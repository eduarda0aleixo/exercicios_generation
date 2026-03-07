import { Queue } from "./Queue";
import * as readline from 'readline-sync';

const fila = new Queue<string>();
let continuar: boolean = false;
let opcao: number = 0

do{

    console.log(` =====Menu=====
        1 - Adicionar Cliente na Fila
        2 - Listar todos os Clientes
        3 - Retirar Clientes da Fila
        0 - Sair\n`);
        opcao = readline.questionInt("Digite a opcao desejada: ");

    switch(opcao) {
        case 1:
            const nome = readline.question("Digite o nome do cliente: ");
            fila.enqueue(nome);
            console.log(`Cliente ${nome} adicionado à fila!`);
            break;
    }

}while(continuar)