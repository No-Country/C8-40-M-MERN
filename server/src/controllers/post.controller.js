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
    ranking
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

const getAllPost = async (req, res) => {
  const { title, description, resource, date, programming_l, category, ranking } = req.query;
  const queryKey = Object.keys(req.query)[0];
  console.log(queryKey);

  try {
    let mongoResult;
    if (queryKey) {
      mongoResult = await Post.aggregate([
        {
          $match: req.query
        }
      ]);
    } else {
      mongoResult = await Post.find();
    }

    if (mongoResult) {
      success({ res, message: `post found successfully`, data: mongoResult });
    } else {
      error({ res, message: 'post found failed' });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  //console.log('body', body);
  try {
    const updatePost = await Post.findByIdAndUpdate({ _id: id }, { $set: body });
    //console.log('updatePost');
    if (updatePost) {
      success({ res, message: 'post updated', status: 201 });
    } else {
      error({ res, message: 'post not found' });
    }
  } catch (error) {
    serverError({ res, message: error.message });
  }
};

const postById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id)
    console.log('post',post)
    if(post) {
      success({ res, message: 'post By ID', status: 201 });
    }else {
      error({res, message: 'post not found'})
    }
  } catch (error) {
    serverError({ res, message: error.message });
  }

}



export { createPost, updatePost, getAllPost, postById };
