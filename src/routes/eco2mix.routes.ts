import express from 'express';
import {
  createEco2mix,
  getOneByDateHour,
  getDataByDateRange,
  getLastDateRecord,
  getChartsConfigurations
} from '../eco_2_mix/eco_2_mix_controller';

const eco2mixRoutes = express.Router();

eco2mixRoutes.route('/eco2mix/total-production').get(getDataByDateRange);
eco2mixRoutes.route('/eco2mix/last-date-record').get(getLastDateRecord);
eco2mixRoutes.route('/eco2mix/').get(getOneByDateHour);
eco2mixRoutes.route('/eco2mix/create').post(createEco2mix);
eco2mixRoutes.route('/eco2mix/configurations').get(getChartsConfigurations);

export default eco2mixRoutes;
