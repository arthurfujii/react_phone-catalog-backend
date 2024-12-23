import { DataTypes } from 'sequelize';
import client from '../utils/db.js';

export const Category = client.define('Category', {
  category_name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  bannerImg: {
    type: DataTypes.STRING,
  },
});

export default Category;
