import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { sequelize } from './db/connection';
import productRoutes from './routes/products/products-routes';
import consommationEnergieRoutes from './routes/consommation_energie/consommation_energie-routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('Database synchronized');
});
app.use(express.json());

app.use(productRoutes);
app.use(consommationEnergieRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Serversss');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
