import express from 'express';
import routes from './routes/index.js'
const app = express()
import cors from 'cors';

//Invocamos a la conexión para la DB
import conexion from './database/db.js';

app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(3001, () => {
    console.log('¡Server UP!')
})

conexion()