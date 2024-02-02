const mongoose = require( 'mongoose ')
const tareaSchema= mongoose.Schema({
    descripcion :{
        type: String,
        required:[true, 'Pon una descripcion huevo 😌']
    },
},{
    timestamps:true
})

module.exports= mongoose.model('tTarea', tareaSchema)