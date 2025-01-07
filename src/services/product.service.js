import Product from '../models/product.js';
import Summary from '../models/summary.js';
import sequelize from 'sequelize';

const attributes = [
  'id',
  'categoryId',
  'name',
  'namespaceId',
  [sequelize.col('Summary.year'), 'year'],
  'fullPrice',
  'discountPrice',
  'description',
  'images',
  'specs',
  'availableVariants',
];

const sortMethods = {
  age: ['year', 'DESC'],
  title: ['name', 'ASC'],
  price: ['discountPrice', 'ASC'],
  default: ['year', 'DESC'],
};

const getAll = async (sort = 'default') => {
  const products = await Product.findAll({
    include: { model: Summary, attributes: [] },
    attributes: attributes,
    order: [sortMethods[sort]],
  });
  const count = await Product.count({ group: ['categoryId'] });

  return { products, count };
};

const getByCategory = async (categoryId, sort) => {
  const productsByCategory = await Product.findAll({
    include: { model: Summary, attributes: [] },
    attributes: attributes,
    where: { categoryId },
    order: [sortMethods[sort]],
  });

  return productsByCategory;
};

const getById = async (productId) => {
  const product = await Product.findByPk(productId, {
    include: { model: Summary, attributes: [] },
    attributes: attributes,
  });

  return product;
};

const countProductsByCategory = async (category_name) => {
  const count = await Product.count({ where: { categoryId: category_name } });

  return count;
};

export default {
  getAll,
  getByCategory,
  getById,
  countProductsByCategory,
};
