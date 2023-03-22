import { createSlice } from "@reduxjs/toolkit";
import { AddEventState, reducers } from "./add-event.reducers";

const initialState: AddEventState = {
  name: "",
  description: "",
  banner: "",
  start: {
    date: null,
    time: null,
  },
  end: {
    date: null,
    time: null,
  },
  address: {
    street: "",
    postalCode: "",
    city: "",
    houseNumber: "",
  },
  leftovers: [],
};

export const addEventSlice = createSlice({
  name: "add-event",
  initialState,
  reducers,
});

export const {
  updateBanner,
  updateDescription,
  setEventStartDate,
  setEventEndDate,
  updateName,
  setEventStartTime,
  setEventEndTime,
  setLeftovers,
  createLeftover,
  removeLeftover,
} = addEventSlice.actions;

export default addEventSlice.reducer;
