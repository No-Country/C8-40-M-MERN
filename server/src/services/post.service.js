import Post from '../models/Post.model.js';
import ProgrammingL from '../models/Programming_L.model.js';
import Category from '../models/Category.model.js';
import Technology from '../models/Technology.model.js';
import Tag from '../models/Tag.model.js';
import User from '../models/User.model.js';

const findById = async (id) => {
  const post = await Post.findById(id, [
    'title',
    'description',
    'resource',
    'date',
    'ranking',
    'url',
  ])
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

const findByQuery = async (query) => {
  const posts = await Post.find(query, [
    'title',
    'description',
    'resource',
    'date',
    'url',
    'ranking',
  ])
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

const findByIdAndUpdate = async ({
  postId,
  title,
  description,
  resource,
  url,
  date,
  programming_l,
  category,
  ranking,
  technology,
  tag,
}) => {
  const postLanguage = await ProgrammingL.findOneAndUpdate(
    { name: programming_l },
    { $set: { name: programming_l } },
    { upsert: true, new: true }
  );

  await postLanguage.save();

  const postCategory = await Category.findOneAndUpdate(
    { name: category },
    { $set: { name: category } },
    { upsert: true, new: true }
  );

  await postCategory.save();
  const postTechnology = await Technology.findOneAndUpdate(
    { name: technology },
    { $set: { name: technology } },
    { upsert: true, new: true }
  );

  await postTechnology.save();

  const postTag = await Tag.findOneAndUpdate(
    { name: tag },
    { $set: { name: tag } },
    { upsert: true, new: true }
  );

  await postTag.save();

  const updatedPost = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $set: {
        title,
        description,
        resource,
        url,
        date,
        ranking,
        programming_l: postLanguage._id,
        technology: postTechnology._id,
        tag: postTag._id,
        category: postCategory._id,
      },
    },
    { new: true }
  );

  const data = findById(updatedPost._id);

  return data;
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
  url,
  id,
}) => {
  const newPost = new Post({
    title,
    description,
    resource,
    date,
    user: id,
    ranking,
    url,
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

export { findById, newPost, findByQuery, findByIdAndUpdate };
