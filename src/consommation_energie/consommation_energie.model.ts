import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

interface IConsoEnergie {
  annee: string;
  filiere: string;
  consototale: number;
}

export interface ConsoEnergieInstance extends Model<IConsoEnergie>, IConsoEnergie {}

export const ConsoEnergie = sequelize.define<ConsoEnergieInstance>(
  'ConsoEnergie',
  {
    annee: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filiere: {
      type: DataTypes.STRING,
      allowNull: false
    },
    consototale: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);
