import categoryService from '../services/category.service.js';

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();

  res.send(categories);
};

export default {
  getAll,
};
