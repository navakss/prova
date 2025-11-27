const express = require('express');
const validate = require('../middlewares/auth');
const router = express.Router();
const funcoesController = require('../controllers/funcoes.controller');

// ALUNOS
router.post('/alunos', funcoesController.CadastrarAluno);
router.get('/alunos', funcoesController.ListarAlunos);
router.put('/alunos/:id', funcoesController.AtualizarAluno);
router.delete('/alunos/:id', funcoesController.DeletarAluno);

// EQUIPAMENTOS
router.post('/equipamentos', funcoesController.CadastrarEquipamento);
router.get('/equipamentos', funcoesController.ListarEquipamentos);
router.put('/equipamentos/:id', funcoesController.AtualizarEquipamento);
router.delete('/equipamentos/:id', funcoesController.DeletarEquipamento);

// LOCAÇÕES
router.post('/locacoes', funcoesController.CadastrarLocacao);
router.get('/locacoes', funcoesController.ListarLocacoes);
router.put('/locacoes/:id', funcoesController.AtualizarLocacao);
router.delete('/locacoes/:id', funcoesController.DeletarLocacao);

module.exports = router;

