import 'dotenv/config';
import Sequelize from 'sequelize';

let client;

if (process.env.DB_URL) {
  client = new Sequelize(process.env.DB_URL);
} else {
  client = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });
}

export default client;
