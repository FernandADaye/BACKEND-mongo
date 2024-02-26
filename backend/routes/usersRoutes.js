const express = require('express')
const router = express.Router()
const{crearUser,loginUser,datoUser}=require('../controllers/usersControllers')
const { protect } = require('../meddleware/authMiddlerware')
router.post ('/crear', crearUser)
router.post ('/login', loginUser)
router.get ('/datos',protect, datoUser)


module.exports= (router)