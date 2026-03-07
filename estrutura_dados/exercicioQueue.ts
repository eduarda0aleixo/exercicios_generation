import { Queue } from "./Queue";

const fila = new Queue<string>();
let continuar: boolean = false;
let opcao: number = 0

do{

    console.log(` =====Menu=====
        1 - Adicionar Cliente na Fila
        2 - Listar todos os Clientes
        3 - Retirar Clientes da Fila
        4 - Sair\n`);

}while(continuar)