
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const app = express()
const conectdb= require('../backend/config/db')
const colors = require('colors')
const {ErrorMeddlerWare} = require ('../backend/meddleware/ErrorMeddlerWare')
conectdb()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(ErrorMeddlerWare)
app.use('/tarea', require('./routes/tareasRoutes'))

app.listen(port, ()=>console.log(`jalo en ${port}`))

