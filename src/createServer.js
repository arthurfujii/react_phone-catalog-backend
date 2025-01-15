import express from 'express';
import cors from 'cors';
import productRouter from './routes/product.route.js';
import categoryRouter from './routes/category.route.js';
import createEntries from '../createEntries.js';

const app = express();

const createServer = () => {
  app.use(cors());
  app.use(express.json());
  app.use('/products', productRouter);
  app.use('/categories', categoryRouter);
  app.use('/init', createEntries);

  return app;
};

export default createServer;
