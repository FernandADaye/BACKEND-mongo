const asyncHandler = require('express-async-handler');
const tTarea = require ('../models/tareasModel')
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
const getTareas = asyncHandler(async (req, res) => {
  const tareas = await tTarea.find({user: req.user.id})
  res.status(200).json(tareas);
});
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
const createTareas = asyncHandler(async (req, res) => {
  console.log('Body recibido:', req.body);

  if (!req.body.descripcion) {
    console.log('Error: Falta descripción en el cuerpo de la solicitud.');
    res.status(400);
    throw new Error("Tienes que poner una descripción, no es una pregunta.");
  }

    const tarea = await tTarea.create({
        descripcion: req.body.descripcion,
        user: req.user.id
    })
    res.status(201).json(tarea)
})
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
const updateTareas = asyncHandler(async (req, res) => {
  const tareas = await tTarea.findById(req.params.id)
  if (tareas.user.toString()!== req.user.id) {
    res.status(400)
    throw new Error('no existe eso ')
  }else{
    const tareaUpdated = await tTarea.findByIdAndUpdate (req.params.id, req.body, {new: true})
    res.status(201).json(tareaUpdated)
  }
});
// ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
const deleteTareas = asyncHandler(async (req, res) => {
  const tarea = await tTarea.findById(req.params.id)
  if ( tarea.user.toString() !== req.user.id) {
    res.status (400)
    throw new Error('eso no existe ')
  } else{  await tTarea.deleteOne(tarea)
  res.status(200).json({id: res.params.id})
  }

  res.status(200).json({ });
});

module.exports = {
  getTareas,
  createTareas,
  updateTareas,
  deleteTareas,
};
