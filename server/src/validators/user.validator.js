import { check } from 'express-validator';
import { validateResult } from '../middlewares/validateResult.js';
import User from '../models/User.model.js';



const validateRegisterFields = [
    check('userName', 'Enter a name')
        .exists()
        .isLength({ min: 3 })
        .withMessage('Name must be between 3-15 letters')
        .isLength({ max: 15 })
        .withMessage('Name must be between 3-15 letters')
        .custom(async (value) => {
            const matchedUserName = await User.findOne({ userName: value });
            if (matchedUserName) {
                throw new Error('User name already exists');
            } else {
                return true;
            }
        })
        .trim()
        .escape(),

    check('email', 'Enter a email')
        .exists()
        .isEmail()
        .withMessage('Enter a email valid format')
        .custom(async (value) => {
            const matchedMail = await User.findOne({ email: value });
            if (matchedMail) {
                throw new Error('User email already exists');
            } else {
                return true;
            }
        })
        .trim()
        .escape(),
    check(
        'password',
        'Password must be at least 8 characters, including an uppercase letter and a number',
    )
        .exists()
        .withMessage('Enter a password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters')
        .matches(/\d/)
        .withMessage('Password must include a number')
        .matches('[A-Z]')
        .withMessage('Password must include an uppercase letter')
        .trim()
        .escape(),
    //Por resolver//
    // check('passwordConfirmation')
    //     .exists()
    //     .withMessage('Ingrese nuevamente su contraseña')
    //     .custom((value, { req }) => {
    //         if (value !== req.body.password) {
    //             throw new Error('Las contraseñas deben coinciden');
    //         } else {
    //             return true;
    //         }
    //     }),

    check('isActive', 'isActive must be a boolean')
        .optional()
        .isBoolean(),

    check('role', `Role must be 'admin' or 'dev'`)
        .optional()
        .isIn(['admin', 'dev']),


    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateLoginFields = [
 
    check('email', 'Enter a email')
        .exists()
        .isEmail()
        .withMessage('Enter a email valid format')
        .custom(async (value) => {
            const matchedMail = await User.findOne({ email: value });
            if (matchedMail) {
                throw new Error('User email already exists');
            } else {
                return true;
            }
        })
        .trim()
        .escape(),
    check(
        'password',
        'Password must be at least 8 characters, including an uppercase letter and a number',
    )
        .exists()
        .withMessage('Enter a password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters')
        .matches(/\d/)
        .withMessage('Password must include a number')
        .matches('[A-Z]')
        .withMessage('Password must include an uppercase letter')
        .trim()
        .escape(),
    //Por resolver//
    // check('passwordConfirmation')
    //     .exists()
    //     .withMessage('Ingrese nuevamente su contraseña')
    //     .custom((value, { req }) => {
    //         if (value !== req.body.password) {
    //             throw new Error('Las contraseñas deben coinciden');
    //         } else {
    //             return true;
    //         }
    //     }),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateParams = [
    check('userId', 'Invalid id').isMongoId(),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];


export { validateRegisterFields, validateParams, validateLoginFields };
