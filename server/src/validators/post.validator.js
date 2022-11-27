import { check, query, param } from 'express-validator';

import validateResult from '../middlewares/validateResult.js';

import { findByQuery as findMatch } from '../services/post.service.js';

const validateFields = [
  check('title', 'Enter a title')
    .exists()
    .isLength({ min: 5 })
    .withMessage('Title must be between 5-30 letters')
    .isLength({ max: 30 })
    .withMessage('Title must be between 5-30 letters')
    .custom(async (value) => {
      const matchedPost = await findMatch({ title: value });
      if (matchedPost.length > 0) {
        throw new Error('Post title must be unique');
      } else {
        return true;
      }
    })
    .trim()
    .escape(),

  check('description', 'Enter the post description')
    .exists()
    .isLength({ min: 30 })
    .withMessage('Description must be between 30-500 letters')
    .isLength({ max: 500 })
    .withMessage('Description must be between 30-500 letters')
    .trim()
    .escape(),

  check('resource', "Enter a resource's type")
    .exists()
    .isIn(['video', 'image', 'document'])
    .withMessage("Resource must be 'video', 'image' or 'document'"),

  check('date', 'Enter the date the original data was created or updated')
    .exists()
    .isDate({ format: 'MM-DD-YYYY' })
    .withMessage("Date format: 'MM-DD-YYYY'"),

  check('category', 'Enter a category').exists(),

  check('programmingL', 'Enter a programming language').exists(),

  check('technology', 'Enter a technology').exists(),

  check('tag', 'Enter a tag').exists(),

  check('url', 'Enter a url').exists().isURL().withMessage('Enter a valid url'),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateQueries = [
  query('title', 'Title must be between 5-30 letters')
    .optional()
    .isLength({ min: 5 })
    .isLength({ max: 30 })
    .trim()
    .escape(),

  query('description', 'Description must be between 30-300 letters')
    .optional()
    .isLength({ min: 30 })
    .isLength({ max: 500 })
    .trim()
    .escape(),

  query('resource', "Resource must be 'video', 'image' or 'document'")
    .optional()
    .isIn(['video', 'image', 'document']),

  query('date', "Date format must be 'MM-DD-YYYY'").optional().isDate({ format: 'MM-DD-YYYY' }),

  query('category', 'Category must be an id').optional().isMongoId(),

  query('programmingL', 'ProgrammingL must be an id').optional().isMongoId(),

  query('technology', 'Technology must be an id').optional().isMongoId(),

  query('tag', 'Tag must be an id').optional().isMongoId(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUpdateFields = [
  check('title', 'Enter a title')
    .optional()
    .isLength({ min: 5 })
    .withMessage('Title must be between 3-30 letters')
    .isLength({ max: 30 })
    .withMessage('Title must be between 3-30 letters')
    .custom(async (value) => {
      const matchedPost = await findMatch({ title: value });
      if (matchedPost.length > 0) {
        throw new Error('Post title must be unique');
      } else {
        return true;
      }
    })
    .trim()
    .escape(),

  check('description', 'Enter the post description')
    .optional()
    .isLength({ min: 30 })
    .withMessage('Description must be between 30-500 letters')
    .isLength({ max: 500 })
    .withMessage('Description must be between 30-500 letters')
    .trim()
    .escape(),

  check('resource', "Enter a resource's type")
    .optional()
    .isIn(['video', 'image', 'document'])
    .withMessage("Resource must be 'video', 'image' or 'document'"),

  check('date', 'Enter the date the material was created or updated')
    .optional()
    .isDate({ format: 'MM-DD-YYYY' }),

  check('url', 'Enter a url').optional().isURL().withMessage('Enter a valid url'),

  check('tag')
    .optional()
    .isIn(['documentation', 'solution', 'article', 'news'])
    .withMessage('Enter a valid tag'),

  check('category')
    .optional()
    .isIn([
      'frontend',
      'backend',
      'qa',
      'testing',
      'ux/ui',
      'devops',
      'architecture',
      'data science',
      'machine learning',
    ])
    .withMessage('Enter a valid category'),

  check('ranking')
    .optional()
    .isInt({
      min: 0,
      max: 5,
    })
    .withMessage('Ranking must be between 0-5'),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateParams = [
  param('postId', 'Invalid id').isMongoId(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateFields, validateParams, validateQueries, validateUpdateFields };
