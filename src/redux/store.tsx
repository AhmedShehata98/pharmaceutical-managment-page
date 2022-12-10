import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appSlice from "./Slices/AppSlice";

const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
