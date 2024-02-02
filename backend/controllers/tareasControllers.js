const asyncHandler = require('express-async-handler');
const tTarea = require ('../models/tareasModel')
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
const getTareas = asyncHandler(async (req, res) => {
  const tareas = await tTarea.find()
  res.status(200).json(tareas);
});
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
const createTareas = asyncHandler(async (req, res) => {
  if (!req.body.descripcion) {
    res.status(400);
    throw new Error("ingresa una descripcion ");
  }
  const tareas = await tTarea.create ({
    descripcion:req.body.descripcion
  })
  res.status(201).json(tareas)
});
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
const updateTareas = asyncHandler(async (req, res) => {
  const tareas = await tTarea.findById(req.params.id)
  if (!tareas) {
    res.status(400)
    throw new Error('no existe eso ')
    
  }
 const tareaUpdated = await tTarea.findByIdAndUpdate (req.params.id, req.body, {new: true})
 res.status(201).json(tareaUpdated)

});
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫

const deleteTareas = asyncHandler(async (req, res) => {
  res.status(200).json({ mensaje: `id: ${req.params.id}` });
});

module.exports = {
  getTareas,
  createTareas,
  updateTareas,
  deleteTareas,
};
