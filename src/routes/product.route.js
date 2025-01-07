import express from 'express';
import productController from '../controllers/product.controller.js';
import catchError from '../utils/catchError.js';

const router = express.Router();

router.get('/', catchError(productController.getAll));
router.get('/:category', catchError(productController.getByCategory));
router.get('/:category/:productId', catchError(productController.getById));

export default router;
