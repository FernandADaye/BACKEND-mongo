const express = require('express')
const router = express.Router()
const{crearUser,loginUser,datoUser}=require('../controllers/usersControllers')
// const { protect } = require('../middleware/authMiddleware')
router.post ('/crear', crearUser)
router.post ('/login', loginUser)
router.get ('/datos', datoUser)


module.exports= (router)