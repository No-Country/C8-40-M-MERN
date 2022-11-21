import Post from '../models/Post.model.js';
import ProgrammingL from '../models/Programming_L.model.js';
import Category from '../models/Category.model.js';
import Technology from '../models/Technology.model.js';
import Tag from '../models/Tag.model.js';
import User from '../models/User.model.js';
import { success, error, serverError } from '../helpers/responses.js';

const findById = async (id) => {
  const post = await Post.findById(id, ['title', 'description', 'resource', 'date', 'ranking'])
    .populate({ path: 'user', select: 'userName' })
    .populate({
      path: 'category',
      select: 'name',
    })
    .populate({ path: 'programming_l', select: 'name' })
    .populate({ path: 'technology', select: 'name' })
    .populate({ path: 'tag', select: 'name' });

  return post;
};

const findByQuery = async (req) => {
  const { query } = req;

  const posts = await Post.find(query, ['title', 'description', 'resource', 'date', 'ranking'])
    .populate({ path: 'user', select: 'userName' })
    .populate({
      path: 'category',
      select: 'name',
    })
    .populate({ path: 'programming_l', select: 'name' })
    .populate({ path: 'technology', select: 'name' })
    .populate({ path: 'tag', select: 'name' });

  return posts;
};

const findAll = async () => {
  /* ['title', 'description', 'resource', 'date', 'ranking'] */
  const posts = await Post.find()
    .populate({ path: 'user', select: 'userName' })
    .populate({
      path: 'category',
      select: 'name',
    })
    .populate({ path: 'programming_l', select: 'name' })
    .populate({ path: 'technology', select: 'name' })
    .populate({ path: 'tag', select: 'name' });

  return posts;
};

const newPost = async ({
  title,
  description,
  resource,
  date,
  programming_l,
  category,
  ranking,
  technology,
  tag,
  id,
}) => {
  const newPost = new Post({
    title,
    description,
    resource,
    date,
    user: id,
    ranking,
  });

  const user = await User.findById(id);
  user.post.push(newPost.id);
  await user.save();
  /* -- */
  const postLanguage = await ProgrammingL.findOneAndUpdate(
    { name: programming_l },
    { $set: { name: programming_l } },
    { upsert: true, new: true }
  );

  postLanguage.post.push(newPost.id);
  await postLanguage.save();
  /* -- */
  const postCategory = await Category.findOneAndUpdate(
    { name: category },
    { $set: { name: category } },
    { upsert: true, new: true }
  );

  postCategory.post.push(newPost.id);
  await postCategory.save();
  /* -- */
  const postTechnology = await Technology.findOneAndUpdate(
    { name: technology },
    { $set: { name: technology } },
    { upsert: true, new: true }
  );

  postTechnology.post.push(newPost.id);
  await postTechnology.save();

  /* -- */
  const postTag = await Tag.findOneAndUpdate(
    { name: tag },
    { $set: { name: tag } },
    { upsert: true, new: true }
  );

  postTag.post.push(newPost.id);
  await postTag.save();

  /* -- */

  newPost.category = postCategory.id;
  newPost.programming_l = postLanguage.id;
  newPost.technology = postTechnology.id;
  newPost.tag = postTag.id;

  const savedPost = await newPost.save();
  return savedPost;
};

export { findById, newPost, findByQuery, findAll };
