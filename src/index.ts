import express, { Express } from 'express';
import dotenv from 'dotenv';
import { sequelize } from './db/connection';
import consommationEnergieRoutes from './routes/consommation_energie-routes';
import eco2mixRoutes from './routes/eco2mix.routes';
import cors from 'cors';
dotenv.config();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const app: Express = express();
const port = process.env.PORT || 3000;

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('Database synchronized');
});
app.use(cors(corsOptions));
app.use(express.json());

app.use(consommationEnergieRoutes);
app.use(eco2mixRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
