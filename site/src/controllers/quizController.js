var quizModel = require("../models/quizModel");

function calcularResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acerto = req.body.acertoServer;
    var erro = req.body.erroServer;
    

    // Faça as validações dos valores
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.calcularResultado(acerto, erro)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao calcular o Resultado! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

    function mostrarRanking(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var idQuiz = req.params.idQuiz;

    console.log(`Recuperando respostas em tempo real`);

    quiz.Model.mostrarRanking(idQuiz).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas respostas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
        }

module.exports = {
    calcularResultado,
    mostrarRanking
}