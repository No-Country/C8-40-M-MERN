/* eslint-disable object-curly-newline */
import User from '../models/User.model.js';

import { encryptPassword } from '../helpers/crypto.js';

const findById = async (id) => {
  const user = await User.findById(id, [
    'userName',
    'email',
    'avatar',
    'role',
    'isActive',
    'createdAt',
    'updatedAt',
  ]).populate('post');
  return user;
};

const findMatch = async (query) => {
  const matched = await User.findOne(query);
  return !!matched;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ email }, [
    'userName',
    'password',
    'email',
    'avatar',
    'role',
    'isActive',
    'createdAt',
    'updatedAt',
  ]).populate('post');
  return user;
};

const findByQuery = async (query) => {
  let data = {};

  const users = await User.find(query, [
    'userName',
    'email',
    'avatar',
    'role',
    'isActive',
    'post',
  ]).populate('post');

  const count = await User.countDocuments(query);

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

const newUser = async (body) => {
  const { email, userName, password, role, isActive, avatar } = body;

  const user = new User({
    userName,
    email,
    password: encryptPassword(password),
    role,
    isActive,
    avatar,
  });

  await user.save();

  const savedUser = await findById(user._id);

  return savedUser;
};

export { findById, findMatch, findByEmail, findByQuery, findByIdAndUpdate, newUser };
