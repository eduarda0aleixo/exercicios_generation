

export function somar(num1: number, num2: number): number{
    return num1 + num2;
}

export function subtrair(num1: number, num2: number): number{
    return num1 - num2;
}

export function multiplicar(num1: number, num2: number): number{
    return num1 * num2;
}

export function dividir(num1: number, num2: number): number | null{
        let resul = num1 / num2;
    return(resul != Infinity ? resul : null);
}

export function turma14(): void{
    console.log("Calculadora desenvolvida pela Turma 14")
}