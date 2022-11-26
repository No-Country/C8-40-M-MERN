import { error } from '../helpers/responses.js';
import { validateJWT } from '../helpers/jwt.js';

export default async function isAuth(req, res, next) {
  const token = req.headers.authorization;
  let userId;
  if (token) {
    const [, splittedToken] = token.split(' ');

    const {
      data: { id },
    } = validateJWT(splittedToken);

    userId = id;
  }
  if (userId) next();

  return error({
    res,
    message: 'unauthorized: id is required',
    status: 401,
  });
}
