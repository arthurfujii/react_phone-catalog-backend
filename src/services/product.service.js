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
  age: [['year', 'DESC']],
  title: [['name', 'ASC']],
  price: [['discountPrice', 'ASC']],
  default: [
    ['year', 'DESC'],
    ['name', 'ASC'],
  ],
};

const getAll = async (sort = 'default', limit = null) => {
  const products = await Product.findAll({
    include: { model: Summary, attributes: [] },
    attributes: attributes,
    order: sortMethods[sort],
    limit,
  });

  return products;
};

const getByCategory = async (categoryId, sort = 'default', limit = null) => {
  const productsByCategory = await Product.findAll({
    include: { model: Summary, attributes: [] },
    attributes: attributes,
    where: { categoryId },
    order: sortMethods[sort],
    limit,
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
