import { DataTypes } from 'sequelize';
import client from '../utils/db.js';
import Summary from './summary.js';
import Category from './category.js';

const Product = client.define('Product', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  namespaceId: {
    type: DataTypes.STRING,
  },
  fullPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discountPrice: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  specs: {
    type: DataTypes.JSON,
  },
  availableVariants: {
    type: DataTypes.JSON,
  },
});

Product.hasOne(Summary, { foreignKey: 'itemId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

export default Product;
