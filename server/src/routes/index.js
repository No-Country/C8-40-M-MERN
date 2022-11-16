import { Router } from 'express';
import { RegisterUser, LoginUser } from '../controllers/auth.controller.js';
import { createUser } from '../controllers/user.controller.js';

const router = Router();

router.post('/register', createUser);
router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);

export default router;
