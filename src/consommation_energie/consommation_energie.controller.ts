import { Response, Request } from 'express';
import { ConsoEnergie } from './consommation_energie.model';

import { Op } from 'sequelize';

const getAllConsommation = async (req: Request, res: Response) => {
  try {
    const records = await ConsoEnergie.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};
const getLastDateRecord = async (req: Request, res: Response) => {
  const filter = {
    consommation: {
      [Op.not]: null
    }
  };

  try {
    const response = await ConsoEnergie.findAll({
      limit: 1,
      attributes: ['date'],
      where: filter,
      order: [['date_heure', 'DESC']]
    });

    if (response === null) {
      res.json(null);
    } else {
      res.json(response[0]);
    }
  } catch (error) {
    res.json({ error: error });
  }
};

const getAllFilterByDate = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(400).statusMessage;
      return res.json({ erorr: 'Missing startDate OR endDate in query' });
    }

    const filterByDate = {
      date: {
        [Op.and]: {
          [Op.gte]: startDate,
          [Op.lte]: endDate
        }
      }
    };

    const response = await ConsoEnergie.findAll({
      attributes: [
        'date_heure',
        'date',
        'heure',
        'code_insee_region',
        'region',
        'consommation_brute_gaz_grtgaz',
        'statut_grtgaz',
        'consommation_brute_gaz_terega',
        'statut_terega',
        'consommation_brute_gaz_totale',
        'consommation_brute_electricite_rte',
        'statut_rte',
        'consommation_brute_totale'
      ],
      where: filterByDate,
      order: [['date_heure', 'ASC']]
    });

    res.json(response?.[0]);
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};

export { getAllFilterByDate, getAllConsommation, getLastDateRecord };
