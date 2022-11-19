import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { updateSearch, updateStartDate } from "./slices/filters-slice";
import filtersReducer from "./slices/filters-slice";

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
    updateSearch: (phrase: string) => dispatch(updateSearch(phrase)),
    updateStartDate: (startDate: Date) => dispatch(updateStartDate(startDate)),
  };
};
