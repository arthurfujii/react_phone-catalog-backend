import product from '../models/product.js';
import summary from '../models/summary.js';
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
  age: [['year', 'DESC']],
  title: [['name', 'ASC']],
  price: [['discountPrice', 'ASC']],
  default: [
    ['year', 'DESC'],
    ['name', 'ASC'],
  ],
};

const getAll = async (sort = 'default', limit = null) => {
  const products = await product.findAll({
    include: { model: summary, attributes: [] },
    attributes: attributes,
    order: sortMethods[sort],
    limit,
  });

  return products;
};

const getByCategory = async (categoryId, sort = 'default', limit = null) => {
  const productsByCategory = await product.findAll({
    include: { model: summary, attributes: [] },
    attributes: attributes,
    where: { categoryId },
    order: sortMethods[sort],
    limit,
  });

  return productsByCategory;
};

const getById = async (productId) => {
  const product = await product.findByPk(productId, {
    include: { model: summary, attributes: [] },
    attributes: attributes,
  });

  return product;
};

const countProductsByCategory = async (category_name) => {
  const count = await product.count({ where: { categoryId: category_name } });

  return count;
};

export default {
  getAll,
  getByCategory,
  getById,
  countProductsByCategory,
};
