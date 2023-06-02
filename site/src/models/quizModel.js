var database = require("../database/config")

function calcularResultado(QtdAcertosPorcent, QtdErrosPorcent) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function calcularResultado():", QtdAcertosPorcent, QtdErrosPorcent);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Quiz (QtdAcertosPorcent,QtdErrosPorcent) VALUES ('${QtdAcertosPorcent}', '${QtdErrosPorcent}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    calcularResultado
};