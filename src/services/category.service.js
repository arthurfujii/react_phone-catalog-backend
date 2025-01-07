import Category from '../models/category.js';
import productService from './product.service.js';

const getAll = async () => {
  const result = await Category.findAll({
    attributes: ['category_name', 'bannerImg'],
  });

  const final = Promise.all(
    result.map(async (cat) => {
      const catProductsCount = await productService.countProductsByCategory(
        cat.category_name,
      );

      return {
        category_name: cat.category_name,
        bannerImg: cat.bannerImg,
        products_count: catProductsCount,
      };
    }),
  );

  return final;
};

const getById = async (categoryId) => {
  const category = await Category.findByPk(categoryId);
  const catProductsCount = productService.countProductsByCategory(categoryId);

  return {
    category_name: category.category_name,
    bannerImg: category.bannerImg,
    products_count: catProductsCount,
  };
};

export default {
  getAll,
  getById,
};
