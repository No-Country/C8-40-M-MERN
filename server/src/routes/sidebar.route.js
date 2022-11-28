import { Router } from 'express';

import getForSideBar from '../controllers/sidebar.controller.js';

const router = Router();

router.route('/').get(getForSideBar);

export default router;
