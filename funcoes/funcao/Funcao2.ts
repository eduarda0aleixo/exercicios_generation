tipoProduto(1);

function tipoProduto(tamanho: number | string) : void{
        if(typeof tamanho === "number"){
            console.log("\nO tamanho é um número");
        }else{
            console.log("\nO tamanho é uma string")
        }
    }