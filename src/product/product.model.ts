import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

interface ProductAttributes {
  name: string;
  price: number;
  description?: string | null;
}

export interface ProductInstance extends Model<ProductAttributes>, ProductAttributes {}

// Define a model for the 'products' table
export const Product = sequelize.define<ProductInstance>('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});
