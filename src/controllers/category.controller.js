import categoryService from '../services/category.service.js';

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();

  res.send(categories);
};

const getById = async (req, res) => {
  const { categoryId } = req.params;
  const category = await categoryService.getById(categoryId);

  res.send(category);
};

export default {
  getAll,
  getById,
};
