import { success, error, serverError } from '../helpers/responses.js';

import { findByQuery, findByIdAndUpdate } from '../services/user.service.js';

const getAllUsers = async (req, res) => {
  const { query } = req;

  let reponseMessage = 'all users';

  let data = {};

  try {
    const users = await findByQuery(query);
    data = users;
  } catch (err) {
    return serverError({
      res,
      message: err.message,
    });
  }

  if (Object.keys(query).length > 0) {
    reponseMessage = 'user/s filtered by:';

    const queriesArray = Object.entries(query);

    queriesArray.forEach((q) => {
      reponseMessage += ` ${q[0]} as ${q[1]} .`;
    });
  }

  if (data.count > 0) {
    return success({
      res,
      message: reponseMessage,
      data,
    });
  }

  return error({
    res,
    message: 'users not found',
  });
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { userName, password, role, isActive, avatar } = req.body;

  try {
    const updatedUser = await findByIdAndUpdate(userId, userName, password, role, isActive, avatar);

    if (updatedUser) {
      success({
        res,
        message: 'user updated',
        status: 201,
      });
    } else {
      error({
        res,
        message: 'user not found',
      });
    }
  } catch (err) {
    serverError({
      res,
      message: err.message,
    });
  }
};

export { getAllUsers, updateUser };
