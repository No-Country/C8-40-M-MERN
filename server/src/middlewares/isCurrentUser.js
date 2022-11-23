import { error } from '../helpers/responses.js';
import Post from '../models/Post.model.js';
import { findById } from '../services/post.service.js';

const isCurrentUser = async (req, res, next) => {
  // const { paramsId } = req.params;
  const { userId, postId } = req.params;
  const { id, role } = req;

  if (userId) {
    const newId = Number(paramsId);
    if (id !== newId && role !== 'admin') {
      return error({ res, message: 'forbidden: unauthorized user', status: 403 });
    }
    return next();
  }

  if (postId) {
    const post = await findById(postId);
    if (id !== post.user.id && role !== 'admin') {
      return error({ res, message: 'forbidden: unauthorized user', status: 403 });
    }
    return next()
  }
};

export { isCurrentUser };
