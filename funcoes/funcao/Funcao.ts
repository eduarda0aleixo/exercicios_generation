let resultado: number = 0;

console.log(somar(8,5)); // imprimindo no console e retorno da função, que estamos passando 2 argumentos

resultado = somar(8,5); // atribuindo o retorno da função a uma variavel

let juros = resultado * 0.1;
console.log(juros);

// função dividindo 2 numeros
console.log("\n função dividindo 2 numeros")
dividir(10,2);

let resultado2 = dividir(10,2);
console.log(resultado2);

// funções
function somar(numero1: number, numero2: number) : number{ // função que soma 2 numeros e retorna o resultado
    return numero1 + numero2;
    // return = retorna para ser utilizado em qualquer outra variável
}

function dividir(numero1: number, numero2: number) : void{
    console.log(numero1 / numero2);
    // sem o return = precisa ser resolvido dentro da função, não utilizada em outras variáveis
}

