import express from 'express';
import {
  createEco2mix,
  getOneByDateHour,
  getDataByDateRange,
  getLastRecord,
  getAllEnergiesTrade,
  getCo2Rate
} from '../eco_2_mix/eco_2_mix_controller';

const eco2mixRoutes = express.Router();

eco2mixRoutes.route('/eco2mix/totalproduction/').get(getDataByDateRange);
eco2mixRoutes.route('/eco2mix/co2Rate/').get(getCo2Rate);
eco2mixRoutes.route('/eco2mix/lastRecord').get(getLastRecord);
eco2mixRoutes.route('/eco2mix/energiesTrade').get(getAllEnergiesTrade);
eco2mixRoutes.route('/eco2mix/').get(getOneByDateHour);
eco2mixRoutes.route('/eco2mix/').post(createEco2mix);

export default eco2mixRoutes;
