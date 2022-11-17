import Post from '../models/Post.model.js';
import ProgrammingL from '../models/Programming_L.model.js';
import Category from '../models/Category.model.js';
import User from '../models/User.model.js';
import { success, error, serverError } from '../helpers/responses.js';

const createPost = async (req, res) => {
  const { title, description, resource, date, programming_l, category, ranking } = req.body;
  const { id } = req; /* en el request tambien tenemos esto req.userName, req.role */

  const newPost = new Post({
    title,
    description,
    resource,
    date,
    user: id,
    ranking,
  });
  try {
    /*relación con user*/
    const user = await User.findById(id);
    user.post.push(newPost._id);
    await user.save();

    /*relación con programming_l*/
    const language = await ProgrammingL.findOneAndUpdate(
      { name: programming_l },
      { $set: { name: programming_l } },
      { upsert: true }
    );

    language.post.push(newPost._id);
    await language.save();

    /*relación con  category*/
    const postCategory = await Category.findOneAndUpdate(
      { name: category },
      { $set: { name: category } },
      { upsert: true }
    );

    postCategory.post.push(newPost._id);
    await postCategory.save();

    /* guardo el nuevo post */
    newPost.category = postCategory._id;
    newPost.programming_l = language._id;
    const savedPost = await newPost.save();

    if (savedPost) {
      success({ res, message: `post created successfully`, data: savedPost });
    } else {
      error({ res, message: 'post creation failed' });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

export { createPost };
