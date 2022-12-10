import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAddMedicineAction,
  IDeleteMedicineAction,
  IinitialState,
} from "./IApp";

const initialState: Partial<IinitialState> = {
  drugs: [],
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    ADD_MEDICINE: (state, action: PayloadAction<IAddMedicineAction>) => {
      state.drugs?.push(action.payload.newDrug);
    },
    DELETE_MEDICINE: (state, action: PayloadAction<IDeleteMedicineAction>) => {
      const newDrugsData = state.drugs?.filter(
        (drug) => drug.id !== action.payload.id
      );
      state.drugs = newDrugsData;
    },
  },
});
export const { ADD_MEDICINE, DELETE_MEDICINE } = appSlice.actions;
export default appSlice;
