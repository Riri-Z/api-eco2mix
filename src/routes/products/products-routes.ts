import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
} from '../../controllers/products-controller';
const productRoutes = express.Router();
productRoutes
  .route('/products') // Create a new product
  .get(getAllProducts)

  // Get all products
  .post(createProduct);
productRoutes
  .route('/products/:id')
  // Get a product by ID
  .get(getProductById)
  // Update a product by ID
  .put(updateProductById)
  // Delete a product by ID
  .delete(deleteProductById);
// Export the productRoutes
export default productRoutes;
