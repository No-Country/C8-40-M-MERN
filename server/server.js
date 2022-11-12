const express = require('express')
const app = express()
const cors = require('cors');

//Invocamos a la conexión para la DB
const conexion = require('./src/database/db.js')


app.use(cors())

app.use('/', (req, res) => {
    res.send('Runn')
})

app.listen(3000, () => {
    console.log('¡Server UP!')
})

conexion()