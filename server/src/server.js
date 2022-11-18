import express from 'express';
import postRoutes from './routes/post.route.js';
import authRoutes from './routes/auth.route.js';
import usersRoutes from './routes/user.route.js';

const app = express();
const PORT = process.env.PORT || 3001;
import cors from 'cors';

//Invocamos a la conexión para la DB
import conexion from './database/db.js';

app.use(express.json());
app.use(cors());

app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes )



app.listen(PORT, () => {
  console.log(`¡Server UP! PORT: ${PORT}`);
});

conexion();

