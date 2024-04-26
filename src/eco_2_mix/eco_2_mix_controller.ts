import { Response, Request } from 'express';
import { Eco2mix } from './eco_2_mix_model';
import { Op } from 'sequelize';

interface Eco2MIxFormated {
  id?: number;
  perimetre: string;
  nature: string;
  date: string;
  heure: string;
  date_heure: string;
  consommation: number;
  fioul: number;
  charbon: number;
  gaz: number;
  nucleaire: number;
  eolien: number;
  solaire: number;
  hydraulique: number;
  pompage: number;
  bioenergies: number;
  taux_co2: number;
  stockage_batterie: string;
  destockage_batterie: string;
}

const createEco2mix = async (req: Request, res: Response) => {
  try {
    const {
      perimetre,
      nature,
      date,
      heure,
      date_heure,
      consommation,
      prevision_j1,
      prevision_j,
      fioul,
      charbon,
      gaz,
      nucleaire,
      eolien,
      eolien_terrestre,
      eolien_offshore,
      solaire,
      hydraulique,
      pompage,
      bioenergies,
      ech_physiques,
      taux_co2,
      ech_comm_angleterre,
      ech_comm_espagne,
      ech_comm_italie,
      ech_comm_suisse,
      ech_comm_allemagne_belgique,
      fioul_tac,
      fioul_cogen,
      fioul_autres,
      gaz_tac,
      gaz_cogen,
      gaz_ccg,
      gaz_autres,
      hydraulique_fil_eau_eclusee,
      hydraulique_lacs,
      hydraulique_step_turbinage,
      bioenergies_dechets,
      bioenergies_biomasse,
      bioenergies_biogaz,
      stockage_batterie,
      destockage_batterie
    } = req.body;

    const record = await Eco2mix.create({
      perimetre,
      nature,
      date,
      heure,
      date_heure,
      consommation,
      prevision_j1,
      prevision_j,
      fioul,
      charbon,
      gaz,
      nucleaire,
      eolien,
      eolien_terrestre,
      eolien_offshore,
      solaire,
      hydraulique,
      pompage,
      bioenergies,
      ech_physiques,
      taux_co2,
      ech_comm_angleterre,
      ech_comm_espagne,
      ech_comm_italie,
      ech_comm_suisse,
      ech_comm_allemagne_belgique,
      fioul_tac,
      fioul_cogen,
      fioul_autres,
      gaz_tac,
      gaz_cogen,
      gaz_ccg,
      gaz_autres,
      hydraulique_fil_eau_eclusee,
      hydraulique_lacs,
      hydraulique_step_turbinage,
      bioenergies_dechets,
      bioenergies_biomasse,
      bioenergies_biogaz,
      stockage_batterie,
      destockage_batterie
    });
    res.json({ message: 'Saved successfully', record });
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};

const getDataByDateRange = async (req: Request, res: Response) => {
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

  try {
    const response: Partial<Eco2MIxFormated>[] | null = await Eco2mix.findAll({
      attributes: [
        'id',
        'perimetre',
        'nature',
        'date',
        'heure',
        'date_heure',
        'consommation',
        'taux_co2',
        'prevision_j1',
        'prevision_j',
        'fioul',
        'charbon',
        'gaz',
        'nucleaire',
        'eolien',
        'solaire',
        'hydraulique',
        'pompage',
        'bioenergies',
        'stockage_batterie',
        'destockage_batterie',
        'ech_comm_angleterre',
        'ech_comm_espagne',
        'ech_comm_italie',
        'ech_comm_suisse',
        'ech_comm_allemagne_belgique'
      ],
      where: filterByDate,
      order: [['date_heure', 'ASC']]
    });
    if (response === null) {
      return res.json({ recordFound: null });
    }

    res.json({ data: response, recordLength: response.length });
  } catch (error) {
    res.json({ error: error, data: null });
  }
};

const getLastDateRecord = async (req: Request, res: Response) => {
  const filter = {
    consommation: {
      [Op.not]: null
    }
  };

  try {
    const response = await Eco2mix.findAll({
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

const getOneByDateHour = async (req: Request, res: Response) => {
  const { date_heure } = req.body;
  try {
    const isRecordExist = await Eco2mix.findOne({
      where: { date_heure: date_heure }
    });

    if (isRecordExist === null) {
      res.json({ recordFound: null });
    } else {
      res.json({ recordFound: isRecordExist });
    }
  } catch (error) {
    res.json({ error: error });
  }
};
/*
TODO
*/
/* const populateTable_eco2_mix = async (req: Request, res: Response) => {
  console.log('populateTable_eco2_mix');
}; */
export { createEco2mix, getOneByDateHour, getDataByDateRange, getLastDateRecord };
