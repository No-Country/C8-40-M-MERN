import express from 'express';
const router = express.Router();

import { createPost, getAllPost, getPostById, updatePost } from '../controllers/post.controller.js';
import { isCurrentUser } from '../middlewares/isCurrentUser.js';
import { isAuth } from '../middlewares/isAuth.js';
import { validateFields, validateParams, validateQueries } from '../validators/post.validator.js';

router.post('/', isAuth, validateFields, createPost);
router.get('/', validateQueries, getAllPost);
router.get('/:postId', validateParams, getPostById);
router.put('/:postId', isAuth, isCurrentUser, validateParams, updatePost);

export default router;
