const express = require('express');
const router = express.Router();
const relatoriosController = require('../controllers/relatorios.controller');

router.get('/relatorios/categorias', relatoriosController.TotalLocacoesPorCategoria);
router.get('/relatorios/alunos', relatoriosController.TotalLocacoesPorAluno);
router.get('/relatorios/equipamentos', relatoriosController.TotalLocacoesPorEquipamento);

module.exports = router;