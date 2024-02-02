const express = require('express')
const router = express.Router()
const{crearUser,loginUser,datoUser}=require('../controllers/usersControllers')
router.post ('/', crearUser)
router.post ('/login', loginUser)
router.get ('/datos', datoUser)


module.exports= router