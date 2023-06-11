var database = require("../database/config")

function calcularResultado(idQuiz, Acertos, Erros) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function calcularResultado():", idQuiz, Acertos, Erros);
    var instrucao = `
        INSERT INTO Quiz (idQuiz, Acertos, Erros) VALUES ( null , '${Acertos}', '${Erros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarRanking(Acertos) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select COUNT(${Acertos}) AS quantidade, ${Acertos} AS acertos from Quiz GROUP BY ${Acertos};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        select COUNT(QtdAcertosPorcent) AS quantidade, QtdAcertosPorcent AS acertos from Quiz GROUP BY QtdAcertosPorcent;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    calcularResultado,
    mostrarRanking
};