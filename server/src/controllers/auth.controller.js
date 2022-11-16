import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import response from '../helpers/responses.js';

const RegisterUser = async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
  });

  try {
    const savedUser = await newUser.save();
    response.success(req, res, savedUser, 201);
  } catch (err) {
    response.error(err, 400);
  }
};

const LoginUser = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    !user && response.error(req, res, 'Wrong credentials!', 401);

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OriginalPassword !== req.body.password && response.error(req, res, 'Wrong credentials!', 401);

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;
    response.success(req, res, { ...others, accessToken }, 200);
  } catch (err) {
    response.error(req, res, err, 400);
  }
};

export { RegisterUser, LoginUser };
