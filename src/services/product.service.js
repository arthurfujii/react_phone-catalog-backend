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

const getAll = async () => {
  const result = await Product.findAndCountAll({
    include: { model: Summary, attributes: [] },
    attributes: attributes,
  });

  return result;
};

const getByCategory = async (categoryId, sort) => {
  const sortMethods = {
    age: ['year', 'DESC'],
    title: ['name', 'ASC'],
    price: ['discountPrice', 'ASC'],
    default: ['year', 'DESC'],
  };

  const productsByCategory = await Product.findAndCountAll({
    include: { model: Summary, attributes: [] },
    attributes: attributes,
    where: { categoryId },
    order: [sortMethods[sort]],
  });

  return productsByCategory;
};

export default {
  getAll,
  getByCategory,
};
