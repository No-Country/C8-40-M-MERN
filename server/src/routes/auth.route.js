import { Router } from 'express';

import { RegisterUser, LoginUser } from '../controllers/auth.controller.js';

import { validateRegisterFields, validateLoginFields } from '../validators/user.validator.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Website registered users
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: object
 *           description: User id
 *           readOnly: true
 *           properties:
 *             id:
 *               type: string
 *               format: uuid
 *         userName:
 *           type: string
 *           description: User name
 *           unique: true
 *         email:
 *           type: string
 *           description: User email
 *           unique: true
 *         password:
 *           type: string
 *           format: password
 *           description: User password
 *           writeOnly: true
 *         avatar:
 *           type: string
 *           description: User avatar url
 *         isActive:
 *           type: boolean
 *           description: User status
 *         role:
 *           type: string
 *           enum: [admin, dev]
 *           description: User role
 *         post:
 *           type: array
 *           description: User posts
 *           readOnly: true
 *         createdAt:
 *           type: string
 *           format: date
 *           description: User creation
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: User update
 *           readOnly: true
 *       required:
 *         - userName
 *         - email
 *         - password
 *       example:
 *         userName: TestUser
 *         email: test@mail.com
 *         password: Password1
 *         avatar: https://user-image.jpg
 *         isActive: true
 *         role: dev
 *     Response:
 *       type: object
 *       properties:
 *          message:
 *            type: string
 *            description: response title
 *          data:
 *            type: object
 *            properties:
 *              $ref: '#/components/schemas/User'
 *   responses:
 *     register:
 *       description: User register
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Response'
 *           example:
 *             message: user created
 *             data:
 *               user:
 *                 id: jiu87ijijj
 *                 userName: TestUser
 *                 email: test@mail.com
 *                 password: Password1
 *                 avatar: https://user-image.jpg
 *                 isActive: true
 *                 role: dev
 *                 token: 8juj88h8h88h88h8
 *     401:
 *       description: unauthorized - id is required
 *     403:
 *       description: forbidden - admin access is required - validation error
 *     500:
 *       description: server error
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a user
 *     description: Register a user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         $ref: '#/components/responses/register'
 *       403:
 *         $ref: '#/components/responses/403'
 *       500:
 *         $ref:'#/components/responses/500'
 * */
router.post('/register', validateRegisterFields, RegisterUser);

router.post('/login', validateLoginFields, LoginUser);

export default router;
