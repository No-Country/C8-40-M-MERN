import { error } from '../helpers/responses.js';

const isAdmin = async (req, res, next) => {
  const { role } = req;

  if (role !== 'admin') {
  { return error({
    res,
      message: 'forbidden: admin access is required',
      status: 403,
  });
  }

  return next();
};

export { isAdmin };
