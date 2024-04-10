import { Response, Request } from 'express';
import { Eco2mix } from './eco_2_mix_model';

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

    /* On doit vérifier si l'enregistrement existe, la condition est : date_heure */
    const isRecordExist = await Eco2mix.findOne({
      where: { date_heure: date_heure }
    });
    if (isRecordExist === null) {
      console.log('not FOUND');
      res.json({ message: 'not FOUND' });
    } else {
      console.log(isRecordExist.id);
      res.json({ recordFound: isRecordExist });
    }
    /*    const isRecordExist = await Eco2mix.findOne({
      date_heure: date_heure,
      perimetre,
      nature,
      date,
      heure,
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
    }); */

    /*  const record = await Eco2mix.create({
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
    }); */
    res.json({ message: 'Saved successfully', isRecordExist });
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};

const getOneByDateHour = async (req: Request, res: Response) => {
  const { date_heure } = req.body;
  try {
    const isRecordExist = await Eco2mix.findOne({
      where: { date_heure: date_heure }
    });
    console.log('isRecordExist', isRecordExist);
    if (isRecordExist === null) {
      res.json({ recordFound: null });
    } else {
      res.json({ recordFound: isRecordExist });
    }
  } catch (error) {
    res.json({ error: error });
  }
};

const populateTable_eco2_mix = async (req: Request, res: Response) => {
  console.log('populateTable_eco2_mix');
};
export { createEco2mix, getOneByDateHour };
