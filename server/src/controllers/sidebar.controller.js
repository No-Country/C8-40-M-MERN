import { success, error, serverError } from '../helpers/responses.js';
import { findAll } from '../services/sibebar.service.js';

const getForSideBar = async (req, res) => {
  let data = {};
  try {
    data = await findAll();
  } catch (error) {
    return serverError({
      res,
      message: error.message,
    });
  }
  if (Object.keys(data).length > 0) {
    success({
      res,
      message: 'sidebar',
      data,
    });
  } else {
    error({
      res,
      message: 'data not found',
    });
  }
};
export { getForSideBar };
