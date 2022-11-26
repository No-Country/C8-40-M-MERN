import { success, error, serverError } from '../helpers/responses.js';
import { findByQuery as findUserByQuery, findByIdAndUpdate } from '../services/user.service.js';

const getUsersAll = async (req, res) => {
  const { query } = req;

  let data = {};
  try {
    const users = await findUserByQuery(query);
    data = users;
  } catch (error) {
    return serverError({
      res,
      message: error.message,
    });
  }

  let string = '';
  for (const [key, value] of Object.entries(query)) {
    string += ` ${key}: ${value} -`;
  }

  if (Object.keys(data).length > 0) {
    success({
      res,
      message: query ? `user/s filtered by${string}` : 'all users',
      data,
    });
  } else {
    error({
      res,
      message: 'users not found',
    });
  }
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
  } catch (error) {
    serverError({
      res,
      message: error.message,
    });
  }
};

export { getUsersAll, updateUser };
