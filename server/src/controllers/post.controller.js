import Post from '../models/Post.model.js';
import ProgrammingL from '../models/Programming_L.model.js';
import Category from '../models/Category.model.js';
import Technology from '../models/Technology.model.js';
import Tag from '../models/Tag.model.js';
import User from '../models/User.model.js';
import { success, error, serverError } from '../helpers/responses.js';
import { findById, findByQuery, findAll, newPost } from '../services/post.service.js';

const createPost = async (req, res) => {
  const { title, description, resource, date, programming_l, category, ranking, technology, tag } =
    req.body;

  const { id } = req;
  try {
    const savedPost = await newPost({
      title,
      description,
      resource,
      date,
      programming_l,
      category,
      ranking,
      technology,
      tag,
      id,
    });
    if (savedPost) {
      const post = await findById(savedPost.id);

      success({ res, message: `post created successfully`, data: post });
    } else {
      error({ res, message: 'post creation failed' });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

const getAllPost = async (req, res) => {
  let data = {};
  try {
    if (Object.keys(req.query).length === 0 && Object.keys(data).length === 0) {
      data = await findAll();
    } else {
      data = await findByQuery(req);
    }

    if (data) {
      success({ res, message: 'post found successfully', data });
    } else {
      error({ res, message: 'post found failed' });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await findById(id);
    if (post) {
      success({ res, message: 'post by id', status: 201, data: post });
    } else {
      error({ res, message: 'post not found' });
    }
  } catch (error) {
    serverError({ res, message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatePost = await Post.findByIdAndUpdate({ id }, { $set: body });
    if (updatePost) {
      success({ res, message: 'post updated', status: 201 });
    } else {
      error({ res, message: 'post not found' });
    }
  } catch (error) {
    serverError({ res, message: error.message });
  }
};

export { createPost, updatePost, getAllPost, getPostById };
