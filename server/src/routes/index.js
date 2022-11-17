import { Router } from 'express';
import { userGetAll, updateUser } from '../controllers/user.controller.js';
import { RegisterUser, LoginUser } from '../controllers/auth.controller.js';
import { createPost } from '../controllers/post.controller.js';

const router = Router();

router.get('/users', userGetAll);
router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);
router.put('/users/:id', updateUser);
router.post('/post', createPost);



export default router;
