import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ModalType } from "../../types";

interface InitialState {
  modalType: ModalType | null;
}

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalType: null,
  } as InitialState,
  reducers: {
    openModal: (state: InitialState, action: PayloadAction<ModalType>) => {
      state.modalType = action.payload;
    },
    closeModal: (state: InitialState) => {
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
