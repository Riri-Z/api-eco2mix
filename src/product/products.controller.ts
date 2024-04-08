import { Response, Request } from 'express';
import { Product } from './product.model';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.create({
      name,
      price,
      description
    });
    res.json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Controller for getting a product by ID
const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// updating a product
const updateProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const { name, price, description } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      product.name = name;
      product.price = price;
      product.description = description;
      await product.save();
      res.json({ message: 'Product updated successfully', product });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// deleting a product by ID
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      await product.destroy();
      res.send('Product deleted successfully');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById };
