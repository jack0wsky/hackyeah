import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDays } from "date-fns";
import type { ItemType } from "../../types";

interface IInitialState {
  searchPhrase: string;
  time: {
    start: Date;
    end: Date;
  };
  city: string;
  type: ItemType[];
}

const initialState: IInitialState = {
  searchPhrase: "",
  time: {
    start: new Date(),
    end: addDays(new Date(), 1),
  },
  city: "",
  type: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state.searchPhrase = action.payload;
    },
    updateStartDate: (state, action: PayloadAction<Date>) => {
      state.time.start = action.payload;
    },
  },
});

export const { updateSearch, updateStartDate } = filtersSlice.actions;

export default filtersSlice.reducer;
