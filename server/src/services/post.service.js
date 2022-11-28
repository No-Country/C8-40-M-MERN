import Post from '../models/Post.model.js';

import ProgrammingL from '../models/ProgrammingL.model.js';

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
    'createdAt',
    'updatedAt',
  ])
    .populate({
      path: 'user',
      select: 'userName',
    })
    .populate({
      path: 'category',
      select: 'name',
    })
    .populate({
      path: 'programmingL',
      select: 'name',
    })
    .populate({
      path: 'technology',
      select: 'name',
    })
    .populate({
      path: 'tag',
      select: 'name',
    });

  return post;
};

const findByQuery = async (query) => {
  const page = parseInt(query.page, 10) || 1;

  const limit = parseInt(query.limit, 10) || 10;

  const sort = query.sort || 'desc';

  const { search } = query;

  let finalSearch = {};

  let direction = -1;

  if (sort === 'asc') {
    direction = 1;
  }

  if (search) {
    finalSearch = {
      ...query,
      $or: [
        {
          title: {
            $regex: search,
            $options: 'i',
          },
        },
        {
          description: {
            $regex: search,
            $options: 'i',
          },
        },
      ],
    };
  }

  const options = {
    populate: [
      {
        path: 'user',
        select: 'userName',
      },
      {
        path: 'category',
        select: 'name',
      },
      {
        path: 'programmingL',
        select: 'name',
      },
      {
        path: 'technology',
        select: 'name',
      },
      {
        path: 'tag',
        select: 'name',
      },
    ],
    sort: { createdAt: direction },
    page,
    limit,
  };

  const posts = await Post.paginate(finalSearch, options);

  return posts;
};

const findByIdAndUpdate = async ({ postId, body }) => {
  const {
    title,
    description,
    resource,
    url,
    date,
    programmingL,
    category,
    ranking,
    technology,
    tag,
  } = body;

  const options = {
    title,
    description,
    resource,
    url,
    date,
    ranking,
  };

  if (programmingL) {
    const postLanguage = await ProgrammingL.findOneAndUpdate(
      { name: programmingL },
      { $set: { name: programmingL } },
      {
        upsert: true,
        new: true,
      }
    );
    await postLanguage.save();
    options.programmingL = postLanguage._id;
  }

  if (category) {
    const postCategory = await Category.findOneAndUpdate(
      { name: category },
      { $set: { name: category } },
      {
        upsert: true,
        new: true,
      }
    );
    await postCategory.save();
    options.category = postCategory._id;
  }

  if (technology) {
    const postTechnology = await Technology.findOneAndUpdate(
      { name: technology },
      { $set: { name: technology } },
      {
        upsert: true,
        new: true,
      }
    );
    await postTechnology.save();
    options.technology = postTechnology._id;
  }

  if (tag) {
    const postTag = await Tag.findOneAndUpdate(
      { name: tag },
      { $set: { name: tag } },
      {
        upsert: true,
        new: true,
      }
    );
    await postTag.save();
    options.tag = postTag._id;
  }

  if (ranking) {
    const post = await findById(postId);
    let previousRanking = 0;
    const newVote = parseInt(ranking, 10);
    let newRanking = newVote;
    if (post.ranking) {
      previousRanking = post.ranking;
      newRanking = (newVote + previousRanking) / 2;
    }
    options.ranking = newRanking;
  }

  const updatedPost = await Post.findByIdAndUpdate(
    { _id: postId },
    { $set: options },
    { new: true }
  );

  const data = findById(updatedPost._id);

  return data;
};

const newPost = async ({ id, body }) => {
  const {
    title,
    description,
    resource,
    date,
    programmingL,
    category,
    ranking,
    technology,
    tag,
    url,
  } = body;

  const post = new Post({
    title,
    description,
    resource,
    date,
    user: id,
    ranking,
    url,
  });

  const postUser = await User.findById(id);
  postUser.post.push(post.id);
  await postUser.save();

  const postLanguage = await ProgrammingL.findOneAndUpdate(
    { name: programmingL },
    { $set: { name: programmingL } },
    {
      upsert: true,
      new: true,
    }
  );
  postLanguage.post.push(post.id);
  await postLanguage.save();

  const postCategory = await Category.findOneAndUpdate(
    { name: category },
    { $set: { name: category } },
    {
      upsert: true,
      new: true,
    }
  );
  postCategory.post.push(post.id);
  await postCategory.save();

  const postTechnology = await Technology.findOneAndUpdate(
    { name: technology },
    { $set: { name: technology } },
    {
      upsert: true,
      new: true,
    }
  );
  postTechnology.post.push(post.id);
  await postTechnology.save();

  const postTag = await Tag.findOneAndUpdate(
    { name: tag },
    { $set: { name: tag } },
    {
      upsert: true,
      new: true,
    }
  );
  postTag.post.push(post.id);
  await postTag.save();

  post.category = postCategory.id;
  post.programmingL = postLanguage.id;
  post.technology = postTechnology.id;
  post.tag = postTag.id;

  const savedPost = await post.save();

  return savedPost;
};

export { findById, newPost, findByQuery, findByIdAndUpdate };
