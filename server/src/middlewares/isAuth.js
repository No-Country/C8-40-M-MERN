/* eslint-disable object-curly-newline */
import { error } from '../helpers/responses.js';

import { validateJWT } from '../helpers/jwt.js';

export default async function isAuth(req, res, next) {
  const token = req.headers.authorization;

  let userId = '';
  let userRole = '';
  let userName = '';

  if (token) {
    const [, splittedToken] = token.split(' ');

    const {
      data: { id, userName: name, role },
    } = validateJWT(splittedToken);
    userRole = role;
    userName = name;
    userId = id;
  }

  if (token && userId) {
    req.userName = userName;
    req.role = userRole;
    req.id = userId;
    return next();
  }

  return error({ res, message: 'unauthorized: token is required', status: 401 });
}
