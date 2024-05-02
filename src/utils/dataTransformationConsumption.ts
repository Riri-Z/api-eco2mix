import { IConsoEnergie } from './../consommation_energie/consommation_energie.model';

interface ItransformedValue {
  date: string;
  consommation_brute_gaz_grtgaz: number;
  consommation_brute_gaz_terega: number;
  consommation_brute_gaz_totale: number;
  consommation_brute_electricite_totale: number;
  code_insee_region: string;
  region: string;
}

/* Mapping for highchart js paquage */
enum regionMapping {
  'Bretagne' = 'fr-bre',
  'Pays de la Loire' = 'fr-pdl',
  "Provence-Alpes-Côte d'Azur" = 'fr-pac',
  'Occitanie' = 'fr-occ',
  'Nouvelle-Aquitaine' = 'fr-naq',
  'Bourgogne-Franche-Comté' = 'fr-bfc',
  'Centre-Val de Loire' = 'fr-cvl',
  'Île-de-France' = 'fr-idf',
  'Hauts-de-France' = 'fr-hdf',
  'Auvergne-Rhône-Alpes' = 'fr-ara',
  'Grand Est' = 'fr-ges',
  Normandie = 'fr-nor'
}

export const transformedData = (data: IConsoEnergie[]) =>
  data.reduce((accumulator: ItransformedValue[], currentValue) => {
    /* Save only needed properties */
    const formatCurrentValue = {
      date: currentValue.date,
      consommation_brute_gaz_grtgaz: currentValue.consommation_brute_gaz_grtgaz,
      consommation_brute_gaz_terega: currentValue.consommation_brute_gaz_terega,
      consommation_brute_gaz_totale: currentValue.consommation_brute_gaz_totale,
      consommation_brute_electricite_totale: currentValue.consommation_brute_electricite_rte,
      code_insee_region: currentValue.code_insee_region,
      region: currentValue.region,
      regionCodeISO3166: regionMapping[currentValue.region as keyof typeof regionMapping] || 'Unknown'
    };

    /* Cast value to number */
    const parseIntValue = (value: string | number): number => {
      if (value !== '') {
        return typeof value === 'string' ? parseInt(value, 10) : value;
      }
      return 0;
    };

    /* Verify if data on specific region already in accumulator */
    const findIndexCurrentValue = accumulator.findIndex((e) => e.code_insee_region === currentValue.code_insee_region);

    if (findIndexCurrentValue > -1) {
      let data = accumulator[findIndexCurrentValue];

      data = {
        ...data,
        consommation_brute_gaz_grtgaz:
          parseIntValue(data.consommation_brute_gaz_grtgaz) +
          parseIntValue(formatCurrentValue.consommation_brute_gaz_grtgaz),
        consommation_brute_gaz_terega:
          parseIntValue(data.consommation_brute_gaz_terega) +
          parseIntValue(formatCurrentValue.consommation_brute_gaz_terega),
        consommation_brute_gaz_totale:
          parseIntValue(data.consommation_brute_gaz_totale) +
          parseIntValue(formatCurrentValue.consommation_brute_gaz_totale),
        consommation_brute_electricite_totale:
          parseIntValue(data.consommation_brute_electricite_totale) +
          parseIntValue(formatCurrentValue.consommation_brute_electricite_totale)
      };
      accumulator[findIndexCurrentValue] = data;
    } else {
      accumulator.push(formatCurrentValue);
    }

    return accumulator;
  }, [] as ItransformedValue[]);
