const mongoose = require('mongoose')
const conectdb= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo conectado: ${conn.connection.host}`.cyan.underline)
    }catch (error){
        console.log(error);
        process.exit(1)
}}

module.exports = conectdb