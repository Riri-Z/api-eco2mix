import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
} from '../product/products.controller';

const productRoutes = express.Router();

productRoutes
  .route('/products')
  // Get all products
  .get(getAllProducts)
  // Create a new product
  .post(createProduct);

productRoutes
  .route('/products/:id')
  // Get a product by ID
  .get(getProductById)
  // Update a product by ID
  .put(updateProductById)
  // Delete a product by ID
  .delete(deleteProductById);

export default productRoutes;
