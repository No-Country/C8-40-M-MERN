import { Router } from 'express'
import { createUser, userGet } from '../controllers/user.controller.js'
import { RegisterUser, LoginUser } from '../controllers/auth.controller.js';


const router = Router();

router.get('/listUser', userGet)
router.post('/register', createUser);
router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);

export default router;
