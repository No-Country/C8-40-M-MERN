import express from 'express';
const router = express.Router();


import { createPost, getAllPost, getPostById, updatePost } from '../controllers/post.controller.js';
import { isAuth } from '../middlewares/verifyToken.js';
import {validateFields, validateParams, validateQueries } from '../validators/post.validator.js'

router.post('/', isAuth,validateFields, createPost)
router.get('/', validateQueries, getAllPost)
router.get('/:id',validateParams, getPostById)
router.put('/',validateParams, updatePost)


export default router;
