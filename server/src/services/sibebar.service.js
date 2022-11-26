import Programming_L from '../models/Programming_L.model.js';
import Category from '../models/Category.model.js';
import Tag from '../models/Tag.model.js';
import Technology from '../models/Technology.model.js';

const findAll = async () => {
  const categories = await Category.find({}, 'name');
  const programmingL = await Programming_L.find({}, 'name');
  const tags = await Tag.find({}, 'name');
  const technologies = await Technology.find({}, 'name');
  return {
    categories,
    programmingL,
    tags,
    technologies,
  };
};

export { findAll };
