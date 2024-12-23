import { DataTypes } from 'sequelize';
import client from '../utils/db.js';

const Summary = client.define('Summary', {
  categoryId: {
    type: DataTypes.STRING,
  },
  itemId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  fullPrice: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  screen: {
    type: DataTypes.STRING,
  },
  capacity: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  ram: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
  },
});

export default Summary;
