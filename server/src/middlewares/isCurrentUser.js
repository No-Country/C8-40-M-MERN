import { error, serverError } from '../helpers/responses.js';

import { findById } from '../services/post.service.js';

export default async function isCurrentUser(req, res, next) {
  const { userId, postId } = req.params;

  const { id: tokenId, role: tokenRole } = req;

  if (tokenRole === 'admin') {
    return next();
  }
  if (userId && userId === tokenId) {
    return next();
  }
  if (postId) {
    let matchedPost = {};

    try {
      const post = await findById(postId);
      matchedPost = post;
    } catch (err) {
      return serverError({
        res,
        message: err.message,
      });
    }
    if (tokenId === matchedPost.user?._id) return next();
  }

  return error({
    res,
    message: 'forbidden: unauthorized user',
    status: 403,
  });
}
