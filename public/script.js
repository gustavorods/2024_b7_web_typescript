function resumo(usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, " voc\u00EA tem ").concat(usuario.idade, " anos \n suas caracteristicas s\u00E3o olhos ").concat(usuario.caracteristicas.olhos);
}
var pessoa = {
    nome: "Gustavo",
    idade: 18,
    caracteristicas: {
        olhos: "Marrom",
        cabelo: "Ondulado"
    }
};
resumo(pessoa);
