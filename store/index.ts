import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSearch,
  updateStartDate,
  updateEndDate,
  toggleTypes,
  updateStartTime,
  updateEndTime,
  updateCity,
} from "./slices/filters-slice";
import filtersReducer from "./slices/filters-slice";
import type { ItemType } from "../types";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useStore = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return {
    ...state,
    updateCity: (city: string) => dispatch(updateCity(city)),
    updateSearch: (phrase: string) => dispatch(updateSearch(phrase)),
    updateStartTime: (time: string) => dispatch(updateStartTime(time)),
    updateEndTime: (time: string) => dispatch(updateEndTime(time)),
    toggleTypes: (option: ItemType) => dispatch(toggleTypes(option)),
    updateStartDate: (startDate: string) =>
      dispatch(updateStartDate(startDate)),
    updateEndDate: (endDate: string) => dispatch(updateEndDate(endDate)),
  };
};
