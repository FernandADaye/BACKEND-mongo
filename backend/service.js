
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const conectdb= require('../backend/config/db')
const colors = require('colors')
const errorHandler = require ('../backend/meddleware/ErrorMeddlerWare.js')
const cors = require('cors')

const app = express()
app.use(cors())
conectdb();


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/tarea', require('./routes/tareasRoutes'))
app.use('/users', require('./routes/usersRoutes'))

app.use(errorHandler);


app.listen(port, () => console.log(`por fin jalo en el puerto ${port}`))

