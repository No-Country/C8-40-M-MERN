import jwt from 'jsonwebtoken';

import config from '../config.js';

const generateJWT = (id, userName, role) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve, reject) => {
    const payload = {
      id,
      userName,
      role,
    };

    jwt.sign(payload, config.development.jwtSec, { expiresIn: '72h' }, (err, token) => {
      if (err) {
        reject(Error('no se pudo generar el token'));
      }
      resolve(token);
    });
  });

const validateJWT = (token) => {
  if (!token) {
    return {
      status: false,
      message: 'token is requeried',
    };
  }
  try {
    const { id, userName, role } = jwt.verify(token, config.development.jwtSec);
    return {
      status: true,
      message: 'success',
      data: {
        id,
        userName,
        role,
      },
    };
  } catch (error) {
    return {
      status: false,
      message: 'not valid token',
    };
  }
};

export { generateJWT, validateJWT };
