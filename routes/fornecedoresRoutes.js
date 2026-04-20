const express = require('express');
const router = express.Router();
const fornecedoresController = require('../controllers/fornecedoresController');

router.get('/', fornecedoresController.listarFornecedores);
router.get('/:id', fornecedoresController.UmFornecedor);
router.post('/', fornecedoresController.adicionarFornecedor);
router.put('/:id', fornecedoresController.atualizarFornecedor);
router.delete('/:id', fornecedoresController.deletarFornecedor);

module.exports = router;