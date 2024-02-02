const crearUser = (req, res) =>{
    res.status(201).json({message:'Crear usuario '})
}
const loginUser = (req, res) =>{
    res.status(201).json({message:'login usuario '})
}
const datoUser = (req, res) =>{
    res.status(201).json({message:'datos del usuario '})
}

module.exports={
crearUser,
loginUser,
datoUser
}