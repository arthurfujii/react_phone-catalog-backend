import express from 'express';
import categoryController from '../controllers/category.controller.js';
import catchError from '../utils/catchError.js';

const router = express.Router();

router.get('/', catchError(categoryController.getAll));

export default router;
