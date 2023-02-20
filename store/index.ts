import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import filtersReducer, {
  updateSearch,
  updateStartDate,
  updateEndDate,
  toggleTypes,
  updateStartTime,
  updateEndTime,
  updateCity,
} from "./slices/filters-slice";
import ModalReducer, { openModal, closeModal } from "./slices/modal-slice";
import AddEventReducer, {
  updateBanner,
  updateName,
  updateDescription,
  setEventEndDate,
  setEventStartDate,
  setEventStartTime,
  setEventEndTime,
  setLeftovers,
  createLeftover,
  removeLeftover,
} from "./slices/add-event/add-event.slice";
import type { ItemType, ModalType } from "../types";
import {
  ILeftoverFormValues,
  ILeftover,
} from "../modules/add-event/leftovers/types";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    addEvent: AddEventReducer,
    modal: ModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useStore = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return {
    ...state,
    openModal: (modalType: ModalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    // ADD EVENT
    createLeftover: (leftover: ILeftover) => dispatch(createLeftover(leftover)),
    updateDescription: (description: string) =>
      dispatch(updateDescription(description)),
    setEventStartTime: (time: string) => dispatch(setEventStartTime(time)),
    setEventStartDate: (date: string) => dispatch(setEventStartDate(date)),
    setEventEndDate: (date: string) => dispatch(setEventEndDate(date)),
    setEventEndTime: (time: string) => dispatch(setEventEndTime(time)),
    setLeftovers: (leftovers: ILeftoverFormValues[]) =>
      dispatch(setLeftovers(leftovers)),
    removeLeftover: (leftoverId: string) =>
      dispatch(removeLeftover(leftoverId)),
    updateName: (name: string) => dispatch(updateName(name)),
    updateBanner: (banner: any) => dispatch(updateBanner(banner)),
    updateCity: (city: string) => dispatch(updateCity(city)),
    updateSearch: (phrase: string) => dispatch(updateSearch(phrase)),
    updateStartTime: (time: string) => dispatch(updateStartTime(time)),
    updateEndTime: (time: string) => dispatch(updateEndTime(time)),
    toggleTypes: (option: ItemType) => dispatch(toggleTypes(option)),
    updateStartDate: (startDate: Date | undefined) =>
      dispatch(updateStartDate(startDate)),
    updateEndDate: (endDate: Date | undefined) =>
      dispatch(updateEndDate(endDate)),
  };
};
