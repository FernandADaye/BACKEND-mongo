const   jwt = require ('jsonwebtoken')
const bcrypt =require('bcryptjs')
const asyncHandler =    require ('express-async-handler')
const User= require('../models/usersModel')

const crearUser = asyncHandler(  async(req, res) =>{
    const {name, email, password } =  req.body
    if (!name || !email || !password ) {
        res.status(400)
        throw new Error('faltan datos')
    }
    res.status(201).json({message:'Crear usuario '})
})
const loginUser = asyncHandler( async(req, res) =>{
    res.status(201).json({message:'login usuario '})
})
const datoUser = asyncHandler( async(req, res) =>{
    res.status(201).json({message:'datos del usuario '})
})

module.exports={
crearUser,
loginUser,
datoUser
}