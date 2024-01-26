const express = require('express');
const router = express.Router()
const {getTareas} = require('../controllers/tareasControllers')
const {createTareas} = require('../controllers/tareasControllers')
const {updateTareas} = require('../controllers/tareasControllers')
const {deleteTareas} = require('../controllers/tareasControllers')

router.get('/', getTareas)
    

router.post('/', createTareas)

router.put('/:id', updateTareas)

router.delete('/:id', deleteTareas)

module.exports = router;