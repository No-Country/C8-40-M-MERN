import express from 'express';

import { createPost, getAllPost, postById, updatePost } from '../controllers/post.controller.js';
import { verifyToken, isAuth } from '../middlewares/verifyToken.js';

const router = express.Router();

router.route('/')
.post(isAuth, createPost)
.get(getAllPost)

router.route('/:id')
.put(updatePost)
.get(postById)

export default router;