var database = require("../database/config");

function Respostas(idQuiz) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
        QtdAcertosPorcent,
        QtdErrosPorcent,
                    from Quiz`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        idQuiz,
        QtdAcertosPorcent,
        QtdErrosPorcent
        from Quiz`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}