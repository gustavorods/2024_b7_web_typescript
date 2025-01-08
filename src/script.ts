function resumo(
    usuario: {
        nome: string, 
        idade: number, 
        caracteristicas: {
        olhos: string
    }} 

) 
{ 
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos 
    \n suas caracteristicas são olhos ${usuario.caracteristicas.olhos}`;
}

let pessoa = {
    nome: "Gustavo",
    idade: 18,
    caracteristicas: {
        olhos: "Marrom",
        cabelo: "Ondulado"
    }
};

resumo(pessoa);