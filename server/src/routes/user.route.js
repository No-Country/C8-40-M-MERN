import { Router } from 'express';
import { userGetAll, updateUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/')
.get(userGetAll)

router.route('/:id')
.put(updateUser)

export default router;