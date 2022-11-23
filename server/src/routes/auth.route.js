import { Router } from 'express';
import { RegisterUser, LoginUser } from '../controllers/auth.controller.js';
import { validateRegisterFields, validateLoginFields } from '../validators/user.validator.js';

const router = Router();

router.post('/register', validateRegisterFields, RegisterUser);
router.post('/login', validateLoginFields, LoginUser);

export default router;
