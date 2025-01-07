import categoryService from '../services/category.service.js';

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();

  if (!categories) {
    return res.status(400).send('No categories found');
  }

  res.send(categories);
};

const getById = async (req, res) => {
  const { categoryId } = req.params;
  const category = await categoryService.getById(categoryId);

  if (!category) {
    return res.status(404).send('Category not found');
  }

  res.send(category);
};

export default {
  getAll,
  getById,
};
