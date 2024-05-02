import { Response, Request } from 'express';
import { ConsoEnergie } from './consommation_energie.model';
import { transformedData } from '../utils/dataTransformationConsumption';
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
  try {
    const response = await ConsoEnergie.findAll({
      limit: 1,
      attributes: ['date'],
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
  const { date } = req.query;

  const filterByDate = {
    date: {
      [Op.eq]: date
    }
  };
  try {
    if (!date) {
      res.status(400).statusMessage;
      return res.json({ erorr: 'Missing date in query' });
    }

    const response = await ConsoEnergie.findAll({
      attributes: [
        'date_heure',
        'date',
        'heure',
        'code_insee_region',
        'region',
        'consommation_brute_gaz_grtgaz',
        'consommation_brute_gaz_terega',
        'consommation_brute_gaz_totale',
        'consommation_brute_electricite_rte',
        'consommation_brute_totale'
      ],
      where: filterByDate,
      order: [['date_heure', 'ASC']]
    });

    if (Array.isArray(response) && response.length > 0) {
      const formatData = transformedData(response);
      res.status(200).json(formatData);
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};

export { getAllFilterByDate, getAllConsommation, getLastDateRecord };
