import express from 'express';

import { createPost, getAllPost, getPostById, updatePost } from '../controllers/post.controller.js';
import { isCurrentUser } from '../middlewares/isCurrentUser.js';
import { isAuth } from '../middlewares/isAuth.js';
import {
  validateFields,
  validateParams,
  validateQueries,
  validateUpdateFields,
} from '../validators/post.validator.js';

const router = express.Router();

router.route('/').post(isAuth, validateFields, createPost).get(validateQueries, getAllPost);

router
  .route('/:postId')
  .get(validateParams, getPostById)
  .put(isAuth, isCurrentUser, validateParams, validateUpdateFields, updatePost);

export default router;
