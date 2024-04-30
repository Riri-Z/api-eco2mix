import express from 'express';

import { getAllFilterByDate, getAllConsommation } from '../consommation_energie/consommation_energie.controller';

const consommationEnergieRoutes = express.Router();

consommationEnergieRoutes.route('/consumption/all').get(getAllConsommation);
consommationEnergieRoutes.route('/consumption/total-by-date').get(getAllFilterByDate);

export default consommationEnergieRoutes;
