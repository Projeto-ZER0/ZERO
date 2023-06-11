var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/calcularResultado", function (req, res) {
    quizController.calcularResultado(req, res);
});

router.post("/mostrarRanking", function (req, res) {
    quizController.mostrarRanking(req, res);
});

module.exports = router;