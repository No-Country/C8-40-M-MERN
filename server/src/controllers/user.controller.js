import User from '../models/User.model.js';
import Post from '../models/Post.model.js';

import { success, error, serverError } from '../helpers/responses.js';

const getUsersAll = async (req, res) => {
  const { id, userName, limit, from } = req.query;
  const query = { isActive: true };

  try {
    if (id) {
      /*       const user = await User.find({ id }).populate({
        path: 'post',
        populate: { path: 'title', select: 'title' },
      }); */
      const user = await User.findById(id, ['userName', 'email', 'role']);

      /*  .populate({
        path: 'post',
        select: ['title', 'date', 'resource', 'description', 'ranking'],
      }); */

      const userPosts = await Post.find({ user: id }, [
        'title',
        'description',
        'resource',
        'date',
        'ranking',
      ])
        .populate({
          path: 'category',
          select: 'name',
        })
        .populate({ path: 'programming_l', select: 'name' })
        .populate({ path: 'technology', select: 'name' })
        .populate({ path: 'tag', select: 'name' });
      /*
      .populate({ path: 'lessons', select: 'lectures' })
                .populate({ path: 'grades', select: 'studentGrades' })
                .populate({ path: 'events', select: 'events' })
                .populate({ path: 'students', select: 'fullName' })
                .populate({ path: 'teacher', select: 'fullName' }) */
      /*  .populate({
          /*         populate: { path: 'technology', select: ['name'] },

        }); */

      if (Object.keys(user).length > 0) {
        success({ res, message: `user id: ${id}`, data: { user, userPosts } });
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
    const updatedUser = await User.findByIdAndUpdate({ id }, { $set: body });
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
