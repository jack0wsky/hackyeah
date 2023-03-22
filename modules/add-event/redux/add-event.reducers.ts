import { PayloadAction } from "@reduxjs/toolkit";
import type { ILeftover, ILeftoverFormValues } from "@/modules/add-event";

interface IEventAddress {
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

export interface AddEventState {
  name: string;
  description: string;
  banner: any;
  start: {
    date: string | null;
    time: string | null;
  };
  end: {
    date: string | null;
    time: string | null;
  };
  address: IEventAddress;
  leftovers: ILeftover[];
}

export const reducers = {
  updateBanner: (state: AddEventState, action: PayloadAction<unknown>) => {
    state.banner = action.payload;
  },
  updateName: (state: AddEventState, action: PayloadAction<string>) => {
    state.name = action.payload;
  },
  updateDescription: (state: AddEventState, action: PayloadAction<string>) => {
    state.description = action.payload;
  },
  setEventStartDate: (state: AddEventState, action: PayloadAction<string>) => {
    state.start.date = action.payload;
  },
  setEventStartTime: (state: AddEventState, action: PayloadAction<string>) => {
    state.start.time = action.payload;
  },
  setEventEndDate: (state: AddEventState, action: PayloadAction<string>) => {
    state.end.date = action.payload;
  },
  setEventEndTime: (
    state: AddEventState,
    { payload }: PayloadAction<string>
  ) => {
    state.end.time = payload;
  },
  setLeftovers: (
    state: AddEventState,
    action: PayloadAction<ILeftoverFormValues[]>
  ) => {
    state.leftovers = action.payload;
  },
  createLeftover: (
    state: AddEventState,
    { payload }: PayloadAction<ILeftover>
  ) => {
    state.leftovers = [payload, ...state.leftovers];
  },
  removeLeftover: (
    state: AddEventState,
    { payload }: PayloadAction<string>
  ) => {
    state.leftovers = state.leftovers.filter((item) => item.id !== payload);
  },
};
