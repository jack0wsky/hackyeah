import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDays } from "date-fns";
import type { ItemType } from "../../types";

interface StartDate {
  date: string;
  time: string;
}

interface IInitialState {
  searchPhrase: string;
  start: StartDate;
  end: StartDate;
  city: string;
  types: ItemType[];
}

const initialState: IInitialState = {
  searchPhrase: "",
  start: {
    date: new Date().toString(),
    time: "10:00",
  },
  end: {
    date: addDays(new Date(), 2).toString(),
    time: "12:00",
  },
  city: "",
  types: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateSearch: (state, { payload }: PayloadAction<string>) => {
      state.searchPhrase = payload;
    },
    updateStartDate: (state, { payload }: PayloadAction<string>) => {
      state.start.date = payload;
    },
    updateEndDate: (state, { payload }: PayloadAction<string>) => {
      state.end.date = payload;
    },
    toggleTypes: (state, { payload }: PayloadAction<ItemType>) => {
      if (state.types.includes(payload)) {
        state.types = state.types.filter((item) => item !== payload);
        return;
      }
      state.types = [payload, ...state.types];
    },
    updateStartTime: (state, action) => {
      state.start.time = action.payload;
    },
    updateEndTime: (state, action) => {
      state.end.time = action.payload;
    },
  },
});

export const {
  updateSearch,
  updateStartDate,
  updateEndDate,
  toggleTypes,
  updateStartTime,
  updateEndTime,
} = filtersSlice.actions;

export default filtersSlice.reducer;
