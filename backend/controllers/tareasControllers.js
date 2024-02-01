const asyncHandler = require( 'express-async-handler')

const getTareas = asyncHandler( async(req, res) =>{
    res.status(200).json({ mensaje: 'Get Tareas'})
})
const createTareas = asyncHandler( async(req, res) =>{
    if(!req.body.descripcion){
        res.status(400)
        throw new Error (' ingresa una descripcion ')
    }
    res.status (201).json({message: 'fue creada una tarea '})
})
const updateTareas = asyncHandler (async(req, res) =>{
    res.status(200).json({ mensaje: `Modificar la tarea con id ${req.params.id}`})
})
const deleteTareas =asyncHandler( async(req, res) =>{
    res.status(200).json({ mensaje: `id: ${req.params.id}`})
})

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}