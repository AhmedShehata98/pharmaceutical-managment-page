export interface IMedicine {
  id: string;
  name: string;
  nameAsArabic: string;
  qrCode: string;
  pharmaceuticalForm: string;
  unitType: string;
  chemicalName: string;
  latinName: string;
  companyName: string;
  countOfUnits: number;
  locallyBarcode: string;
  section: string;
  internationalBarcode: string;
  Category: string;
}

export interface IAddMedicineAction {
  newDrug: Partial<IMedicine>;
}
export interface IDeleteMedicineAction {
  id: string;
}

export interface IinitialState {
  drugs: Partial<IMedicine>[];
}
