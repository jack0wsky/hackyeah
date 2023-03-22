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
} from "@/modules/add-event/redux/add-event.slice";
import AuthSliceReducer, {
  checkSession,
  removeToken,
  saveToken,
} from "@/modules/auth/auth.slice";
import type { EventLeftoverTypes } from "@/modules/events-list/types/event";
import type { ModalType } from "@/types/index";
import type { ILeftover, ILeftoverFormValues } from "@/modules/add-event";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    addEvent: AddEventReducer,
    modal: ModalReducer,
    auth: AuthSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAuth = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return {
    isLoggedIn: state.auth.isLoggedIn,
    saveToken: (token: string) => dispatch(saveToken(token)),
    checkSession: () => dispatch(checkSession()),
    removeToken: () => dispatch(removeToken()),
  };
};

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
    updateBanner: (banner: unknown) => dispatch(updateBanner(banner)),
    updateCity: (city: string) => dispatch(updateCity(city)),
    updateSearch: (phrase: string) => dispatch(updateSearch(phrase)),
    updateStartTime: (time: string) => dispatch(updateStartTime(time)),
    updateEndTime: (time: string) => dispatch(updateEndTime(time)),
    toggleTypes: (option: EventLeftoverTypes) => dispatch(toggleTypes(option)),
    updateStartDate: (startDate: string) =>
      dispatch(updateStartDate(startDate)),
    updateEndDate: (endDate: string) => dispatch(updateEndDate(endDate)),
  };
};
