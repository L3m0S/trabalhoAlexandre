const express = require('express')
const router = express.Router()

const Controller = require('../controller/guiaexameController.js');
const guiaexameController = new Controller()

//Rotas com crud para o banco guiaexame
router.get('/', guiaexameController.procuraTodosGuiaexame)
router.get('/:id', guiaexameController.procuraGuiaexameID)
router.post('/' , guiaexameController.registraGuiaexame)
router.put('/', guiaexameController.mudaGuiaexame)
router.put('/status/:id', guiaexameController.atualizaStatusGuiaexame)

module.exports = router