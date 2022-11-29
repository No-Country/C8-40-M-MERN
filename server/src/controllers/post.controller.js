import { success, error, serverError } from '../helpers/responses.js';

import { findById, findByQuery, newPost, findByIdAndUpdate } from '../services/post.service.js';

const createPost = async (req, res) => {
  const { body } = req;

  const { id } = req;

  let savedPost = {};

  try {
    savedPost = await newPost({ id, body });
  } catch (err) {
    return serverError({
      res,
      message: err.message,
    });
  }

  if (Object.keys(savedPost).length > 0) {
    const post = await findById(savedPost.id);

    return success({
      res,
      message: 'post created successfully',
      data: post,
    });
  }

  return error({
    res,
    message: 'post creation failed',
  });
};

const getAllPost = async (req, res) => {
  const { query } = req;

  let data = {};

  try {
    data = await findByQuery(query);
  } catch (err) {
    return serverError({
      res,
      message: err.message,
    });
  }

  if (data.totalDocs > 0) {
    return success({
      res,
      message: 'all posts',
      data,
    });
  }

  return error({
    res,
    message: 'posts not found',
  });
};

const getPostById = async (req, res) => {
  const { postId } = req.params;
  let post = {};

  try {
    post = await findById(postId);
  } catch (err) {
    serverError({
      res,
      message: err.message,
    });
  }

  if (Object.keys(post).length > 0) {
    return success({
      res,
      message: `post id: ${postId}`,
      status: 201,
      data: post,
    });
  }

  return error({
    res,
    message: 'post not found',
  });
};

const updatePost = async (req, res) => {
  const { postId } = req.params;

  const { body } = req;

  let data = {};

  try {
    data = await findByIdAndUpdate({ postId, body });
  } catch (err) {
    return serverError({
      res,
      message: err.message,
    });
  }

  if (Object.keys(data).length > 0) {
    return success({
      res,
      message: 'post updated',
      data,
      status: 201,
    });
  }

  return error({
    res,
    message: 'post not found',
  });
};

export { createPost, updatePost, getAllPost, getPostById };
