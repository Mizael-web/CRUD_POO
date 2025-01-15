// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const aluno = new AlunoController();
aluno.listarAluno();

// aluno.adicionarAluno('Mizael',' mizael@email.com','849999999','856405','medicina');
aluno.adicionarAluno('Mizael',' mizael@email.com','849999999','54632','teste');
aluno.adicionarAluno('junior',' junior@email.com','849999999','721568','tecnico');
aluno.adicionarAluno('sandro',' sandrol@email.com','849999999','543161','matematica');
aluno.adicionarAluno('apareciol',' apariciol@email.com','849999999','254976','nutricionista');
aluno.listarAluno();