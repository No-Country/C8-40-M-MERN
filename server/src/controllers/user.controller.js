import User from '../models/User.model.js';
// import Post from '../models/Post.model.js';

const userGet = async (req, res) => {
  const { limit, from } = req.query;
  const query = { isActive: true };
  try {
    const [total, users] = await Promise.all([
      await User.countDocuments(query),
      await User.find(query).skip(Number(from)).limit(Number(limit)).exec()
    ]);

    res.status(200).json({
      users,
      total,
      msg: 'get API - list of users',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: 'Error getting list of users',
    });
  }
};

const createUser = async (req, res) => {
  let { userName, email, password, post } = req.body;

  try {
    post = [...new Set(post)];
    const newUser = new User({
      userName,
      email,
      password,
      post,
    });

    await newUser.save();
    res.status(200).json({
      newUser,
      msg: 'post API - User created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      msg: 'Error creating an user',
    });
  }
};

export { createUser, userGet };
