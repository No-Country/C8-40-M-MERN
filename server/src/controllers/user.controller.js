import User from '../models/User.model.js';
import { success, error, serverError } from '../helpers/responses.js';

const getUsersAll = async (req, res) => {
  const { id, userName, limit, from } = req.query;
  const query = { isActive: true };

  try {
    if (id) {
      const user = await User.find({ _id: id });
      if (user.length > 0) {
        success({ res, message: `user id: ${id}`, data: user });
      } else {
        error({ res, message: 'user not found' });
      }
    } else if (userName) {
      const user = await User.find({ userName });
      if (user.length > 0) {
        success({ res, message: `user ${userName}`, data: user });
      } else {
        error({ res, message: 'user not found' });
      }
    } else {
      const [total, users] = await Promise.all([
        await User.countDocuments(query),
        await User.find(query).skip(Number(from)).limit(Number(limit)).exec(),
      ]);

      if (users.length > 0) {
        success({ res, message: 'list of all users', data: { users, total } });
      } else {
        error({ res, message: 'users not found' });
      }
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  console.log('body', body);
  try {
    const updatedUser = await User.findByIdAndUpdate({ _id: id }, { $set: body });
    console.log('updatedUser');
    if (updatedUser) {
      success({ res, message: 'user updated', status: 201 });
    } else {
      error({ res, message: 'user not found' });
    }
  } catch (error) {
    serverError({ res, message: err.message });
  }
};

export { getUsersAll, updateUser };
