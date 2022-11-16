import { Router } from 'express'
import { createUser, userGet } from '../controllers/user.controller.js'

const router = Router()

router.post('/register', createUser)
router.get('/listUser', userGet)

export default router