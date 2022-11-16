import jwt from 'jsonwebtoken';
import response from '../helpers/responses.js';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) response.error(req, res, 'Token is not valid!', 403);
      req.user = user;
      next();
    });
  } else {
    return response.error(req, res, 'You are not authenticated!', 401);
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      response.error(req, res, 'You are not alowed to do that!', 403);
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      response.error(req, res, 'You are not alowed to do that!', 403);
    }
  });
};

export default {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
};
