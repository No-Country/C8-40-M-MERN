import jwt from 'jsonwebtoken';
import { success, error, serverError } from '../helpers/responses.js';
import { validateJWT } from '../helpers/jwt.js';

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  const {
    data: { id, userName, role },
  } = validateJWT(token);

  if (!id) return error({ res, message: 'unauthorized: id is required', status: 401 });

  req.id = id;
  req.userName = userName;
  req.role = role;

  return next();
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) error({ res, message: 'token is not valid!', status: 403 });
      console.log('USER', user);
      req.user = user;
      return next();
    });
  } else {
    return error({ res, message: 'you are not authenticated!', status: 401 });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      error({ res, message: 'You are not alowed to do that!', status: 403 });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      error({ res, message: 'you are not alowed to do that!', status: 403 });
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, isAuth };
