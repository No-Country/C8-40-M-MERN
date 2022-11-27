import express from 'express';

import cors from 'cors';

import config from './config.js';

import postRoutes from './routes/post.route.js';

import authRoutes from './routes/auth.route.js';

import usersRoutes from './routes/user.route.js';

import sideBarRoutes from './routes/sidebar.route.js';

import conexion from './database/db.js';

const app = express();

const port = config.development.port || 3001;

app.use(express.json());

app.use(cors());

app.use('/api/posts', postRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/users', usersRoutes);

app.use('/api/sidebar', sideBarRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`(ง ͠° ͟ل͜ ͡°)ง ¡Server UP on PORT: ${port}`);
});

conexion();
