import User from '../models/User.model.js';
import { findByQuery as findPostByQuery } from './post.service.js';
import { encryptPassword } from '../helpers/crypto.js';

const findById = async (id) => {
  const user = await User.findById(id, ['userName', 'email', 'avatar', 'role']);
  return user;
};

const findByQuery = async (query) => {
  let data = {};
  const count = await User.countDocuments(query);
  const users = await User.find(query, ['userName', 'email', 'avatar', 'role', 'post']);

  if (count > 1) {
    for (const user of users) {
      const posts = await findPostByQuery({ user: user._id });
      user.post = posts;
    }

    data = {
      count,
      users,
    };
    return data;
  }
  data = {
    count,
    users,
  };

  return data;
};

const findByIdAndUpdate = async (userId, userName, password, role, isActive, avatar) => {
  const updatedUser = await User.findByIdAndUpdate(
    { _id: userId },
    {
      $set: {
        userName,
        password: encryptPassword(password),
        role,
        isActive,
        avatar,
      },
    }
  );
  return updatedUser;
};

export { findById, findByQuery, findByIdAndUpdate };
