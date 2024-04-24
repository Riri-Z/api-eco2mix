import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

interface IEco2mix {
  id?: number;
  perimetre: string;
  nature: string;
  date: string;
  heure: string;
  date_heure: string;
  consommation: number;
  prevision_j1: number;
  prevision_j: number;
  fioul: number;
  charbon: number;
  gaz: number;
  nucleaire: number;
  eolien: number;
  eolien_terrestre: number;
  eolien_offshore: number;
  solaire: number;
  hydraulique: number;
  pompage: number;
  bioenergies: number;
  ech_physiques: number;
  taux_co2: number;
  ech_comm_angleterre: string;
  ech_comm_espagne: number;
  ech_comm_italie: number;
  ech_comm_suisse: number;
  ech_comm_allemagne_belgique: string;
  fioul_tac: number;
  fioul_cogen: number;
  fioul_autres: number;
  gaz_tac: number;
  gaz_cogen: number;
  gaz_ccg: number;
  gaz_autres: number;
  hydraulique_fil_eau_eclusee: number;
  hydraulique_lacs: number;
  hydraulique_step_turbinage: number;
  bioenergies_dechets: number;
  bioenergies_biomasse: number;
  bioenergies_biogaz: number;
  stockage_batterie: string;
  destockage_batterie: string;
}

export interface IEco2mixInstance extends Model<IEco2mix>, IEco2mix {}

export const Eco2mix = sequelize.define<IEco2mixInstance>(
  'Eco2mix',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    perimetre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nature: {
      type: DataTypes.STRING,
      allowNull: false
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
    consommation: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    prevision_j1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    prevision_j: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fioul: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    charbon: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gaz: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nucleaire: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    eolien: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    eolien_terrestre: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    eolien_offshore: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    solaire: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hydraulique: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pompage: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    bioenergies: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ech_physiques: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    taux_co2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ech_comm_angleterre: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ech_comm_espagne: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ech_comm_italie: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ech_comm_suisse: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ech_comm_allemagne_belgique: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fioul_tac: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fioul_cogen: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fioul_autres: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gaz_tac: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gaz_cogen: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gaz_ccg: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gaz_autres: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hydraulique_fil_eau_eclusee: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hydraulique_lacs: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hydraulique_step_turbinage: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    bioenergies_dechets: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    bioenergies_biomasse: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    bioenergies_biogaz: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stockage_batterie: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    destockage_batterie: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  },
  {
    tableName: 'eco_2_mix',
    timestamps: false
  }
);
