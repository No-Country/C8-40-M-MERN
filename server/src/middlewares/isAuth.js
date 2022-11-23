import { error } from '../helpers/responses.js';
import { validateJWT } from '../helpers/jwt.js';

const isAuth = async (req, res, next) => {
  let token = req.headers?.authorization;

  token = token.split(' ')[1];

  const {
    data: { id, userName, role }
  } = validateJWT(token);

  if (!id) return error({ res, message: 'unauthorized: id is required', status: 401 });
  req.id = id;
  req.userName = userName;
  req.role = role;

  return next();
};

export { isAuth };
