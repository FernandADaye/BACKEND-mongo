const mongoose = require('mongoose')
const tareaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true ,
        ref: 'User'
    },
    description:{
        type: String,
        required:[true, 'Pon una descriptionhuevo 😌']
    },
},{
    timestamps:true
})

module.exports= mongoose.model('tTarea', tareaSchema)