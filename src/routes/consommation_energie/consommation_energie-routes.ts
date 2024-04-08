import express from 'express';

import {
  createEnergieRecord,
  getAllEnergieRecord,
  deleteOneRecord
} from '../../consommation_energie/consommation_energie.controller';

const consommationEnergieRoutes = express.Router();

consommationEnergieRoutes.route('/conso_gaz_elec').get(getAllEnergieRecord).post(createEnergieRecord);
consommationEnergieRoutes.route('/conso_gaz_elec/:id').delete(deleteOneRecord);

export default consommationEnergieRoutes;
