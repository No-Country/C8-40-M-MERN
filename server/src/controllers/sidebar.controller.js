import { success, error, serverError } from '../helpers/responses.js';

import findAll from '../services/sibebar.service.js';

export default async function getForSideBar(req, res) {
  let data = {};

  try {
    data = await findAll();
  } catch (err) {
    return serverError({
      res,
      message: err.message,
    });
  }

  if (Object.keys(data).length > 0) {
    return success({
      res,
      message: 'sidebar',
      data,
    });
  }

  return error({
    res,
    message: 'data not found',
  });
}
