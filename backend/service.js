
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const conectdb= require('../backend/config/db')
const colors = require('colors')
const {errorHandler} = require ('../backend/meddleware/ErrorMeddlerWare')

conectdb();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)
app.use('/tarea', require('./routes/tareasRoutes'))
app.use('/tarea/users', require('./routes/tareasRoutes'))

app.listen(port, ()=>console.log(`jalo en ${port}`))

