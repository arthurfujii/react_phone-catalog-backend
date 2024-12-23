import Category from '../models/category.js';

const getAll = async () => {
  const result = await Category.findAll({
    attributes: ['category_name', 'bannerImg'],
  });

  return result;
};

const getById = async (categoryId) => {
  const result = await Category.findByPk(categoryId);

  return result;
};

export default {
  getAll,
  getById
};
