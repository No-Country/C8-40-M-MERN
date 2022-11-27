import express from 'express';

import { createPost, getAllPost, getPostById, updatePost } from '../controllers/post.controller.js';

import isCurrentUser from '../middlewares/isCurrentUser.js';

import isAuth from '../middlewares/isAuth.js';

import {
  validateFields,
  validateParams,
  validateQueries,
  validateUpdateFields,
} from '../validators/post.validator.js';

const router = express.Router();

router.route('/').get(validateQueries, getAllPost).post(isAuth, validateFields, createPost);

router
  .route('/:postId')
  .get(validateParams, getPostById)
  .put(isAuth, isCurrentUser, validateParams, validateUpdateFields, updatePost);

export default router;
