import User from '../models/User.model.js';
import { success, error, serverError } from '../helpers/responses.js';

const userGet = async (req, res) => {
  const { limit, from } = req.query;
  const query = { isActive: true };
  try {
    const [total, users] = await Promise.all([
      await User.countDocuments(query),
      await User.find(query).skip(Number(from)).limit(Number(limit)).exec(),
    ]);
    if (users) {
      success({ res, message: 'list of all users', data: { users, total } });
    } else {
      error({ res, message: 'users not found' });
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

export { userGet, updateUser };
