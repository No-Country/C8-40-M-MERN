import express from 'express';
import routes from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 3001;
import cors from 'cors';

//Invocamos a la conexión para la DB
import conexion from './database/db.js';

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`¡Server UP! PORT: ${PORT}`);
});

conexion();
