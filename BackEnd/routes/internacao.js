const express = require('express')
const router = express.Router()

const Controller = require('../controller/internacaoController.js');
const internacaoController = new Controller()

//Creating all routes for 'internacao'
router.get('/', internacaoController.procuraTodosInternacao)
router.get('/:id', internacaoController.procuraInternacaoID)
router.post('/', internacaoController.registraInternacao)
router.put('/', internacaoController.mudaInternacao)
router.put('/status/:id', internacaoController.atualizaStatusInternacao)

module.exports = router