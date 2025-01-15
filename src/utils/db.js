import 'dotenv/config';
import Sequelize from 'sequelize';

let client;

if (process.env.DB_URL) {
  client = new Sequelize(process.env.DB_URL);
} else {
  client = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
}

export default client;
