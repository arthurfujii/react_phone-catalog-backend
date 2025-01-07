import categoryService from '../services/category.service.js';
import productService from '../services/product.service.js';

const getAll = async (req, res) => {
  const sort = req.query.sort;
  const limit = req.query.limit;
  const result = await productService.getAll(sort || 'default', limit || null);

  res.send(result);
};

const getByCategory = async (req, res) => {
  const category = req.params.category;
  const sort = req.query.sort;
  const limit = req.query.limit;
  const categoryCheck = await categoryService.getById(category);

  if (!categoryCheck) {
    return res.status(404).send('Category not found');
  }

  const result = await productService.getByCategory(
    category,
    sort || 'default',
    limit || null,
  );

  res.send(result);
};

const getById = async (req, res) => {
  const { productId } = req.params;
  const product = await productService.getById(productId);

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.send(product);
};

export default {
  getAll,
  getByCategory,
  getById,
};
