import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

interface IConsoEnergie {
  id?: number;
  date_heure: string;
  date: string;
  heure: string;
  code_insee_region: string;
  region: string;
  consommation_brute_gaz_grtgaz: number;
  statut_grtgaz: string;

  consommation_brute_gaz_terega: number;
  statut_terega: string;
  consommation_brute_gaz_totale: number;
  consommation_brute_electricite_rte: number;

  statut_rte: string;
  consommation_brute_totale: number;
}
export interface ConsoEnergieInstance extends Model<IConsoEnergie>, IConsoEnergie {}

export const ConsoEnergie = sequelize.define<ConsoEnergieInstance>(
  'consommation',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    heure: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_heure: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code_insee_region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    consommation_brute_gaz_grtgaz: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    statut_grtgaz: {
      type: DataTypes.STRING,
      allowNull: true
    },
    consommation_brute_gaz_terega: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    statut_terega: {
      type: DataTypes.STRING,
      allowNull: true
    },
    consommation_brute_gaz_totale: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    consommation_brute_electricite_rte: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    statut_rte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    consommation_brute_totale: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  },
  {
    tableName: 'consommation',
    timestamps: false
  }
);
