const jwt = require('jsonwebtoken')
const asyncHandler = require ('express-async-handler')
const User = require ('../models/usersModel')

const protect = asyncHandler(async(req, res, next ) =>{
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
            token = req.headers.authorization.split(' ') [1] 
            const decode= jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById (decode.id_usuario).select('-password')
            next()
        }catch (Error) {
            console.log(Error);
            res.status(401)
            throw new Error('no autorizado')
        }
        
    }
    if(!token){
        res.status(401)
        throw new Error ('no hay token, no entras ')
    }
})

module.exports={protect}