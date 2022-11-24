import { success, error, serverError } from '../helpers/responses.js';
import { findById, findByQuery, findAll, newPost,findByIdAndUpdate } from '../services/post.service.js';

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

      success({ res, message: 'post created successfully', data: post });
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
      success({ res, message: 'posts found successfully', data });
    } else {
      error({ res, message: 'posts found failed' });
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
      success({ res, message: `post id: ${id}`, status: 201, data: post });
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
    const updatePost = await findByIdAndUpdate(id, body);

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
