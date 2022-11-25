import { success, error, serverError } from '../helpers/responses.js';
import Programming_L from '../models/Programming_L.model.js';
import Category from '../models/Category.model.js';

const getForSideBar = async (req, res) => {
  try {
    const categories = await Category.find({}, 'name');
    const programmingL = await Programming_L.find({}, 'name');
    const data = { categories, programmingL };
    if (data) {
      success({ res, message: 'sidebar', data });
    } else {
      error({ res, message: 'data not found' });
    }
  } catch (error) {
    return serverError({ res, message: error.message });
  }
};
export { getForSideBar };
