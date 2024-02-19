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

    // verificar que ese usuario no exista a travez de su email 
    const userExiste = await User.findOne({email})
    if (userExiste) {
        res.status(400)
        throw new Error('Ese usuario ya existe ')
    }

    res.status(201).json({message:'Crear usuario '})
})
const loginUser = asyncHandler( async(req, res) =>{
    res.status(201).json({message:'login usuario '})
})
const datoUser = asyncHandler( async(req, res) =>{
    res.status(201).json({message:'datos del usuario '})
})

//HASH PASSWORD 
// const salt = await bcrypt.genSalt(10)
// Password = await bcrypt.hash(password,salt)
// 
//crear el usuario 
// const user = await User.create({
    // name, 
    // email, 
    // password: hashedPassword 
// })

// if (user) {
    // res.status(201).json({
        // _id: user.id,
        // name: user.name,
        // email: user.email
    // })
// } else {
    // res.status(400)
    // throw new Error('No se pudieron guardar los datos')
// }

module.exports={
crearUser,
loginUser,
datoUser
}
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


