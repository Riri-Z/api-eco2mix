import { Response, Request } from 'express';
import { ConsoEnergie } from './consommation_energie.model';

const createEnergieRecord = async (req: Request, res: Response) => {
  try {
    const { annee, filiere, consototale } = req.body;
    const record = await ConsoEnergie.create({
      annee,
      filiere,
      consototale
    });
    res.json({ message: 'createEnergieRecord successfully', record });
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};

const getAllEnergieRecord = async (req: Request, res: Response) => {
  try {
    const records = await ConsoEnergie.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};

const deleteOneRecord = async (req: Request, res: Response) => {
  try {
    const consoEnergieID = req.params.id;
    const record = await ConsoEnergie.findByPk(consoEnergieID);
    if (!record) {
      res.status(404).send('record not found');
    } else {
      await record.destroy();
      res.send('Product deleted successfully');
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error ${error}`);
  }
};

export { createEnergieRecord, getAllEnergieRecord, deleteOneRecord };
