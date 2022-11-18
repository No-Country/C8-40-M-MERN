import { Router } from 'express';
import { getUsersAll, updateUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/').get(getUsersAll);

router.route('/:id').put(updateUser);

export default router;
