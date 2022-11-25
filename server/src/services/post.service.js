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
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const sort = query.sort || 'desc';
  const search = query.search;
  let direction = -1;

  if (sort === 'asc') {
    direction = 1;
  }

  let options = {
    populate: [
      { path: 'user', select: 'userName' },
      { path: 'category', select: 'name' },
      { path: 'programming_l', select: 'name' },
      { path: 'technology', select: 'name' },
      { path: 'tag', select: 'name' },
    ],
    sort: { createdAt: direction },
    page,
    limit,
  };

  if (search)
    query = {
      ...query,
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ],
    };

  const posts = await Post.paginate(query, options);

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
  let options = {
    title,
    description,
    resource,
    url,
    date,
    ranking,
  };

  if (programming_l) {
    const postLanguage = await ProgrammingL.findOneAndUpdate(
      { name: programming_l },
      { $set: { name: programming_l } },
      { upsert: true, new: true }
    );
    await postLanguage.save();
    options.programming_l = postLanguage._id;
  }

  if (category) {
    const postCategory = await Category.findOneAndUpdate(
      { name: category },
      { $set: { name: category } },
      { upsert: true, new: true }
    );
    await postCategory.save();
    options.category = postCategory._id;
  }

  if (technology) {
    const postTechnology = await Technology.findOneAndUpdate(
      { name: technology },
      { $set: { name: technology } },
      { upsert: true, new: true }
    );
    await postTechnology.save();
    options.technology = postTechnology._id;
  }

  if (tag) {
    const postTag = await Tag.findOneAndUpdate(
      { name: tag },
      { $set: { name: tag } },
      { upsert: true, new: true }
    );
    await postTag.save();
    options.tag = postTag._id;
  }

  if (ranking) {
    const post = await findById(postId);
    let previousRanking = 0;
    let newVote = parseInt(ranking);
    let newRanking = newVote;
    if (post.ranking) {
      previousRanking = post.ranking;
      newRanking = (newVote + previousRanking) / 2;
    }
    options.ranking = newRanking;
  }

  const updatedPost = await Post.findByIdAndUpdate(
    { _id: postId },
    {
      $set: options,
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
