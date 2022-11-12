import express from 'express';
const app = express()
import cors from 'cors';

//Invocamos a la conexión para la DB
import conexion from './src/database/db.js';


app.use(cors())

app.use('/', (req, res) => {
    res.send('Runn')
})

app.listen(3000, () => {
    console.log('¡Server UP!')
})

conexion()