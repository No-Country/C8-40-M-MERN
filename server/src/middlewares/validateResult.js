import { validationResult } from 'express-validator';

export default function validateResult(req, res, next) {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    return res.status(403).json({ errors: err.array() });
  }
}
