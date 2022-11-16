import User from '../models/User.model.js';
import { error, serverError, success } from '../helpers/responses.js';
import { encryptPassword, comparePassword } from '../helpers/crypto.js';
import { generateJWT, validateJWT } from '../helpers/jwt.js';

const RegisterUser = async (req, res) => {
  const { email, userName, password } = req.body;
  try {
    const newUser = await new User({
      userName: userName,
      email: email,
      password: encryptPassword(password),
    });

    const savedUser = await newUser.save();

    const token = await generateJWT(savedUser._id, savedUser.userName, savedUser.role);

    success({ res, message: 'user created', data: { savedUser, token }, status: 201 });
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

const LoginUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });
    !user && error({ res, message: 'wrong credentials!' });

    const validPassword = comparePassword(password, user.password);
    if (validPassword) {
      const token = await generateJWT(user._id, user.role);

      success({
        res,
        message: 'successfull login',
        data: {
          user: {
            id: user._id,
            userName: user.userName,
            email: user.email,
            isActive: user.isActive,
            role: user.role,
            post: user.post,
          },
          token,
        },
        status: 200,
      });
    } else {
      error({ res, message: 'invalid user name or password', status: 401 });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

export { RegisterUser, LoginUser };
