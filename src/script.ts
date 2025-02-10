type MathFunction = (n1:number, n2:number) => number; // recebe dois parametros numericos e retorna um número

const somar: MathFunction = (n1,n2) => { // geralmente quando usamos type functions, usamos const
    return n1+n2;
}

const subtrair: MathFunction = (n1, n2) => {
    return n1-n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1*n2;
}

const dividir: MathFunction = (n1,n2) => {
    return n1/n2;
}
