const mongoose = require('mongoose')
const tareaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true ,
        ref: 'User'
    },
    descripcion :{
        type: String,
        required:[true, 'Pon una descripcion huevo 😌']
    },
},{
    timestamps:true
})

module.exports= mongoose.model('tTarea', tareaSchema)