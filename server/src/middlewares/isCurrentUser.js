import { error } from '../helpers/responses.js';
import { findById } from '../services/post.service.js';

const isCurrentUser = async (req, res, next) => {
  const { userId, postId } = req.params;
  const { id, role } = req;

  if (userId) {
    const newId = userId;
    if (id !== newId && role !== 'admin') {
      return error({
        res,
        message: 'forbidden: unauthorized user',
        status: 403,
      });
    }
    return next();
  }

  if (postId) {
    const post = await findById(postId);
    if (id !== post.user._id && role !== 'admin') {
      return error({
        res,
        message: 'forbidden: unauthorized user',
        status: 403,
      });
    }
    return next();
  }
};

export { isCurrentUser };
