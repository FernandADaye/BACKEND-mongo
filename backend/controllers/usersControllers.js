    const   jwt = require ('jsonwebtoken')
    const bcrypt =require('bcryptjs')
    const asyncHandler =    require ('express-async-handler')
    const User= require('../models/usersModel')



//debe tener todos los datos para crear un usuario 
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

    //crear HASH
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

//definir el usuario 
const user = await User.create({
    name,
    email,
    password: hashedPassword
})
if (user) {
    res.status(201).json({
        _id : user._id,
        name : user.name,
        email : user.email
    })    
}else{
    res.status(400)
    throw new Error ('no se creo Usuario 😐')
}
    //res.status(201).json({message:'Crear usuario '})
})



const loginUser = asyncHandler( async(req, res) =>{

    const { email, password} = req.body

    const user = await User.findOne({email})

if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
        _id: user.id,
        name: user.name,
        email:user.email,
        // token: generarToken(user.id)
    })
}else{
    res.status(400)
    throw new Erorr ('no se puedo hacer eso ')
}
    res.status(201).json({message:'login usuario '})
})



const datoUser = asyncHandler( async(req, res) =>{
    res.status(201).json({message:'datos del usuario '})
})

// const generarToken = (id_usuario)=>{
    // return jwt.sign({id_usuario}, process.env.JWT_SECRET,{
        // expireIn: '50d'
    // })
// }
// 
module.exports={
crearUser,
loginUser,
datoUser
}