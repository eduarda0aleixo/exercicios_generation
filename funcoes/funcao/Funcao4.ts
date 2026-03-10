

function somar(num1: number, num2: number, num3?: number /* num3? = número opcional */): number{
    // if sem chaves = funciona com uma linha só
    if(num3 != undefined)
        return num1 + num2 + num3; 

    return num1 + num2;

}