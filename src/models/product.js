import { DataTypes } from 'sequelize';
import client from '../utils/db.js';
import summary from './summary.js';
import category from './category.js';

const product = client.define('product', {
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

product.hasOne(summary, { foreignKey: 'itemId' });
product.belongsTo(category, { foreignKey: 'categoryId' });

export default product;
