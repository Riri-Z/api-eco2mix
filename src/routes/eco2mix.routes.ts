import express from 'express';
import { createEco2mix, getOneByDateHour, getDataByDateRange } from '../eco_2_mix/eco_2_mix_controller';

const eco2mixRoutes = express.Router();

eco2mixRoutes.route('/eco2mix/totalproduction/').get(getDataByDateRange);
eco2mixRoutes.route('/eco2mix/').get(getOneByDateHour);
eco2mixRoutes.route('/eco2mix/').post(createEco2mix);

export default eco2mixRoutes;
