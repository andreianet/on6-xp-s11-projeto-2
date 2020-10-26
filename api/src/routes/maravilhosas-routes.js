
const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller')



//get /maravilhosas
//@desc Get
router.get('/maravilhosas', controller.getMaravilhosas)


//post /maravilhosas
//@desc Post - Adcionar
router.post('/maravilhosas/add', controller.addMaravilhosa)

//get /maravilhosas/id
//@desc GEt
router.get('/maravilhosas/:id', controller.getMaravilhosaById)

//put /maravilhosas/id
//@desc Put - Atualizar
router.put('/maravilhosas/:id', controller.updateMaravilhosa)

//delete /maravilhosas/id
//@desc Delete - Deletar
router.delete('/maravilhosas/:id', controller.deleteMaravilhosa)

module.exports = router;