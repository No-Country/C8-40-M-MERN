import { Router } from 'express';
import { RegisterUser, LoginUser } from '../controllers/auth.controller.js';
import { validateRegisterFields, validateParams } from '../validators/user.validator.js'

const router = Router();

router.post('/register', validateRegisterFields, RegisterUser);
router.post('/login', LoginUser);


export default router;
