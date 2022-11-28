import express from 'express';

import cors from 'cors';

import swaggerUi from 'swagger-ui-express';

import swaggerJsDoc from 'swagger-jsdoc';
import conexion from './database/db.js';
import config from './config.js';

import postRoutes from './routes/post.route.js';

import authRoutes from './routes/auth.route.js';

import usersRoutes from './routes/user.route.js';

import sideBarRoutes from './routes/sidebar.route.js';

// swagger specifications
const swaggerSpec = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'NC-C8-40',
      version: '1.0.0',
      description: 'NC project',
    },
    servers: [{ url: config.development.url }],
  },
  apis: ['./src/routes/*js'],
};

const options = { explorer: true };

// initialization
const app = express();

const port = config.development.port || 3001;

app.use(express.json());

app.use(cors());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec), options));

app.use('/api/posts', postRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/users', usersRoutes);

app.use('/api/sidebar', sideBarRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`(ง ͠° ͟ل͜ ͡°)ง ¡Server UP on PORT: ${port}`);
});

conexion();
