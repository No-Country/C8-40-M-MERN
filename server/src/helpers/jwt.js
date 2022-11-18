import jwt from 'jsonwebtoken';
/* const jwt = require('jsonwebtoken'); */

const generateJWT = (id, userName, role) =>
  new Promise((resolve, reject) => {
    const payload = { id, userName, role };

    jwt.sign(
      payload,
      process.env.JWT_SEC,
      {
        expiresIn: '72h',
      },
      (err, token) => {
        if (err) {
          reject(Error('no se pudo generar el token'));
        }
        resolve(token);
      }
    );
  });

const validateJWT = (token) => {
  if (!token) {
    return {
      status: false,
      message: 'token is requeried',
    };
  }
  try {
    const { id, userName, role } = jwt.verify(token, process.env.JWT_SEC);
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
