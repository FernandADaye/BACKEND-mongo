const mongoose = require( 'mongoose')
const userSchema= mongoose.Schema({
    name:{
        type: String, 
        required:[true, "Ingresa un nombre "]
    },
    email:{
        type: String, 
        required:[true, "Ingresa un Imail "],
        unique: true
    },
    password:{
        type: String, 
        required:[true, "Ingresa una contraseña  "]
    },
    esAdmin:{
        type: Boolean, 
        default: false,
    }
},{
    timestamps:true 
})

module.exports = mongoose.model('User', userSchema)
