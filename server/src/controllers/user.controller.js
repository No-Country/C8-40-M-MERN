import User from '../models/User.model.js';
import Post from '../models/Post.model.js';

const createUser = async (req, res) => {
  let { userName, email, password, post } = req.body;
  
  try {
    post = [...new Set(post)]
    const newUser = new User({
      userName,
      email,
      password,
      post
    });
    
    await newUser.save()
    res.status(200).json(newUser); 

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export { createUser };
