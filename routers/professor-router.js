var express = require("express");
const router = express.Router();

const professorController = require("../controllers/professor-controller");

router.get("/", professorController.listar_professor);

router.get("/cadastrarProfessor", professorController.cadastrar_professor_get);

router.post("/cadastrarProfessor", professorController.cadastrar_professor_post);

router.get("/deletarProfessor/:id", professorController.deletar_professor);

router.get("/editarProfessor/:id", professorController.editar_professor_get);

router.post("/editarProfessor", professorController.editar_professor_post);


module.exports = router;