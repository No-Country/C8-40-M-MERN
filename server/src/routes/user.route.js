import { Router } from 'express';
import { getUsersAll, updateUser } from '../controllers/user.controller.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { isCurrentUser } from '../middlewares/isCurrentUser.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = Router();

router.route('/').get(isAuth, isAdmin, getUsersAll);

router.route('/:userId').put(isAuth, isCurrentUser, updateUser);

export default router;
