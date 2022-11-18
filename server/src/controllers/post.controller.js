import Post from '../models/Post.model.js';
import ProgrammingL from '../models/Programming_L.model.js';
import Category from '../models/Category.model.js';
import User from '../models/User.model.js';
import { success, error, serverError } from '../helpers/responses.js';

const createPost = async (req, res) => {
  const { title, description, resource, date, programming_l, category, ranking } = req.body;

  const { id } = req;

  const newPost = new Post({
    title,
    description,
    resource,
    date,
    user: id,
    ranking,
  });

  try {
    const user = await User.findById(id);
    user.post.push(newPost._id);
    await user.save();
    const language = await ProgrammingL.findOneAndUpdate(
      { name: programming_l },
      { $set: { name: programming_l } },
      { upsert: true, new: true }
    );

    language.post.push(newPost._id);
    await language.save();
    const postCategory = await Category.findOneAndUpdate(
      { name: category },
      { $set: { name: category } },
      { upsert: true, new: true }
    );

    postCategory.post.push(newPost._id);
    await postCategory.save();
    newPost.category = postCategory._id;
    newPost.programming_l = language._id;

    const savedPost = await newPost.save();

    if (savedPost) {
      success({ res, message: `post created successfully`, data: savedPost });
    } else {
      error({ res, message: 'post creation failed' });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

const getAllPost = async (req, res) => {
  const queryKey = Object.keys(req.query);

  try {
    let mongoResult;
    if (queryKey) {
      mongoResult = await Post.aggregate([
        {
          $match: req.query,
        },
      ]);
    } else {
      mongoResult = await Post.find();
    }

    if (mongoResult) {
      success({ res, message: `post found successfully`, data: mongoResult });
    } else {
      error({ res, message: 'post found failed' });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatePost = await Post.findByIdAndUpdate({ _id: id }, { $set: body });
    if (updatePost) {
      success({ res, message: 'post updated', status: 201 });
    } else {
      error({ res, message: 'post not found' });
    }
  } catch (error) {
    serverError({ res, message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) {
      success({ res, message: 'post by id', status: 201 });
    } else {
      error({ res, message: 'post not found' });
    }
  } catch (error) {
    serverError({ res, message: error.message });
  }
};

export { createPost, updatePost, getAllPost, getPostById };
