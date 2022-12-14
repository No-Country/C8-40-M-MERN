import { Router } from 'express';

import { getAllUsers, updateUser } from '../controllers/user.controller.js';

import isAdmin from '../middlewares/isAdmin.js';

import isCurrentUser from '../middlewares/isCurrentUser.js';

import isAuth from '../middlewares/isAuth.js';

import { validateParams, validateUpdateFields } from '../validators/user.validator.js';

const router = Router();

router.route('/').get(isAuth, isAdmin, getAllUsers);

router
  .route('/:userId')
  .put(isAuth, isCurrentUser, validateParams, validateUpdateFields, updateUser);

export default router;
