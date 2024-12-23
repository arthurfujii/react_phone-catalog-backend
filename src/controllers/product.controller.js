import categoryService from '../services/category.service.js';
import productService from '../services/product.service.js';

const getAll = async (req, res) => {
  const sort = req.query.sort;
  const result = await productService.getAll(sort);

  res.send(result);
};

const getByCategory = async (req, res) => {
  const category = req.params.category;
  const sort = req.query.sort;
  const categoryCheck = await categoryService.getById(category);

  if (!categoryCheck) {
    return res.status(404).send('Category not found');
  }

  const result = await productService.getByCategory(
    category,
    sort || 'default',
  );

  res.send(result);
};

export default {
  getAll,
  getByCategory,
};
