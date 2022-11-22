import { check } from 'express-validator'
import { validateResult } from '../middlewares/validateResult.js'

const validateFields = [
  check('title', 'Enter a title')
    .exists()
    .isLength({ min: 5 })
    .withMessage('Title must be between 3-30 letters')
    .isLength({ max: 30 })
    .withMessage('Title must be between 3-30 letters')
    .trim()
    .escape(),

  check('description', 'Enter the post description')
    .exists()
    .isLength({ min: 30 })
    .withMessage('Description must be between 30-300 letters')
    .isLength({ max: 500 })
    .withMessage('Description must be between 30-300 letters')
    .trim()
    .escape(),

  check('resource', `Enter a resource's type`)
    .exists()
    .isIn(['video', 'image', 'code'])
    .withMessage(`Resource must be 'video', 'image' or 'code'`),

  check('date', 'Enter the date the material was created or updated')
    .exists()
    .isDate({ format: 'MM-DD-YYYY' }),

  check('category', 'Enter a category')
    .exists(),

  check('programming_l', 'Enter a programming language')
    .exists(),

  check('technology', 'Enter a technology')
    .exists(),

  check('tag', 'Enter a tag')
    .exists(),

    (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateParams = [
  check('id', 'Invalid id')
    .isMongoId(),

    (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateQueries = [
  check('title', 'Title must be between 3-30 letters')
    .optional()
    .isLength({ min: 5 })
    .isLength({ max: 30 })
    .trim()
    .escape(),

  check('description', 'Description must be between 30-300 letters')
    .optional()
    .isLength({ min: 30 })
    .isLength({ max: 500 })
    .trim()
    .escape(),

  check('resource', `Resource must be 'video', 'image' or 'code'`)
    .optional()
    .isIn(['video', 'image', 'code']),

  check('date', `Date format must be 'MM-DD-YYYY'`)
    .optional()
    .isDate({ format: 'MM-DD-YYYY' }),

  check('category', 'Category must be an id')
    .optional()
    .isMongoId(),

  check('programming_l', 'Programming_l must be an id')
    .optional()
    .isMongoId(),

  check('technology', 'Technology must be an id')
    .optional()
    .isMongoId(),

  check('tag', 'Tag must be an id')
    .optional()
    .isMongoId(),

    (req, res, next) => {
    validateResult(req, res, next);
  },
]


export { validateFields,validateParams, validateQueries }