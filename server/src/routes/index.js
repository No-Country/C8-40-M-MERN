import { Router } from 'express';
import { userGetAll, updateUser } from '../controllers/user.controller.js';
import { RegisterUser, LoginUser } from '../controllers/auth.controller.js';
import { createPost } from '../controllers/post.controller.js';
import { verifyToken, isAuth } from '../middlewares/verifyToken.js';

const router = Router();

router.get('/users', userGetAll);
router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);
router.put('/users/:id', updateUser);
router.post('/posts', isAuth, createPost);

export default router;
