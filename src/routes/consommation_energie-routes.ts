import express from 'express';

import {
  getAllFilterByDate,
  getAllConsommation,
  getLastDateRecord
} from '../consommation_energie/consommation_energie.controller';

const consommationEnergieRoutes = express.Router();

consommationEnergieRoutes.route('/consumption/all').get(getAllConsommation);
consommationEnergieRoutes.route('/consumption').get(getAllFilterByDate);
consommationEnergieRoutes.route('/consumption/last-date-record').get(getLastDateRecord);

export default consommationEnergieRoutes;
