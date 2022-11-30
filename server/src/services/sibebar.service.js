import ProgrammingL from '../models/ProgrammingL.model.js';

import Category from '../models/Category.model.js';

import Tag from '../models/Tag.model.js';

import Technology from '../models/Technology.model.js';

export default async function findAll() {
  const categories = await Category.find({}, 'name');
  const programmingL = await ProgrammingL.find({}, 'name');
  const tags = await Tag.find({}, 'name');
  const technologies = await Technology.find({}, 'name');
  return {
    categories,
    programmingL,
    tags,
    technologies,
  };
}
