import { error, serverError, success } from '../helpers/responses.js';

import { comparePassword } from '../helpers/crypto.js';

import { generateJWT } from '../helpers/jwt.js';

import { newUser, findByEmail } from '../services/user.service.js';

const RegisterUser = async (req, res) => {
  let data = {};

  try {
    const savedUser = await newUser(req.body);

    const token = await generateJWT(savedUser.id, savedUser.userName, savedUser.role);

    data = {
      savedUser,
      token,
    };
  } catch (err) {
    return serverError({
      res,
      message: err.message,
    });
  }

  return success({
    res,
    message: 'user created',
    data,
    status: 201,
  });
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  let user = {};

  try {
    user = await findByEmail(email);
  } catch (err) {
    return serverError({
      res,
      message: err.message,
    });
  }

  const { password: userPassword, ...userWithoutPassword } = user.toObject();

  const validPassword = comparePassword(password, userPassword);

  if (validPassword) {
    let token = '';
    try {
      token = await generateJWT(user.id, user.role);
    } catch (err) {
      return serverError({
        res,
        message: err.message,
      });
    }

    return success({
      res,
      message: 'successfull login',
      data: { user: userWithoutPassword, token },
      status: 200,
    });
  }
  return error({
    res,
    message: 'invalid password',
    status: 401,
  });
};

export { RegisterUser, LoginUser };
